import React from "react";
import "../assets/styles/PlayWith.css";
const PlayWith = (props) => {
  function sendInvitation(e) {
    props.socket.emit("invitation", e.target.id);
  }
  return (
    <div className="PlayWith" key={props.id}>
      <p>{props.username}</p>
      <button
        className="PlayWith__Button"
        id={props.id}
        onClick={sendInvitation}
      >
        Play with him!
      </button>
    </div>
  );
};

export default PlayWith;
