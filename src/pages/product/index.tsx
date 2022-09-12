import { useState, ChangeEvent } from 'react'
import Head from "next/head";
import Image from 'next/image';
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './styles.module.scss'
import { Header } from "../../components/ui/Header";
import { GoDiffAdded } from "react-icons/go";

export default function Product() {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);


    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }

        const image = e.target.files[0];

        if (!image) {
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }


    }


    return (
        <>
            <Head>
                <title>Comedoria - Novo Produto</title>
            </Head>
            <div>
                <Header />

                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form className={styles.form}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <GoDiffAdded size={25} color="#FFF" />
                            </span>

                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                            {avatarUrl && (

                                <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt='Foto do Produto'
                                    width={250}
                                    height={250}
                                />
                            )}

                        </label>


                        <select>
                            <option>
                                Bebidas
                            </option>
                            <option>
                                Pizzas
                            </option>
                        </select>
                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Preço do Produto"
                            className={styles.input}
                        />
                        <textarea
                            placeholder="Descreve seu produto.."
                            className={styles.input}
                        />

                        <button className={styles.buttonAdd} type="submit">
                            Cadastrar
                        </button>
                    </form>
                </main>



            </div>

        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})