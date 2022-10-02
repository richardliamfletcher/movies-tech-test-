import { Action, Item } from './Types';

type RandomMovieType = {
    filmInformationData: any,
    dispatch: React.Dispatch<Action>;
}

function randomMovieOnClick(filmInformationData: Item[], dispatch: React.Dispatch<Action>){
    const randomIndex = Math.floor(Math.random() * filmInformationData.length);

    console.log(filmInformationData[randomIndex]);

    dispatch({
        type: "SET_DISPLAY_DATA",
        displayData: [filmInformationData[randomIndex]]
    });

}

function RandomMovieGenerator ({filmInformationData, dispatch}: RandomMovieType){
    return(
        <div className="random-movie-picker" onClick={()=>{ randomMovieOnClick(filmInformationData, dispatch)}}>
            Random Movie Picker
        </div>
    )
}

export default RandomMovieGenerator;