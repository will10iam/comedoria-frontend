import { useContext, FormEvent } from 'react'
import Head from "next/head"
import styles from '../../styles/home.module.scss'
import LogoImg from '../../public/logo.svg'
import Image from "next/image"
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import Link from "next/link"
import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    let data = {
      email: "teste@teste.com",
      password: "123123"
    }

    signIn(data)
  }
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Login!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image className={styles.logo} src={LogoImg} alt="" width={800} height={500}/>

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder="Digite seu email"
            type="text"
          />

          <Input
            placeholder="Digite sua senha"
            type="password"
          />

          <Button type="submit" loading={false}>Acessar</Button>

        </form>

        <Link href="/signup"><a className={styles.text}>Não tem uma conta? Cadastre-se!</a></Link>
      </div>
    </div>
    </>
  )
}
