import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({name, cover, id, light, water}){
    return(
        <div className ="lmj-plant-item">
            <li key = {id}>
                <img src={cover} alt={`${name} cover`} className = "lmj-plant-item-cover"/>
                {name}
            </li>
            <div>
                <CareScale scaleValue={light} careType = {"light"}/>
                <CareScale scaleValue={water} careType = {"water"}/>
            </div>
        </div>
    )
}