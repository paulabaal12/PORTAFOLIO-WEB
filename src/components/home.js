import React, { useState, useEffect } from 'react';
import styles from '../styles/pages.module.css';
import Image from 'next/image';

const Home = () => {
  const [text, setText] = useState('');
  const name = 'Hi, it´s me ! Bienvenid@ a mi portafolio';
  const delay = 200;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(name.slice(0, index));
      if (index === name.length) {
        index = 0;
      } else {
        index++;
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [name, delay]);

  return (
    
    <div className={styles.container}>
     <div className={styles.textContainer}>
        <h1 className={styles.text}>{text}</h1>
        <h2 className={styles.text1}>you make the whole place shimmer ...</h2>
      </div>
      <div className={styles.estrellas}>
          <img
            className={`${styles.starNote} ${styles.starNote1}`}
            src={'/star.svg'}
            alt="note"
          />
             <img
            className={`${styles.starNote} ${styles.starNote2}`}
            src={'/star.svg'}
            alt="note"
          />
         <img
            className={`${styles.starNote} ${styles.starNote3}`}
            src={'/star.svg'}
            alt="note"
          />

         <img
            className={`${styles.starNote} ${styles.starNote4}`}
            src={'/star.svg'}
            alt="note"
          />

        <img
            className={`${styles.starNote} ${styles.starNote5}`}
            src={'/star.svg'}
            alt="note"
          />

        <img
            className={`${styles.starNote} ${styles.starNote6}`}
            src={'/star.svg'}
            alt="note"
          />

        <img
            className={`${styles.starNote} ${styles.starNote7}`}
            src={'/star.svg'}
            alt="note"
          />

        <img
            className={`${styles.starNote} ${styles.starNote8}`}
            src={'/star.svg'}
            alt="note"
          />

        <img
            className={`${styles.starNote} ${styles.starNote9}`}
            src={'/star.svg'}
            alt="note"
          />
          
        </div>
      <div className={styles.logoContainer}>
        <Image
          src={'/yop.svg'}
          alt="Me!"
          width={500}
          height={500}
          className={styles.svg}
        />
    
      </div>
    </div>
  );
};

export default Home;