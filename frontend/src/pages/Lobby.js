import '../css/pages/lobby_page.scss';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import useCsrfToken from '../components/CsrfToken';
import useGraphqlData from '../components/GraphQLData';
import FormatedDate from '../components/FormatingDates';
import CountdownTimer from '../components/Countdown';
import { specific_enemy, specific_player, specific_timeline } from '../components/Queries';

function Lobby() {
    const csrfToken = useCsrfToken();
    const player_username = 'Budad'
    const enemy_username = 'Raditz'
    const variables_player = {name: player_username}
    const variables_enemy = {name: enemy_username}
    
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


    // const arival_day_in = data2 && data2.data && data2.data.specificEnemy ? data2.data.specificEnemy.arrival : null;
    // let arival_date = null
    // if (arival_day_in) {
    //     arival_date = new Date(startDate)
    //     arival_date.setDate(arival_date.getDate + arival_day_in)
    // }

    return (
        <div className="container lobby-page-starter">
            <div className="row lobby-row">
                <div className="col-12 lobby-container d-flex flex-column justify-content-center align-items-center">
                    <h1 className='lobby-header'>Lobby</h1>
                    <div className="persons d-flex justify-content-center align-items-center col-12">
                        <div className="person col-4">
                            {data1 && data1.data && data1.data.specificPlayer ? (
                                <div>
                                    <h3>{data1.data.specificPlayer.name}</h3>
                                    <p>Strength: {data1.data.specificPlayer.strength}</p>
                                    <img src={`/images/${data1.data.specificPlayer.picture}`} alt={data1.data.specificPlayer.name} className='player-img'/>
                                </div>
                                ) : (
                                    <p>Error Loading Player</p>
                            )} 
                        </div>
                        <div className="person col-4">
                            {data2 && data2.data && data2.data.specificEnemy ? (
                                <div>
                                    <h3>{data2.data.specificEnemy.name}</h3>
                                    <p>Strength: {data2.data.specificEnemy.strength}</p>
                                    <img src={`/images/${data2.data.specificEnemy.picture}`} alt={data2.data.specificEnemy.name} className='enemy-img'/>
                                    <p>Ariving in: {data2.data.specificEnemy.arrival} days</p>
                                </div>
                                ) : (
                                    <p>Error Loading Enemy</p>
                            )} 
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
                                <CountdownTimer endDate={arrival_date} />
                            </div>
                        ) : (
                            <p>error</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lobby;
