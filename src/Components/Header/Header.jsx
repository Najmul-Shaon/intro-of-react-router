import { NavLink, Outlet, useNavigation } from "react-router-dom";
import "./Header.css";
import Footer from "../Footer/Footer";

const Header = () => {
  const navigation = useNavigation();
  return (
    <nav>
      <div>
        <div className="flex gap-4 justify-center mb-8">
          {/* <Link to={"/"}>Home</Link> */}
          {/* <Link to={"/contact"}>Contact Us</Link> */}
          {/* <Link to={"/about"}>About</Link> */}
          {/* <Link to={"/posts"}>Posts</Link> */}
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/contact"}>Contact us</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/posts"}>Posts</NavLink>
        </div>
        {navigation.state === "loading" ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          <Outlet></Outlet>
        )}

        <Footer></Footer>
      </div>
    </nav>
  );
};

export default Header;
