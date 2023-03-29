/* eslint-disable @next/next/no-img-element */
'use client';
import categories from "@/@json/categories.json"
import comidas from "@/@json/comidas.json"
import Header from "@/layout/Header"
import { useRouter } from "next/router"

export default function Home() {
  const { push } = useRouter()

  return (
    <>
      <Header />
      <div className="-mt-6 mx-auto max-w-sm">
        <input
          type="text"
          className="
          h-14 
          w-full 
          bg-gray-200 
          border 
          rounded-md 
          p-4
        "
          placeholder="Qual comida você procura?"
        />

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <div className="mt-4 flex gap-4 overflow-x-scroll pb-3">
            {categories.map((item, i) => (
              <button
                key={i}
                className="
              flex 
              flex-col 
              bg-gray-200 
              justify-center 
              items-center 
              h-32 
              w-32 
              rounded-lg
              shrink-0
              gap-2
            ">
                <img src={`/assets/icons/${item.icon}`} alt="" />
                <p className="font-bold text-gray-500">{item.name}</p>
              </button>
            ))}
          </div>
        </div>


        <div className="mt-8">
          <h2 className="text-2xl font-bold">Combos</h2>

          <div className="flex flex-col gap-2 mt-4">
            {comidas.map((item, i) => (
              <div 
              onClick={() => push(`/${item.id}`)}
              key={i} 
              className="flex gap-4 overflow-hidden rounded-lg bg-gray-200">
                <img width={120} src={item.src} alt="" />
                <div className="flex flex-col justify-between py-2">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-xs text-gray-700">{item.description}</p>
                  <h2 className="text-red-500 text-2xl font-bold">R$ {item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
