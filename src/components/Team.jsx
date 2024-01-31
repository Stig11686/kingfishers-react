import React from "react"

const Team = ({team}) => {
  return (
    <div>
      <h1 style={{ color: team.colours[0] === 'white' ? team.colours[1] : team.colours[0] }}>{team.team_name} ({team.nickname})</h1>
      <p><span>{team.manager} - </span><span>{team.stadium} - </span><span>{team.capacity}</span></p>
    </div>
  )
};

export default Team;
