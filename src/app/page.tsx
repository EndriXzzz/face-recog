import Image from "next/image"

import Logo from "../../public/images/aiface.png"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
})


export default function Home() {
  return (
    <div>

      <div>
        <h1 className={bebas.className}>FaceSegura</h1>
        <p>A segurança feito com a identificação de seu rosto</p>
        <div>
          <button>Entrar</button>
          <button>Cadastro</button>
        </div>
      </div>

      <div></div>

    </div>
  )
}