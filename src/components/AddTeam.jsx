import React from "react"

const AddTeam = (props) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <label htmlFor="team_name">Team Name</label>
      <input type="text" name="team_name" id="team_name" />
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
