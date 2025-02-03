import React from "react";
import { changeDisplayMessage, changeThink } from "../../redux/looks/looks";
import { useDispatch } from "react-redux";

export default function HideMessage({ comp_id }) {
  const dispatch = useDispatch();

  const styles = {
    textAlign: "center",
    cursor: "pointer",
  };

  const handleClick = () => {
    dispatch(changeDisplayMessage(false));
    dispatch(changeThink(false));
  };

  return (
    <div className="message" style={styles} onClick={handleClick}>
      Hide message
    </div>
  );
}
