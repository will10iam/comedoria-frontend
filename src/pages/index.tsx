
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import LogoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import { FormEvent, useContext, useState } from "react";

import Link from "next/link"
import { AuthContext } from "../contexts/AuthContext";


export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert("INFORME EMAIL OU SENHA")
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data);

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Comedoria - Faça Seu Login!</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={LogoImg} alt="Logo Comedoria" width={800} height={500} />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder='Digite seu email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder='Digite sua senha'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
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
