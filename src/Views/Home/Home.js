import React, { Component } from 'react';
import video from '../../video/Social Media - 35344.mp4';
import styles from './Home.module.css'


class Home extends Component {
  render() {
    return (
      <div className={styles.homePage} >
        <h1 className={styles.title}>Welcome to contacts book web application</h1>
        <video className={styles.video} autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    )
  }
}

export default Home;