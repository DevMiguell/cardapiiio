/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Header() {
  return (
    <header className="bg-black text-white flex items-center h-40">
      <div className="flex gap-4 w-full max-w-sm mx-auto ">
        <img
          src="/assets/imgs/bucks.png"
          alt="Logo Bucks"
          width={80}
          className="rounded-lg"
        />

        <div>
          <h2 className="font-bold text-3xl">{"Buck's"}</h2>
          <table>
            <tbody className="text-md">
              <tr>
                <td width={120}>Terça-feira </td>
                <td>12:00 ás 22:00</td>
              </tr>
              <tr>
                <td width={120}>Pedido minimo</td>
                <td> R$ 20,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </header>
  )
}
