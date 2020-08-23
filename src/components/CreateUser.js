import React, { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
    };

    console.log(user);

    setUsername("");
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
