import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import style from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setErro] = useState(null);


  const closeModal = () => {
    setErro(null);
  };

  const addUserHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setErro({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (Number(enteredUserAge) < 0) {
      setErro({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }

    const user = {
      username: enteredName,
      age: enteredUserAge,
    };

    props.userHandle(user);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close={closeModal}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
