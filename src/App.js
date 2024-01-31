import { useState } from 'react';
import './App.css';
import data from './data/data.json';
import Team from './components/Team';

function App() {
  const [teams, setTeams
  ] = useState(data);

  return (
    <>
      {teams.map(team => <Team team={team} key={team.team_name} />)}
    </>


  );
}

export default App;
