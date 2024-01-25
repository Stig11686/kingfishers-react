import './App.css';
import { useState } from "react";
import teamsData from './data/data';
import AddTeam from './components/AddTeam';


function App() {
  const [teams, setTeams] = useState(teamsData);

  const handleDelete = (e) => {
    console.log(e.target.innerText);
    setTeams(teams.filter(team => team.team_name!== e.target.innerText));
  };

  return (
    <div>
      {teams.map(team => <p onClick={handleDelete} key={team.team_name}>{team.team_name}</p>)}
      <AddTeam />
    </div>
  )
 
}

export default App;
