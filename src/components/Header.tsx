
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex text-center justify-center bg-blue-100 text-3xl font-roboto w-full">
      <div className="flex gap-100 text-center justify-center content-center">
      <Link to="/">Главная</Link> 
      <Link to="/about">О нас</Link>
      <Link to="/games">Игры</Link>
      </div>
    </nav>
  );
};