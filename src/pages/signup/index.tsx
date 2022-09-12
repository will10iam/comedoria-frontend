import { useState, FormEvent, useContext } from 'react'
import Head from "next/head"
import styles from '../../../styles/home.module.scss'
import LogoImg from '../../../public/logo.svg'
import Image from "next/image"
import { AuthContext } from '../../contexts/AuthContext'

import Link from "next/link"

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === '' || email === '' || password === '') {
      toast.error("PREENCHA TODOS OS CAMPOS")
      return;
    }

    setLoading(true)

    let data = {
      name,
      email,
      password
    }

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Comedoria - Faça Seu Cadastro Agora!</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={LogoImg} alt="" width={800} height={500} />

        <div className={styles.login}>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder='Digite seu nome'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder='Digite sua email'
              type="email"
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