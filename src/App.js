import { useState } from 'react';
import './App.css';
import data from './data/data.json';
import Team from './components/Team';

function App() {
  const [teams, setTeams
  ] = useState(data);

  const handleDelete = (team) => {
    setTeams(teams.filter(t => t.team_name!== team));
  }

  return (
    <>
      {teams.map(team => <Team handleDelete={handleDelete} team={team} key={team.team_name} />)}
    </>


  );
}

export default App;
