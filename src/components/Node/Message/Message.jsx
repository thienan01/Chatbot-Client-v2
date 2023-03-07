import { useState } from "react";
import React from "react";
import { TextField, styled } from "@mui/material";

const TextMessage = styled(TextField)({
  "&:hover .MuiInputBase-root": {
    background: "#EBF5FB",
    borderColor: "#5DADE2",
  },
});

function Message({ data }) {
  const [message, setMessage] = useState(data.message);
  const handleInput = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <TextMessage
        className="input-field"
        label="Message"
        placeholder="Enter your message"
        size="small"
        multiline
        value={message}
        onChange={(e) => {
          handleInput(e);
        }}
      />
    </>
  );
}

export default Message;
