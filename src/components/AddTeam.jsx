const AddTeam = () => {
    const handleSubmit = () => {
        console.log("submit");
    }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label htmlFor="name">Team Name: </label>
      <input type="text" id="name" name="name" />
      <label htmlFor="nickname">Nickname: </label>
      <input type="text" id="nickname" name="nickname" />
      <label htmlFor="stadium">Stadium: </label>
      <input type="text" id="stadium" name="stadium" />
      <label htmlFor="capacity">Capacity: </label>
      <input type="text" id="capacity" name="capacity" />
      <label htmlFor="manager">Manager: </label>
      <input type="text" id="manager" name="manager" />
      <label htmlFor="crest_url">Crest Url: </label>
      <input type="text" id="crest_url" name="crest_url" />
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
