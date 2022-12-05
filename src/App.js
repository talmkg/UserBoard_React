import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]); //state    useState is a hook for da state, with parameters to save data in the array.
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    //useEffect() = hook, similar to componentDidMount, runs 1 time on load.
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data); //users = exactly a Data array with users.
      })
      .catch((err) => {
        console.warn(err);
        alert("An error occured, try again later.");
      })
      .finally(() => setLoading(false));
  }, []); //same, saving the data to array. if we delete [] here, an infinite loop will occur.
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="App">
      <Users
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
      />
      {/* items = fetched users from above */}
      {/* <Success /> */}
    </div>
  );
}

export default App;
