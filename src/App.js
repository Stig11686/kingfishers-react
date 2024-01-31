import { useState } from 'react';
import './App.css';
import data from './data/data.json';
import Team from './components/Team';
import AddTeam from './components/AddTeam';

function App() {
  const [teams, setTeams] = useState(data);
  const [formData, setFormData] = useState({
    team_name: "",
    nickname: "",
    manager: "",
    stadium: "",
    capacity: "",
  });

  const handleDelete = (team) => {
    setTeams(teams.filter(t => t.team_name!== team));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeams([...teams, formData]);
  }

  return (
    <>
      {teams.map(team => <Team handleDelete={handleDelete} team={team} key={team.team_name} />)}
      <AddTeam handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </>


  );
}

export default App;
