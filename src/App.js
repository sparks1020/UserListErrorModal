import React, { Fragment } from "react";
import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";
import { useState } from "react";
import "./App.css";

function App() {
  const [userGoals, setUserGoals] = useState("");

  const addUserHandler = (enteredText, enteredAge) => {
    setUserGoals((prevGoals) => {
      const updatedUsers = [...prevGoals];
      updatedUsers.unshift({
        text: enteredText,
        id: Math.random().toString(),
        number: enteredAge,
      });
      return updatedUsers;
    });
  };

  const deleteItemHandler = (goalId) => {
    setUserGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (userGoals.length > 0) {
    content = <UserList items={userGoals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <Fragment>
      <section>
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">{content}</section>
    </Fragment>
  );
}

export default App;
