import { NextPage } from "next";
import Footer from "./Footer";

interface Props {}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
