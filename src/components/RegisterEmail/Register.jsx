import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Register() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ow62gig",
        "template_nfe8vak",
        form.current,
        "aIr5TJYeFklo-paEK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );

  //   const [email, setEmail] = useState("");

  //   const handleSubmit = (e) => {
  //     var email = document.getElementById("email").value;

  //     var contactParams = {
  //       from_email: email,
  //     };

  //     console.log(contactParams);
  //     emailjs.send("service_ow62gig", "template_nfe8vak");
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         id="email"
  //         type="email"
  //         placeholder="Email"
  //         name="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         required
  //         // className={styles.input}
  //         style={{ border: "1px solid black" }}
  //       />
  //       <button>Submit</button>
  //     </form>
  //   );
}

export default Register;
