import Header from "../components/Header"
import styles from '../styles/pages/portfolio.module.css'
import portfolio from '../assets/portfolio.svg'
import Axios from 'axios'
import { useState, useEffect } from "react"
import {ArrowBendDownRight} from 'phosphor-react'

const Portfolio = () => {
  const [repo, setRepo] = useState([])

    useEffect(()=> {
    const getRepo = async () => {
    try {
          const response = await Axios.get('https://api.github.com/users/elianeferreira/repos')
          setRepo(response.data)
        } 
    catch (error) {
      console.error('ERROR CAPTURADO: '+ error)
      
    }  
    }
    getRepo()
    
    },[])


    return (
    <>
      <Header 
        title="Projetinhos da Eli💕" 
        image={portfolio} 
      />
       <div className={styles.repoContainer}>
        <h2 className={styles.repoTitle}>Meus Repositórios</h2>
        <div className={styles.cardContainer}>
        {repo.map((repos)=>{
          return(
           <div key={repos.id} className={styles.cardRepo}>
            <h3 className={styles.cardTitle}>{repos.name}</h3>
            <p className={styles.cardText}>{repos.description}</p>
            <a className={styles.cardLink} href={repos.html_url} target="_blank">
            <ArrowBendDownRight size={32} />
            </a>

           </div> 
          )
        })}  
        </div>

       </div>
    </>
  )
}

export default Portfolio
