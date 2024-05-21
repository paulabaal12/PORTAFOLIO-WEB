import styles from '../styles/Languages.module.css';

export default function Languages() {
  return (
    <section id="languages" className={styles.container}>
   <h2 className={`${styles.heading} ${styles.wavy}`}>Lenguajes y Tecnologías</h2>

      <div className={styles.categoryContainer}>
        <div>
          <h3 className={styles.categoryHeading}>Lenguajes de Programación</h3>
          <div className={styles.logoContainer}>
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/javascript.svg" alt="JavaScript" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/python.png" alt="Python" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/java.svg" alt="Java" className={`${styles.logo} ${styles.shadow}`} />
            </a>

            <a href="https://cplusplus.com/doc/tutorial/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/c++.png" alt="C++" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/kotlin.png" alt="kotlin" className={`${styles.logo} ${styles.shadow}`} />
            </a>

          </div>
        </div>

        <div>
          <h3 className={styles.categoryHeading}>Desarrollo Web</h3>
          <div className={styles.logoContainer}>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/react.png" alt="React" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/node.png" alt="Node.js" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/css.png" alt="css" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/html.png" alt="html" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://www.meteor.com/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/meteor.png" alt="meteor" className={`${styles.logo} ${styles.shadow}`} />
            </a>
          </div>
        </div>

        <div>
          <h3 className={styles.categoryHeading}>Bases de Datos</h3>
          <div className={styles.logoContainer}>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/mysql.svg" alt="MySQL" className={`${styles.logo} ${styles.shadow}`} />
            </a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <img src="/postgresql.png" alt="PostgreSQL" className={`${styles.logo} ${styles.shadow}`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}