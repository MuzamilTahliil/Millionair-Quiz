import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import './Start.css'; // Make sure to create this file for custom styles

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };

  return (
    <div className="start-container">
      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
        className="form-control"
      />
      <MDBBtn color="primary" className="mt-2 start-button" onClick={handleClick}>
        START GAME
      </MDBBtn>
    </div>
  );
};

export default Start;
