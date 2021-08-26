import React from 'react';
import './SingleTeam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMars, faFutbol, faFlag } from '@fortawesome/free-solid-svg-icons'
import './Icon/Facebook.png'

const SingleTeam = (props) => {
    const { strTeam, strTeamBadge, intFormedYear, strGender, strSport, strCountry, strStadiumThumb, strDescriptionEN, strStadiumDescription, strTwitter, strYoutube, strFacebook } = props.team;
    return (
        <div id="container">
            <div className="cover-container">
                <div className="team-center-text">
                    <img className="cover-logo" src={strTeamBadge} alt="" />
                </div>
                <img className="home-cover" src={`https://imagenesgratis.com.ar/wp-content/uploads/2020/03/american-football-stadium-futbol-sport-deporte-field-yard-grass-epic-amazing-wallpaper-copia-scaled.jpg`} alt="" />
            </div>
            <div id="single-team-container">
                <div className="team-details">
                    <h3>{strTeam}</h3>
                    <div className="line-height">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Formed Year: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />  Sports Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</p>
                    </div>
                </div>
                <div>
                    <img className="team-img" src={strStadiumThumb} alt="" />
                </div>
            </div>
            <div className="description-section">
                <p>{strDescriptionEN}</p>
                <br />
                <br />
                <p>{strStadiumDescription}</p>
            </div>
            <div id="social-icon">
                <ul>
                    <li><a href={strFacebook}><img src={`https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/Facebook.png`} alt="" /></a></li>
                    <li><a href={strTwitter}><img src={`https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/Twitter.png`} alt="" /></a></li>
                    <li><a href={strYoutube}><img src={`https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/YouTube.png`} alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SingleTeam;