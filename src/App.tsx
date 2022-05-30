import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Sudeep",
    last: "Kumar",
  };

  const nameList = [
    {
      first: "Sudeep",
      last: "Kumar",
    },
    {
      first: "Sandeep",
      last: "Kumar",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="Sudeep" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>PlaceHolder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leanardo Dicpario!</Heading>
      </Oscar> */}
      <Greet name="Sudeep" messageCount={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
