import '../css/pages/lobby_page.scss';
import React, { useEffect, useState, useRef } from "react";
import useCsrfToken from '../components/CsrfToken';
import useGraphqlData from '../components/GraphQLData';
import FormatedDate from '../components/FormatingDates';
import CountdownTimer from '../components/Countdown';
import { specific_enemy, specific_player, specific_timeline } from '../components/Queries';
import PlayerImg from '../assets/images/Naghun.png'
import Running from '../assets/images/running.png'
import Squat from '../assets/images/squat.png'
import Plank from '../assets/images/plank.png'
import PushUp from '../assets/images/push-up.png'
import SitUp from '../assets/images/sit-up.png'
import Coins from '../assets/images/muscle-coin.png'
import Watch from '../assets/images/old-watch.png'

function Lobby() {
    const csrfToken = useCsrfToken();
    const player_username = 'Budad'
    const enemy_username = 'Raditz'
    const variables_player = {name: player_username}
    const variables_enemy = {name: enemy_username}
    const [show, set_show] = useState(false)
    
    const [current_date, set_current_date] = useState(null)
    const data1 = useGraphqlData(csrfToken, specific_player, variables_player)
    const data2 = useGraphqlData(csrfToken, specific_enemy, variables_enemy)
    const data3 = useGraphqlData(csrfToken, specific_timeline, variables_player)

    useEffect(() => {
        const update_current_date = () => {
            if (data3 && data3.data && data3.data.specificTimeline) {
                const currentDay = data3.data.specificTimeline.currentDay;
                set_current_date(currentDay);
            }
        };
        update_current_date();
    }, [data3]);

    const startDate = data3 && data3.data && data3.data.specificTimeline ? data3.data.specificTimeline.startDate : null;
    let formatted_start_date = null;
    let formatted_arrival_date = null
    let arrival_date = null
    if (startDate) {
        formatted_start_date = FormatedDate(startDate)
        const arrival = data2 && data2.data && data2.data.specificEnemy ? data2.data.specificEnemy.arrival : null
        if (arrival) {
            let date_object = new Date (startDate)
            date_object.setDate(date_object.getDate() + arrival)
            arrival_date = date_object
            formatted_arrival_date= FormatedDate(date_object)
        }
    }

    if (!data2 || !data2.data || !data2.data.specificEnemy) {
        return <p>Error Loading Enemy</p>;
    }

    let { name_enemy, strength_enemy, picture, arrival_enemy, arms_enemy, legs_enemy, stomach_enemy, back_enemy } = data2.data.specificEnemy;


    const fighters_info_click = () => {
        set_show(!show)
    }

    return (
        <div className="container lobby-page-starter">
            <div className="row lobby-row">
                <div className="col-12 lobby-container d-flex flex-column justify-content-start align-items-center p-0 m-0">
                    <CountdownTimer endDate={arrival_date} className="deadline-timer col-12" />
                    <div className="arival col-11 d-flex justify-content-center align-items-center">
                        <div className="fighter-names-container col-12">
                            <h1 className='player col-5'>{player_username}</h1>
                            <h1 className='enemy col-5'>{enemy_username}</h1>
                        </div>
                        <div className="col-2 player-img-container">
                            <img src={PlayerImg} alt={data1.data.specificPlayer.name} className='player-img col-10' />
                        </div>
                        <div className="col-8 fighters-container d-flex justify-content-center align-items-center">
                            <div className={show ? 'show fighters-container-left col-4' : 'fighters-container-left col-4'}>
                                {data1 && data1.data && data1.data.specificPlayer ? (
                                    <ul className="fighters-list">
                                            <li className="list-item"><span className='text'>Strength: </span>{data1.data && data1.data.specificPlayer.strength}</li>
                                            <li className="list-item"><span className='text'>Arms: </span>{data1.data && data1.data.specificPlayer.arms}</li>
                                            <li className="list-item"><span className='text'>Legs: </span>{data1.data && data1.data.specificPlayer.legs}</li>
                                            <li className="list-item"><span className='text'>Stomach: </span>{data1.data && data1.data.specificPlayer.stomach}</li>
                                            <li className="list-item"><span className='text'>Back: </span>{data1.data && data1.data.specificPlayer.back}</li>
                                    </ul>
                                    ) : (
                                        <h2>Error Loading Data...</h2>
                                    )
                                }
                            </div>
                            <div className="fighters-container-center col-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="col-12 days-count">
                                    <h3 className='days-count-header'>Day 9</h3>
                                </div>
                                <div className="col-12 vs">
                                    <h1 className='vs-header'>VS</h1>
                                </div>
                                <div className="col-12 fighters-info">
                                    <button className="btn fighters-info-button" onClick={fighters_info_click}>Fighters Info</button>
                                </div>
                            </div>
                            <div className={show ? 'show fighters-container-right col-4' : 'fighters-container-right col-4'}>
                                {data2 && data2.data && data2.data.specificEnemy ? (
                                    <ul className="fighters-list">
                                            <li className="list-item"><span className='text'>Strength: </span>{data2.data && data2.data.specificEnemy.strength}</li>
                                            <li className="list-item"><span className='text'>Arms: </span>{data2.data && data2.data.specificEnemy.arms}</li>
                                            <li className="list-item"><span className='text'>Legs: </span>{data2.data && data2.data.specificEnemy.legs}</li>
                                            <li className="list-item"><span className='text'>Stomach: </span>{data2.data && data2.data.specificEnemy.stomach}</li>
                                            <li className="list-item"><span className='text'>Back: </span>{data2.data && data2.data.specificEnemy.back}</li>
                                    </ul>
                                    ) : (
                                        <h2>Error Loading Data...</h2>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-2 enemy-img-container">
                            <img src={`http://127.0.0.1:8000/static/images/${picture}`} alt={enemy_username} className='enemy-img col-12'/>
                        </div>
                    </div>
                    <div className="col-12 days-container d-flex justify-content-center align-items-center">
                        <ul className="days-list d-flex justify-content-center align-items-center col-12 p-0 m-0">
                            <li className="days-item completed">1</li>
                            <li className="days-item completed">2</li>
                            <li className="days-item completed">3</li>
                            <li className="days-item missed">4</li>
                            <li className="days-item completed">5</li>
                            <li className="days-item missed">6</li>
                            <li className="days-item completed">7</li>
                            <li className="days-item completed">8</li>
                            <li className="days-item current">9</li>
                            <li className="days-item">10</li>
                            <li className="days-item">11</li>
                            <li className="days-item">12</li>
                            <li className="days-item">13</li>
                            <li className="days-item">14</li>
                            <li className="days-item">15</li>
                            <li className="days-item">16</li>
                            <li className="days-item">17</li>
                            <li className="days-item">18</li>
                            <li className="days-item">19</li>
                            <li className="days-item">20</li>
                        </ul>
                    </div>




                    <section className='exercise-shop col-12'>
                        <div className="exercise-container col-9">
                            <h1 className='exercise-header'>Daily Challenge</h1>
                            <div className="cards col-9">
                                <div className="card col-2">
                                    <h2>Running</h2>
                                    <div className="img-box">
                                        <img src={Running} alt="" className='card-img'/>
                                    </div>
                                    <button className='btn btn-warning card-details'>Details</button>
                                </div>
                                <div className="card col-2">
                                    <h2>Squats</h2>
                                    <div className="img-box">
                                        <img src={Squat} alt="" className='card-img'/>
                                    </div>
                                    <button className='btn btn-warning card-details'>Details</button>
                                </div>
                                <div className="card col-2">
                                    <h2>Plank</h2>
                                    <div className="img-box">
                                        <img src={Plank} alt="" className='card-img'/>
                                    </div>
                                    <button className='btn btn-warning card-details'>Details</button>
                                </div>
                                <div className="card col-2">
                                    <h2>Push Ups</h2>
                                    <div className="img-box">
                                        <img src={PushUp} alt="" className='card-img'/>
                                    </div>
                                    <button className='btn btn-warning card-details'>Details</button>
                                </div>
                                <div className="card col-2">
                                    <h2>Sit Ups</h2>
                                    <div className="img-box">
                                        <img src={SitUp} alt="" className='card-img'/>
                                    </div>
                                    <button className='btn btn-warning card-details'>Details</button>
                                </div>
                            </div>
                            <button className='btn btn-success button-exercise col-9'>Go To Exercises</button>
                        </div>
                        <div className="inventory-container col-3">
                            <div className="inventory-header-container col-12">
                                <h1 className='inventory-header col-7'>Inventory</h1>
                                <div className="coins col-4">
                                    <span className='num-of-coins'>22</span><img src={Coins} alt="coin" className='coin-img'/>
                                </div>
                            </div>
                            <div className="inventory col-11">
                                <div className="inventory-row">
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                </div>
                                <div className="inventory-row">
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                    <div className="inventory-item">
                                        <img src={Watch} alt="watch item" className='item-img'/>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-success button-inventory col-11'>To Shop</button>
                        </div>
                    </section>
                    {/* <div className="persons d-flex justify-content-center align-items-center col-12">
                        <div className="person col-4">
                            {data1 && data1.data && data1.data.specificPlayer ? (
                                <div>
                                    <h3>{data1.data.specificPlayer.name}</h3>
                                    <p>Strength: {data1.data.specificPlayer.strength}</p>
                                </div>
                                ) : (
                                    <p>Error Loading Player</p>
                            )} 
                        </div>
                        <div className="person col-4">
                            <div>
                                <h3>{name}</h3>
                                <p>Strength: {strength}</p>
                                <p>Arriving in: {arrival} days</p>
                            </div> 
                        </div>
                        <div className="person col-4">
                            {data3 && data3.data && data3.data.specificTimeline ? (
                                <div>
                                    <h6>{data3.data.specificTimeline.startDate}</h6>
                                    <h6>{data3.data.specificTimeline.currentDay}</h6>
                                </div>
                                ) : (
                                    <p>Error Loading Timeline</p>
                            )} 
                        </div>
                    </div>
                    <div className="countdown">
                        {data3 ? (
                            <div className="starting-date">
                                <p>{formatted_start_date}</p> <br />
                                <p>{formatted_arrival_date}</p>
                            </div>
                        ) : (
                            <p>error</p>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Lobby;
