import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const uiURL = process.env.NEXT_PUBLIC_SITE_URL;


const MyApp = ({ json }) => {
  console.log(JSON.stringify(json));
  return (
    <div>
      <p>_app.js</p>
    </div>
  );
};

MyApp.getInitialProps = async (myAppContext) => {
  console.log( 'foo' );
  console.log( myAppContext );

  return { json: [] };
};

export default MyApp;
