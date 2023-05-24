import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ title, items }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">{title}</a>
      </div>
      <div className="navbar-items">
        {items.map((item, index) => (
          <a key={index} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2023 My Website. All Rights Reserved.</p>
  </footer>
);

const About = () => {
  const navbarItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // Add more items as needed
  ];

  return (
    <div>
      {/* <Navbar title="My Website" items={navbarItems} />
      <section className="about-info">
        <h1>About Me</h1>
        <p>
          My name is John Doe. I am a web developer with over 5 years of
          experience. I specialize in React and Node.js.
        </p>
      </section>
      <Footer /> */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          This is where my name goes!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
