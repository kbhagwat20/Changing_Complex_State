import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  const [fullName, setFullname] = useState({
    fName: "",
    lName: "",
  });

  // function updateFname(event) {
  //   setFName(event.target.value);
  // }

  // function updateLname(event) {
  //   setLName(event.target.value);
  // }

  function updateFullname(event) {
    // const newValue = event.target.value
    // const inputvalue= event.target.name

    const { value, name } = event.target;

    setFullname((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          // onChange={updateFname}
          onChange={updateFullname}
          placeholder="First Name"
          value={fullName.fName} //controlled statement
        />
        <input
          name="lName"
          // onChange={updateLname}
          onChange={updateFullname}
          placeholder="Last Name"
          value={fullName.lName} //controlled statement
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
