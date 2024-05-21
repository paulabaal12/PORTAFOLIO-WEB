import React from 'react';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  const handleClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const props = useSpring({
    to: { transform: 'scale(1.2)' },
    from: { transform: 'scale(1)' },
    loop: true,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const svgElement = document.querySelector(`.${styles.svg}`);
    svgElement.style.animation = 'none';
    setTimeout(() => {
      svgElement.style.animation = '';
    }, 100);
  }, []);

  return (
    <header className={`${styles.header} ${styles.headerContainer}`}>
      <div className={styles.logoContainer}>
        <animated.div style={props}>
          <Image
            src={'/Paula.svg'}
            alt="About"
            width={150}
            height={150}
            className={styles.svg}
          />
        </animated.div>
      </div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href="#home" onClick={(event) => handleClick(event, 'home')}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={(event) => handleClick(event, 'about')}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              href="#languages"
              onClick={(event) => handleClick(event, 'languages')}
            >
              Lenguajes
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={(event) => handleClick(event, 'projects')}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={(event) => handleClick(event, 'contact')}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}