import { Link } from "react-router-dom";
import { routes } from "@/utilities/routes";

export const Header = () => {
  return (
    <header className="w-full mx-auto bg-black py-4">
      <nav className="flex justify-between items-center px-6">

        {/* Title on the left */}
        <h1 className="text-white text-xl font-bold">Template</h1>
        
        {/* Right navigation menu */}
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className="flex items-center gap-2 text-white">
                {route.icon}
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};