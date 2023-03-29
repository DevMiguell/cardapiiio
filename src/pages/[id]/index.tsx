/* eslint-disable @next/next/no-img-element */
import comidas from "@/@json/comidas.json"
import HeaderProduct from "@/layout/HeaderProduct"
import { useRouter } from "next/router"

export default function Id() {
  const { query: { id } }: any = useRouter()
  const product = comidas.filter(item => item.id === +id)[0]

  return (
    <>
      <HeaderProduct />
      <div className="-mt-6 mx-auto max-w-sm">
        <div className="flex flex-col gap-4 overflow-hidden rounded-lg bg-gray-200">
          <div className="h-72 overflow-hidden w-full">
          <img width="100%"  src={product?.src} alt="imagem produto" />
          </div>
          <div className="flex flex-col gap-4 justify-between px-6 pt-2 pb-8">
            <h3 className="text-2xl">{product?.title}</h3>
            <p className="text-gray-700">{product?.description}</p>
            <div>
            <h2 className="text-red-500 text-4xl font-bold">R$ {product?.price}</h2>
          
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
