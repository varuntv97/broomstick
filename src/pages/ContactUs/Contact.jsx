import React from "react";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div className="contact_form">
      <h3>Get in touch with us!</h3>
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
        <div className="buttonWrapper">
        <button className={"button_dark button"}>
          Send
        </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
