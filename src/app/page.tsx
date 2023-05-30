import Image from "next/image"

import Link from "next/link"

import Logo from "../../public/images/aiface.png"

import { Bebas_Neue } from 'next/font/google'
import Button from "@/components/Button"

const bebas = Bebas_Neue({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
})


export default function Home() {
  return (
    <div className="w-full h-screen p-40 flex items-center justify-between bg-init-system bg-cover">

      <div className="w-1/2 z-[1]">
        <h1 className={`${bebas.className} text-9xl`}>FaceTyping</h1>
        <p className="text-6xl mb-10">A segurança feita com a identificação do seu rosto</p>
        <div className="flex items-center gap-5">
          <Button>Entrar</Button>
          <Link href="/signup"> <Button>Cadastro</Button> </Link>
        </div>
      </div>

      <div className="w-1/2 z-[1] flex items-center justify-center">
        <Image src={Logo} alt="" className="w-1/2" />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen bg-diagonal-patterns bg-cover z-0" />

    </div>
  )
}