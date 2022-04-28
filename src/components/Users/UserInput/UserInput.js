import Button from "../../UI/Button";
import "./UserInput.css";
import { useState } from "react";
import ErrorModal from "../../UI/Modal";
import Card from "../../UI/Card";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+enteredAge.trim() <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter an age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameInputChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
