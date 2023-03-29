import { useRouter } from 'next/router'
import React from 'react'

export default function HeaderProduct() {
  const { push } = useRouter()

  return (
    <header className="bg-black text-white flex items-center h-40">
      <div className="flex justify-between w-full max-w-sm mx-auto items-center">
        <button onClick={() => push("/")}>
          <i className="mdi mdi-arrow-left text-yellow-600 text-4xl"/>
        </button>

        <div>
          <h2 className="font-bold text-xl">Prato - Massas</h2>
        </div>

        <div className="w-10"/>
      </div>
    </header>
  )
}
