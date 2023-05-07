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
    <div className="w-full h-screen p-6 flex items-center justify-between">

      <div className="w-1/2">
        <h1 className={`${bebas.className} text-9xl`}>FaceSegura</h1>
        <p className="text-6xl mb-10">A segurança feito com a identificação de seu rosto</p>
        <div className="flex items-center gap-5">
          <button className="px-20 py-5 text-4xl bg-primary">Entrar</button>
          <button className="px-20 py-5 text-4xl bg-primary">Cadastro</button>
        </div>
      </div>

      <div>
        <Image src={Logo} alt=""/>
      </div>

    </div>
  )
}