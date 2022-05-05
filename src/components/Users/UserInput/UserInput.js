import Button from "../../UI/Button";
import "./UserInput.css";
import { useState, useRef } from "react";
import ErrorModal from "../../UI/Modal";
import Card from "../../UI/Card";
import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

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
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+enteredUserAge.trim() <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter an age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
            ref={nameInputRef}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageInputChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
