
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import LogoImg from '../../public/logo.svg';


export default function Home() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Login!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image src={LogoImg} alt="Logo Comedoria" width={800} height={500}/>

      <div className={styles.login}>
        <form>
          <input type="text"/>
        </form>
      </div>
    </div>
    </>
  )
}
