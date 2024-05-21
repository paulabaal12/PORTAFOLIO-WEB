import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about">
    <div className={styles.container}>
      <h1 className={styles.heading}>Hola! Soy Paula Barillas 💎</h1>
      <p className={styles.description}>Soy estudiante de 3er Año en Ciencias de la Computación  enfocada y apasionada en la programación tanto Frontend como Backend.</p>
      
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.highlight}`}>
          <div className={styles.iconContainer}>
            <img src="/estudio.png" alt="Estudiante" className={styles.icon} />
          </div>
          <h3 className={styles.title}>Estudio</h3>
          <p className={styles.text}>Actualmente soy estudiante de 5to semestre de Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala.</p>
        </div>

        <div className={`${styles.card} ${styles.highlight}`}>
          <div className={styles.iconContainer}>
            <img src="/programar.png" alt="Programación" className={styles.icon} />
          </div>
          <h3 className={styles.title}>Programación </h3>
          <p className={styles.text}>Para Frontend y Backend creo interfaces agradables para los usuarios con elementos que las hacen estéticas y creo la lógica detrás del funcionamiento de una aplicación o página web.</p>
        </div>

        
        <div className={`${styles.card} ${styles.highlight}`}>
          <div className={styles.iconContainer}>
            <img src="/experencia.png" alt="Experencia" className={styles.icon} />
          </div>
          <h3 className={styles.title}>Experencia </h3>
          <p className={styles.text}>Cuento con experiencia en la creación de aplicaciones, páginas web e interfaces de usuario atractivas e interactivas además me considero responsable en los trabajos en equipo.</p>
        </div>

      </div>
    </div>

    </section>
  )
}