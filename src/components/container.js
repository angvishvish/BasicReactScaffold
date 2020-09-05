import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from '../styles.module.sass';

const Container = () => {
  const [isDevelopment, setMode] = useState(false);

  useEffect(() => {
    setMode(!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  }, []);

  return (
    <h1>This app is running in 
      <span className={`${!isDevelopment? styles.green: styles.blue}`}>
        {isDevelopment ? ' Development' : ' Production'}
      </span> mode
    </h1>
  );
}

export default Container;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;