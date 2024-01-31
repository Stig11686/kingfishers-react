import React from "react"

const Team = ({handleDelete, team}) => {

  return (
    <div onClick={() => handleDelete(team.team_name)}>
      <h1 style={{ color: team.colours ? team.colours[0] === 'white' ? team.colours[1] : team.colours[0] : 'red' }}>{team.team_name} ({team.nickname})</h1>
      <p><span>{team.manager} - </span><span>{team.stadium} - </span><span>{team.capacity}</span></p>
    </div>
  )
};

export default Team;
