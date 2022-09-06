import Head from "next/head"
import styles from '../../../styles/home.module.scss'
import LogoImg from '../../../public/logo.svg'
import Image from "next/image"
import Link from "next/link"

export default function SignUp() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Cadastro Agora!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image className={styles.logo} src={LogoImg} alt="" width={800} height={500}/>

      <div className={styles.login}></div>
    </div>
    </>
  )
}