import Head from "next/head"
import styles from '../../../styles/home.module.scss'
import LogoImg from '../../../public/logo.svg'
import Image from "next/image"

import Link from "next/link"

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export default function SignUp() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Cadastro Agora!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image className={styles.logo} src={LogoImg} alt="" width={800} height={500}/>

      <div className={styles.login}>
        <form>
          <Input 
            placeholder='Digite seu nome'
            type="text"
          />

          <Input 
            placeholder='Digite sua email'
            type="password"
          />

          <Input 
            placeholder='Digite sua senha'
            type="password"
          />

          <Button
            type="submit"
            loading={false}
          >
            Cadastrar
          </Button>
        </form>

        <Link href="/">
          <a className={styles.text}>Já possui uma conta? Acesse aqui!</a>
        </Link>
      </div>
    </div>
    </>
  )
}