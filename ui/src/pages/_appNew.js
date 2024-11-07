import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const uiURL = process.env.NEXT_PUBLIC_SITE_URL;


const MyAppNew = ({ Component, pageProps, loggedInUser }) => {
  // console.log(loggedInUser);
  return (
    <div>
      <p>_app.js</p>
    </div>
  );
};

export default MyAppNew;
