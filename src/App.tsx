import "./App.css";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
// import { Button } from "./components/Button";
// import { Container } from "./components/Container";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContextProvider";
// import { User } from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContextProvider";
// import { DomRef } from "./components/ref/DomRef";
// import { Input } from "./components/Input";
// import { Greet } from "./components/Greet";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";

function App() {
  // const personName = {
  //   first: "Sudeep",
  //   last: "Kumar",
  // };

  // const nameList = [
  //   {
  //     first: "Sudeep",
  //     last: "Kumar",
  //   },
  //   {
  //     first: "Sandeep",
  //     last: "Kumar",
  //   },
  // ];
  return (
    <div className="App">
      {/* ------------------------typescripting props  */}
      {/* <Greet name="Sudeep" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>PlaceHolder Text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leanardo Dicpario!</Heading>
      </Oscar> */}
      {/* <Greet name="Sudeep" messageCount={10} isLoggedIn={false} /> */}

      {/* -------------------typescripting events */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("ButtonClick", event, id);
        }}
      /> */}
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* ----------Typescript in react context  */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* ------------Ref in typescript */}
      {/* <DomRef /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* ------------Generics  */}
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Clark",
            last: "Kent",
          },
          {
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
