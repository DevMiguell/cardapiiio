import { useRouter } from 'next/router'
import React from 'react'

const pages = [
  {
    icon: "mdi mdi-hamburger",
    url: "produtos",
    title: "Produtos",
    component: () => { }
  },
  {
    icon: "mdi mdi-food",
    url: "combos",
    title: "Combos",
    component: () => { }
  },
  {
    icon: "mdi mdi-table",
    url: "categorias",
    title: "Categorias",
    component: () => { }
  },
  // financeiro, 
  // "template", 
  // "config"
]

export default function Admin() {
  const router = useRouter()

  return (
    <main>
      <div className="w-full max-w-xs bg-slate-950 p-4 h-screen flex flex-col gap-4 text-white">
        {pages.map(item => (
          <button 
          onClick={() => router.push(`/admin/${item.url}`)}
          key={item.title} 
          className={`flex gap-4 items-center p-4 rounded-md ${router.query.slug === item.url && "bg-slate-800"}`}>
            <i className={`${item.icon} text-2xl`} />
            {item.title}
          </button>
        ))}
      </div>
      <div>Admin</div>
    </main>
  )
}
