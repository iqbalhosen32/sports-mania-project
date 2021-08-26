import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTeam from '../SingleTeam/SingleTeam';

const TeamDetail = () => {
    const {idTeam} = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetail(data.teams))
    }, [idTeam])
    return (
        <div>
            {
                teamDetail.map(team => <SingleTeam team ={team}></SingleTeam>)
            }
        </div>
    );
};

export default TeamDetail;