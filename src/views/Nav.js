import React from "react";
function Nav() {
  return (
    <div className="overflow-hidden bg-cyan-400 flex items-start ">
      <a className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white bg-green-400 " href="#home">
        Home
      </a>
      <a className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" href="#news">News</a>
      <a className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" href="#contact">Contact</a>
      <a className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" href="#about">About</a>
    </div>
  );
}

export default Nav;
