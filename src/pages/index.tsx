import { useContext, FormEvent } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import LogoImg from '../../public/logo.svg'

import Link from "next/link"
import { AuthContext } from '../contexts/AuthContext'
import { Input } from "../components/ui/Input"

export default function Home() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Login!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image className={styles.logo} src={LogoImg} alt="Logo Comedoria" width={800} height={500}/>

      <div className={styles.login}>
        <form>
          <Input/>

        </form>

        <Link href="/signup">Não tem uma conta?  Cadastre Aqui!</Link>
      </div>
    </div>
    </>
  )
}
