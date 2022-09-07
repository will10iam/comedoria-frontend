
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import LogoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import Link from "next/link"


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
        <Input 
              placeholder='Digite seu email'
              type="text"
            />

            <Input 
              placeholder='Digite sua senha'
              type="password"
            />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
        </form>

        <Link href="/signup">
          <a className={styles.text}>Não possui uma conta? Cadastre-se aqui!</a>
        </Link>

      </div>
    </div>
    </>
  )
}
