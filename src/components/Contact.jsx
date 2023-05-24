// import Head from 'next/head'
// import Link from 'next/link'

import { AuthLayout } from "./AuthLayout";
import { Button } from "./Button";
import { SelectField, TextField } from "./Fields";
import { Logo } from "./Logo";

export default function Register() {
  return (
    <>
      <header>{/* <title>Sign Up - TaxPal</title> */}</header>
      <AuthLayout>
        <div className="flex flex-col">
          <a href="/" aria-label="Home">
            {/* <Logo className="h-10 w-auto" /> */}
          </a>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Let's get in touch
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              {/* Already registered?{" "} */}
              <a
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                {/* Sign in */}
              </a>{" "}
              Hit me up with an email!
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {/* <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>AltaVista search</option>
            <option>Super Bowl commercial</option>
            <option>Our route 34 city bus ad</option>
            <option>The “Never Use This” podcast</option>
          </SelectField> */}
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}

// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const Navbar = ({ title, items }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a href="/">{title}</a>
//       </div>
//       <div className="navbar-items">
//         {items.map((item, index) => (
//           <a key={index} href={item.href}>
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       href: PropTypes.string,
//     })
//   ).isRequired,
// };

// const Footer = () => (
//   <footer className="footer">
//     <p>&copy; 2023 My Website. All Rights Reserved.</p>
//   </footer>
// );

// const Contact = () => {
//   // const navbarItems = [
//   //   { name: "Home", href: "/" },
//   //   { name: "About", href: "/about" },
//   //   { name: "Contact", href: "/contact" },
//   //   // Add more items as needed
//   // ];
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log("Submit Form", formState);
//     }
//   };
//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log("Handle Form", formState);
//     }
//   };
//   return (
//     <div>
//       {/* <Navbar title="My Website" items={navbarItems} /> */}
//       {/* <section className="contact-info"> */}
//       <h1>Get in touch!</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           {/* <label htmlFor="name">Name:</label> */}
//           <input
//             placeholder="Name"
//             type="text"
//             className="form-input"
//             name="name"
//             defaultValue={name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           {/* <label htmlFor="email">Email:</label> */}
//           <input
//             placeholder="Email"
//             type="email"
//             className="form-input"
//             name="email"
//             defaultValue={email}
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           {/* <label className="message" htmlFor="message">
//             Message:
//           </label> */}
//           <textarea
//             placeholder="Message"
//             name="message"
//             className="form-input-message"
//             rows="5"
//             defaultValue={message}
//             onBlur={handleChange}
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//       <p>Email: contact@mywebsite.com</p>
//       <p>Phone: (123) 456-7890</p>
//       <p>Location: Zapopan, Jalisco, MX</p>
//       {/* </section> */}
//       <Footer />
//     </div>
//   );
// };

// export default Contact;
