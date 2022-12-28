import NavBar from "./NavBar";
import Footer from "./Footer";
import { ScriptProps } from "next/script";

const Layout = ({ children }: ScriptProps) => {
  return (
    <div className="layout">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
