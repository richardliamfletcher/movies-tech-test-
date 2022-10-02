import { Action, Item } from './Types';

type GenreItem = {
    genreItem: string,
    filmInformationData: any,
    dispatch: React.Dispatch<Action>;
}

function genreItemOnClick(genreItem: string, filmInformationData: any[], dispatch: React.Dispatch<Action>){
    let genreFilteredItems: Item[] = [];
    
    filmInformationData.forEach((dataItem: any) =>{
        let hasGenreItem = false;

        dataItem.genre.forEach((genreArray: any) => {
            if(genreArray === genreItem){
                hasGenreItem = true;
            }
        })
        if(hasGenreItem){
            genreFilteredItems.push(dataItem);
        }
    })

    dispatch({
        type: "SET_DISPLAY_DATA",
        displayData: genreFilteredItems
    });

}

function GenreItem ({genreItem, filmInformationData, dispatch}: GenreItem){
    return(
        <div className="genre-items" onClick={()=>{ genreItemOnClick(genreItem, filmInformationData, dispatch)}}>
            {genreItem}
        </div>
    )
}

export default GenreItem;