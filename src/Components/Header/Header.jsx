import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <div className="flex gap-4 justify-center mb-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/posts"}>Posts</Link>
        </div>
        <Outlet></Outlet>
      </div>
    </nav>
  );
};

export default Header;
