import React from 'react';
import video from '../../video/Social Media - 35344.mp4';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homePage} >
    <h1 className={styles.title}>Welcome to contacts book web application</h1>
    <video className={styles.video} autoPlay muted loop>
      <source src={video} type='video/mp4' />
    </video>
  </div>
)

export default Home;