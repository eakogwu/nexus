import React, {Fragment} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar/>
      <div>
        {
          props.children
        }
      </div>
      <Footer/>
    </Fragment>

  );
};

export default Layout;