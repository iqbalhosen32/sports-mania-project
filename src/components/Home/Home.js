import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import '../Images/05bab738156ed284ff462147ee51323d.jpg'
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="cover-container">
                <div className="team-center-text">
                    <p>Team Tracker</p>
                </div>
                <img className="home-cover" src={`https://imagenesgratis.com.ar/wp-content/uploads/2020/03/american-football-stadium-futbol-sport-deporte-field-yard-grass-epic-amazing-wallpaper-copia-scaled.jpg`} alt="" />
            </div>

            <div id="home-container">
                <div id="team-container">
                    {
                        teams.map(team =>
                            <div className="single-team">
                                <img className="teamLogo" src={team.strTeamBadge} alt="" />
                                <h3>{team.strTeam}</h3>
                                <p>Sports Type: {team.strSport}</p>
                                <Button >Explore</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;