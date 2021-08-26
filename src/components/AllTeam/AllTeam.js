import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './AllTeam.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const AllTeam = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam} = props.team;

    const history = useHistory();
    const showTeamDetail = idTeam => {
        const url = `/team-detail/${idTeam}`
        history.push(url);
        console.log('clicked')
    }
    return (
        <div id="team-container">
            <div className="single-team">
                <img className="teamLogo" src={strTeamBadge} alt="" />
                <h3>{strTeam}</h3>
                <p>Sports Type: {strSport}</p>
                <Button onClick={() => showTeamDetail(idTeam)}>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
            </div>
        </div>
    );
};

export default AllTeam;