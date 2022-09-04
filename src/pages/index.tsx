import Head from "next/head"
import styles from '../../styles/home.module.scss'
import LogoImg from '../../public/logo.svg'
import Image from "next/image"
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Login!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image className={styles.logo} src={LogoImg} alt="" width={800} height={500}/>

      <div className={styles.login}>
        <form>
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

        <a className={styles.text}>Não tem uma conta? Cadastre-se!</a>
      </div>
    </div>
    </>
  )
}
