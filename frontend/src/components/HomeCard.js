import React from "react";
import '../css/components/home_card.scss'
import Back from '../assets/images/back.png'
import Chest from '../assets/images/chest.png'
import Leg from '../assets/images/leg.png'
import Arm from '../assets/images/arm.png'
import Easy from '../assets/images/one.png'
import Medium from '../assets/images/two.png'
import Hard from '../assets/images/three.png'

function HomeCard(props) {


    let hit_type = '';
    let diff = '';

    switch (props.type) {
        case 'Back':
            hit_type = Back;
            break;
        case 'Chest':
            hit_type = Chest;
            break;
        case 'Legs':
            hit_type = Leg;
            break;
        case 'Arms':
            hit_type = Arm;
            break;
        default:
            hit_type = Chest;
    }
    switch (props.difficulty) {
        case 'Easy':
            diff = Easy;
            break;
        case 'Medium':
            diff = Medium;
            break;
        case 'Hard':
            diff = Hard;
            break;
        default:
            diff = Easy;
    }

    return (
        <div className="card-container row d-flex justify-content-center align-items-center">
            <div className="card-img-container">
                <img src={props.image} alt="exercise" className="card-img col-12"/>
            </div>
            <div className="details col-12 d-flex justify-content-start align-items-center g-1">
                <h3 className="card-header col-12">{props.name}</h3>
                {/* <img src={diff} alt={props.type} className="difficulty col-3 mx-2" />
                <img src={hit_type} alt={props.type} className="col-3 type mx-2"/> */}
            </div>
        </div>
    )
}

export default HomeCard;
