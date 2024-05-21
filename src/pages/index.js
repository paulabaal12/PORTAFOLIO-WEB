import Head from 'next/head'
import Header from '../components/Header'
import Home from '../components/home'
import About from '../components/about'
import Languages from '../components/languages'
import Projects from '../components/projects'
import Contact from '../components/contact'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (


      <main>
        <section id="home" className={`${styles.sectionContainer} ${styles.homeSection}`}>
          <div className={styles.sectionContent}>
            <Home />
          </div>
          <div className={styles.curveBottom} />
        </section>

        <section id="about" className={`${styles.sectionContainer} ${styles.aboutSection}`}>
          <div className={styles.curveTop} />
          <div className={styles.sectionContent}>
            <About />
          </div>
          <div className={styles.curveBottom} />
        </section>

        <section id="languages" className={`${styles.sectionContainer} ${styles.languagesSection}`}>
          <div className={styles.curveTop} />
          <div className={styles.sectionContent}>
            <Languages />
          </div>
          <div className={styles.curveBottom} />
        </section>

        <section id="projects" className={`${styles.sectionContainer} ${styles.projectsSection}`}>
          <div className={styles.curveTop} />
          <div className={styles.sectionContent}>
            <Projects />
          </div>
          <div className={styles.curveBottom} />
        </section>

        <section id="contact" className={`${styles.sectionContainer} ${styles.contactSection}`}>
          <div className={styles.curveTop} />
          <div className={styles.sectionContent}>
            <Contact />
          </div>
        </section>
      </main>
  )
}