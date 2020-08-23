import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
    return () => {
      //
    };
  }, []);

  function exerciseList() {
    return exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  function deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res));
    setExercises(exercises.filter((el) => el._id !== id));
  }

  return (
    <div>
      <h3>Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
}

function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
}

export default ExercisesList;
