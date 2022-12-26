import NavBar from "./NavBar";
import Footer from "./Footer";
import { ScriptProps } from "next/script";

const Layout = ({ children }: ScriptProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
