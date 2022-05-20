import { Fragment } from "react";
// import { Provider } from 'react-redux';
import { Footer, Header } from "../components";
import { RoutesConfig } from "../config";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="bg-main-color">
        {/* <Provider > */}
        <Header />
        <RoutesConfig />
        <Footer />
        {/* </Provider> */}
      </div>
    </Fragment>
  );
}

export default App;
