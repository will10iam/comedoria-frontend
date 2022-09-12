import { createContext, ReactNode, useState } from 'react'

import { api } from '../services/apiClient'

import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { toast } from 'react-toastify'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@comedoria.token')
        Router.push('/')
    } catch {
        console.log('error ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        try {
            // Rota para fazer login
            const response = await api.post('/login', {
                email, password
            })
            // Verificar se recebeu dados
            console.log(response.data)

            // Desconstruir e pegar só as props que eu quero usar
            const { id, name, token } = response.data;

            // Definir o que o cookie vai guardar
            setCookie(undefined, '@comedoria.token', token, {
                maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
                path: '/' // Quais caminhos terão acesso ao cookie
            });

            // Guardar infos do usuario
            setUser({
                id,
                name,
                email,
            })
            //Passar para as proximas requisições o token 
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success("Logado com sucesso!")

            // Assim que logar, é direcionado a página Dashboard 
            Router.push('/dashboard')


        } catch (err) {
            toast.error("Erro ao acessar")
            console.log("DEU MERDA NO LOGIN", err)
        }
    }

    async function signUp({ name, email, password }: SignUpProps) {
        try {
            const response = await api.post('/users', { name, email, password })

            toast.success("Conta criada. Bem-vindo! ")

            Router.push('/')
        } catch (err) {
            console.log("DEU MERDA NO CADASTRO", err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}