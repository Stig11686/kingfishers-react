import { useState } from "react"

const AddTeam = ({handleSubmit, formData, setFormData}) => {
  

  console.log(formData);


  //The clever way :-)
  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value });
  // }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <label htmlFor="team_name">Team Name</label>
      <input type="text" name="team_name" id="team_name" value={formData.team_name} onChange={(e) => setFormData({...formData, team_name: e.target.value })} />
      <label htmlFor="nickname">Nickname</label>
      <input type="text" name="nickname" id="nickname" value={formData.nickname} onChange={(e) => setFormData({...formData, nickname: e.target.value })} />
      <label htmlFor="manager">Manager</label>
      <input type="text" name="manager" id="manager" value={formData.manager} onChange={(e) => setFormData({...formData, manager: e.target.value })} />
      <label htmlFor="stadium">Stadium</label>
      <input type="text" name="stadium" id="stadium" value={formData.stadium} onChange={(e) => setFormData({...formData, stadium: e.target.value })} />
      <label htmlFor="capacity">Capacity</label>
      <input type="text" name="capacity" id="capacity" value={formData.capacity} onChange={(e) => setFormData({...formData, capacity: e.target.value })} />
      <button type="submit">Add Team</button>
    </form>
  )
};

export default AddTeam;
