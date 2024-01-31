import { useState } from "react";

const AddTeam = ({formValues, setFormValues, handleChange, handleSubmit}) => {
    


  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label htmlFor="name">Team Name: </label>
      <input type="text" id="name" name="team_name" value={formValues.name} onChange={handleChange} />
      <label htmlFor="nickname">Nickname: </label>
      <input type="text" id="nickname" name="nickname" value={formValues.nickname} onChange={handleChange}  />
      <label htmlFor="stadium">Stadium: </label>
      <input type="text" id="stadium" name="stadium" value={formValues.stadium} onChange={handleChange}  />
      <label htmlFor="capacity">Capacity: </label>
      <input type="text" id="capacity" name="capacity" value={formValues.capacity} onChange={handleChange}  />
      <label htmlFor="manager">Manager: </label>
      <input type="text" id="manager" name="manager" value={formValues.manager} onChange={handleChange}  />
      <label htmlFor="crest_url">Crest Url: </label>
      <input type="text" id="crest_url" name="crest_url" value={formValues.crest_url} onChange={handleChange}  />
      <label htmlFor="colours">Colours (Select multiple):</label>
      <div>
        <label>
          <input
            type="checkbox"
            id="colour-red"
            name="colour"
            value="red"
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            id="colour-blue"
            name="colour"
            value="blue"
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            id="colour-white"
            name="colour"
            value="white"
          />
          White
        </label>
        <label>
          <input
            type="checkbox"
            id="colour-black"
            name="colour"
            value="black"
          />
          Black
        </label>
      </div>
      <label htmlFor="crest_url">Crest URL:</label>
      <input
        type="url"
        id="crest_url"
        name="crest_url"
      />
      <button type="submit">Add Team</button>
    </form>
  )
};

export default AddTeam;
