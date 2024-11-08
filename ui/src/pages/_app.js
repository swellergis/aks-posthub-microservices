import "../styles/globals.css";
import axiosSrv from "../helpers/axios-client";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const uiURL = process.env.NEXT_PUBLIC_SITE_URL;


const MyApp = ({ Component, pageProps, loggedInUser }) => {
  return (
    <div>
      <p>_app.js</p>
      </div>
  );
};

export default MyApp;
