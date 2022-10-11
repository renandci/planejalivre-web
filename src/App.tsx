import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import logoIcon from "./assets/icon.svg";

export default function App() {
  return (
    <div className="flex flex-1 flex-col md:justify-center md:items-center px-6">
      <div className="py-2 md:w-10/12 md:mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center mb-5 md:mb-0">
          <img src={logoIcon} className="w-[45px] md:w-24" />
          <span className="font-logo text-3xl md:text-5xl ml-3 mr-2 text-red">
            Planej@
          </span>
          <span className="font-logo text-3xl md:text-5xl text-blue">
            Livre
          </span>
        </div>
        <div className="flex gap-1 items-center justify-between mb-5 md:mb-0">
          <div className="flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/contact">Contato</Link>
          </div>
          <div className="flex gap-3">
            <i className="fa-brands fa-2x fa-facebook"></i>
            <i className="fa-brands fa-2x fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 md:mx-auto flex flex-col md:flex-row md:flex-1 justify-between items-center md:h-screen gap-8">
        <Outlet />
      </div>
    </div>
  );
}
