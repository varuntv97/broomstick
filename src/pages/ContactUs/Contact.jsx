import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <div className="contact_form">
      <h3>Reserve Yours Today!</h3>
      <div className="contact_form_box">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          style={{ backgroundColor: "#ffff", marginBottom: "1em" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ backgroundColor: "#ffff", marginBottom: "1em" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          style={{ backgroundColor: "#ffff", marginBottom: "1em" }}
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          label="Your Query/Grieveance"
          rows={4}
          style={{ backgroundColor: "#ffff", marginBottom: "1em" }}
        />
        <Button className={"button_dark button"} variant="contained" style={{ width: "200px" }}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default Contact;
