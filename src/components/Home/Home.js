import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import '../Images/05bab738156ed284ff462147ee51323d.jpg'
import AllTeam from '../AllTeam/AllTeam';

const Home = (props) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    // console.log(teams)

    
    return (
        <div>
            <div className="cover-container">
                <div className="team-center-text">
                    <p>Team Tracker</p>
                </div>
                <img className="home-cover" src={`https://imagenesgratis.com.ar/wp-content/uploads/2020/03/american-football-stadium-futbol-sport-deporte-field-yard-grass-epic-amazing-wallpaper-copia-scaled.jpg`} alt="" />
            </div>
            <div id="fff">
                {
                    teams.map(team => <AllTeam team={team}></AllTeam>)
                }
            </div>
        </div>
    );
};

export default Home;