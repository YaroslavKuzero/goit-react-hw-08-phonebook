
import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Spinner.module.css'
import Loader from 'react-loader-spinner';

class Spinner extends Component {

  render() {
    return (
      <Loader className={styles.spinner} type="Grid" color="#00BFFF" height={70} width={70} />
    );
  }
}

export default Spinner;