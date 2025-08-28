import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

const App = (props) =>{
  useEffect(()=> {
    props.dispatch(handleInitialData());

  },[]);
  return <div>Starter Code</div>;
};

export default connect()(App);
