import { Action, State } from "./Types";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_DATA' :
            return{
                ...state,
                filmInformationData: action.filmInformationData
            };
        case 'SET_DISPLAY_DATA': 
            return{
                ...state,
                displayData: action.displayData
            }
        case 'SET_GENRES_ARRAY': 
            return{
                ...state,
                allGenresArray: action.allGenresArray
            }
        case "SET_SEARCH_TERM" : 
            return{
                ...state,
                searchTerm: action.searchTerm
            };
    }
}
