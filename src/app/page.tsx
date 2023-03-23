import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-orange-400">
      <div className="">
        <h1>Hello World</h1>
      </div>
    </main>
  )
}
