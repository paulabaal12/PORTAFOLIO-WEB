import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.heading}>Contáctame</h2>
      <div className={styles.iconContainer}>
        <a
          href="mailto:bar22764@uvg.gt"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img src="/correo.svg" alt="Correo electrónico" className={styles.icon} />
        </a>
        <a
          href="https://github.com/paulabaal12"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img src="/github.svg" alt="GitHub" className={styles.icon} />
        </a>
      </div>
    </section>
  );
}