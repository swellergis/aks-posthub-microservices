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

MyApp.getInitialProps = async (myAppContext) => {
  const backendClient = axiosSrv(myAppContext.ctx);
  const { data } = await backendClient.get("/api/users/activeuser");

  const pageProps = myAppContext.Component.getInitialProps
    ? await myAppContext.Component.getInitialProps(
        myAppContext.ctx,
        backendClient,
        data.loggedInUser
      )
    : {};

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
