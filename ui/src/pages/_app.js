import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const uiURL = process.env.NEXT_PUBLIC_SITE_URL;


const MyApp = ({ json }) => {
  console.log(json);
  return (
    <div>
      <p>_app.js</p>
    </div>
  );
};

MyApp.getInitialProps = async (myAppContext) => {
  // const backendClient = axiosSrv(myAppContext.ctx);
  // const { data } = await backendClient.get("/api/users/activeuser");

  const res = await fetch('/api/users/activeuser');
  const json = await res.json();

  return { json: json };
};

export default MyApp;
