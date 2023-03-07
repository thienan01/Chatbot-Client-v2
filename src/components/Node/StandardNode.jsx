import React from "react";
import "./StandardNode.css";
import Message from "./Message/Message";
import Intent from "./Intent/Intent";
function StandardNode() {
  return (
    <>
      <div className="node-container">
        <Message data={{ message: "" }} />
        <Intent/>
      </div>
    </>
  );
}

export default StandardNode;
