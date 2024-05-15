import '../css/pages/lobby_page.scss';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import useCsrfToken from '../components/CsrfToken';
import useGraphqlData from '../components/GraphQLData';
import { all_players_query } from '../components/Queries';

function Lobby() {
    const csrfToken = useCsrfToken();
    const data = useGraphqlData(csrfToken, all_players_query);

    return (
        <div className="container lobby-page-starter">
            <div className="row lobby-row">
                <div className="col-12 lobby-container">
                    <h1 className='lobby-header'>Hello from Lobby</h1>
                    {data && data.data && data.data.allPlayers ? (
                        <div>
                            {data.data.allPlayers.map(player => (
                                <div key={player.id}>
                                    <h3>{player.name}</h3>
                                    <p>Strength: {player.strength}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}  
                </div>
            </div>
        </div>
    )
}

export default Lobby;
