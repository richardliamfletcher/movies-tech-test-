import React, { useState } from 'react';
import { IndividualFrameItem, InformationItemType } from './Types'

function InformationItem({name, information}: InformationItemType){
    return(
        <>
            <div className="information-title">
                {name}
            </div>
            <div className="information-item">
                {information}
            </div>
        </>
    )
}

function IndividualFrame({item}: IndividualFrameItem){
    const [toggleInfo, setToggleInfo] = useState(false);

    let genresString = "";
    
    item.genre.forEach((genreItem: string) => {
        genresString = genresString + genreItem + " ";
    })

    return(
        <>
        <div className="individual-frame-item" onClick={()=>{ setToggleInfo(!toggleInfo)}}>
            <div className="frame-title">
                {item.name}
            </div>
            <div>
            { toggleInfo ? 
                <>
                    <InformationItem name={"Description"} information={item.description}/>
                    <InformationItem name={"Duration"} information={(item.duration/60).toString() + " Minutes"}/>
                    <InformationItem name={"Genre"} information={genresString}/>
                    <InformationItem name={"Provider"} information={item.provider}/>
                    <InformationItem name={"Total number of views "} information={item.totalViews.total.toString()}/>
                </>
                :<img className="image" src={item.assetImage} />
            }
            </div>
        </div>
        </>
    )
}

export default IndividualFrame;