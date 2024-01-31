import { useState } from "react"

const AddTeam = () => {
  const [formData, setFormData] = useState({
    team_name: "",
    nickname: "",
    manager: "",
    stadium: "",
    capacity: "",
  });

  console.log(formData);

  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <label htmlFor="team_name">Team Name</label>
      <input type="text" name="team_name" id="team_name" value={formData.team_name} onChange={(e) => setFormData({...formData, team_name: e.target.value })} />
      <label htmlFor="nickname">Nickname</label>
      <input type="text" name="nickname" id="nickname" />
      <label htmlFor="manager">Manager</label>
      <input type="text" name="manager" id="manager" />
      <label htmlFor="stadium">Stadium</label>
      <input type="text" name="stadium" id="stadium" />
      <label htmlFor="capacity">Capacity</label>
      <input type="text" name="capacity" id="capacity" />
      <button type="submit">Add Team</button>
    </form>
  )
};

export default AddTeam;
