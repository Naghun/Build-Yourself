import '../css/pages/lobby_page.scss';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";

function Lobby() {
    const [csrfToken, setCsrfToken] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/set-csrf-token/', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const token = Cookies.get('csrftoken');
            if (token) {
                setCsrfToken(token);
            } else {
                console.warn('CSRF token is not available in cookies');
            }
        })
        .catch(error => {
            console.error('Error fetching CSRF token:', error);
        });
    }, []);

    useEffect(() => {
        if (csrfToken) {
            getData();
        }
    }, [csrfToken]);

    const getData = () => {
        const query = `
        {
            allPlayers {
                id
                name
                strength
            }
        }
        `;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            credentials: 'include',
            body: JSON.stringify({ query }),
        };

        fetch('http://127.0.0.1:8000/api/graphql/', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    return (
        <div className="container lobby-page-starter">
            <div className="row lobby-row">
                <div className="col-12 lobby-container">
                    <h1 className='lobby-header'>Hello from Lobby</h1>
                </div>
            </div>
        </div>
    )
}

export default Lobby;
