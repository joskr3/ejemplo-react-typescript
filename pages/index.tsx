import type { NextPage } from 'next'
import Contenido from '../components/content/contenido'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem" , width:"50%"}}>
      <Header title='Mi titulo primario' />
      <Contenido />
      <Footer companyName='Toyota' year={2021} />
    </div>
  )
}

export default Home
