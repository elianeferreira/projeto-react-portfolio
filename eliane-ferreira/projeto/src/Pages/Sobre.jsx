import Header from "../components/Header"
import introducao from '../assets/introducao.jpg'
import styles from '../styles/pages/sobre.module.css'


const Sobre = () => {
    return (
        <>
        <Header 
        title='Venha conhecer a Eli💕!'
        image={introducao}/>
        <div>
        <p className={styles.conteinerText}>Sou brasiliense, moro em São Paulo, tenho 2 filhos. 
        Atuei na aréa contábil por 8 anos, passei pela gastronomia que é uma das minhas paixões.
        Atualmente trabalho na area administrativa e estou buscando aprender esse lado da programação.</p>
        </div>
    
    </>
    )
}
    

    


export default Sobre