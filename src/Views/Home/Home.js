import React from 'react';

import video from '../../video/Social Media - 35344.mp4';

import s from './Home.module.css';


const Home = () => (
  <div className={s.homePage} >
    <h1 className={s.title}>Welcome to contacts book web application</h1>
    <video className={s.video} autoPlay muted loop>
      <source src={video} type='video/mp4' />
    </video>
  </div>
)

export default Home;