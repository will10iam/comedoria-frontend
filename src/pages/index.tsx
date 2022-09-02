import Head from "next/head"
import styles from '../../styles/home.module.scss'
import LogoImg from '../../public/logo.svg'
import Image from "next/image"
import { Input } from '../components/ui/Input'

export default function Home() {
  return (
    <>
  <Head>
    <title>Comedoria - Faça Seu Login!</title>
  </Head>
    
    <div className={styles.containerCenter}>
      <Image src={LogoImg} alt=""/>

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
        </form>
      </div>
    </div>
    </>
  )
}
