import Header from "../components/Header"
import { AddressBook, Alien, BracketsCurly } from 'phosphor-react'
import home from '../assets/home.svg'
import styles from '../styles/pages/home.module.css'

const Home = () => {
    return (
     <>
        <Header title="Site de Eli💕" image={home}/>
        <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Vou te contar um pouquinho sobre mim, minha formação, minhas inspirações, gostos e curiosidades. </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Mostro meu portfólio. Os projetos que tenho aprendido durante esses meses na reprograma no curso de FrontEnd. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Aguardo seu contacto. Seja para entrevistas de emprego, trocarmos ideias sobre os estudos ou aquele cafezinho.. </p>
        </div>
      </div>
      
    </>
  )
    }
export default Home