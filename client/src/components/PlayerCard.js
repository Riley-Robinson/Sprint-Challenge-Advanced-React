import React from "react";
import {useLocalStorage} from "./Hooks/useLocalStorage"

const PlayerCard = props => {
    const {name, country} = props;
    return(
        <div>
            <h2>{name}</h2>
            <h3>{country}</h3>
        </div>
    )
}

export default PlayerCard;