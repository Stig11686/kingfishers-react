import './App.css';
import { useState } from "react";
import teamsData from './data/data';
import AddTeam from './components/AddTeam';


function App() {
  const [teams, setTeams] = useState(teamsData);
  const [formValues, setFormValues] = useState({
    team_name: "",
    nickname: "",
    stadium: "",
    capacity: "",
    manager: "",
    crest_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      setTeams([...teams, formValues]);
  }
  const handleChange = (e) => {
    console.log(e.target.name); 
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleDelete = (e) => {
    console.log(e.target.innerText);
    setTeams(teams.filter(team => team.team_name!== e.target.innerText));
  };

  return (
    <div>
      {teams.map(team => <p key={team.team_name} onClick={handleDelete} >{team.team_name} </p>)}
      <AddTeam handleSubmit={handleSubmit} formValues={formValues} setFormValues={setFormValues} handleChange={handleChange} />
    </div>
  )
 
}

export default App;
