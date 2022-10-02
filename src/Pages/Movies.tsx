import React, { useEffect, useReducer,Reducer } from 'react';
import IndividualFrame from '../Components/IndividualFrame';
import GenreItem from '../Components/GenreItem'
import RandomMovieGenerator from '../Components/RandomMovieGenerator'
import { reducer } from '../Components/reducer';
import { State, Action, Item } from '../Components/Types';

function Movies() {
  const coreDataUrl = 'https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data';

  useEffect(() => {
    fetch(coreDataUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_DATA",
          filmInformationData: data
        });
        dispatch({
          type: "SET_DISPLAY_DATA",
          displayData: data
        });

        let genreArray: string[] = [];

        data.forEach((element: Item) => {
          element.genre.forEach((item: string) => {
            if(!genreArray.includes(item)){
              genreArray.push(item);
            }
          });
        });

        dispatch({
          type: "SET_GENRES_ARRAY",
          allGenresArray: genreArray
        })

      });
  },[]);

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    filmInformationData: [],
    searchTerm: "",
    displayData: [],
    allGenresArray: []
  });

  const handleSubmit = (event: any) => {
    let newFilmInformationData: Item[] = [];

    state.filmInformationData.forEach((element: Item) => {
      if(element.name.toLowerCase().includes(state.searchTerm.toLowerCase())){
        newFilmInformationData.push(element);
      }
    });

    dispatch({
      type: "SET_DISPLAY_DATA",
      displayData: newFilmInformationData
    })

    event.preventDefault();
  };

  return (
    <>
    <div className="App">
      <div className="toolbar">
        <RandomMovieGenerator filmInformationData= {state.filmInformationData} dispatch={dispatch} />
        <div>
        {
          state.allGenresArray.map((item: string, index: number) => {
            return (
              <GenreItem key={index.toString()} genreItem= {item} filmInformationData= {state.filmInformationData} dispatch={dispatch}/>
            );
          })
        }
        </div>
        <form className="form-search-items" onSubmit={handleSubmit}>
          <label className="search-label">
          Name search
            <input 
              type= "text" 
              value={state.searchTerm}
              onChange={(event)=> {
                dispatch({
                  type: "SET_SEARCH_TERM",
                  searchTerm: event.target.value
                })
              }}
            />
          </label>
          <input className="form-submit-button" type="submit" />
        </form>
        <button className="clear-search" onClick={() => {
            dispatch({
                type: "SET_DISPLAY_DATA",
                displayData: state.filmInformationData
            })
        }}>
          Clear Search
        </button>
      </div>
      {state.displayData.map((item: Item, index: number) => { 
        return( 
          <IndividualFrame key={index.toString()} item={item} />
        );
      })}
      </div>
    </>
  );
}

export default Movies;
