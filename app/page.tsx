import './styles/home.css'
import { Black_Ops_One } from 'next/font/google'

const boo = Black_Ops_One({ weight: "400", subsets: ['latin'] })

export default function Home() {
  return (
    <main className="landing-page">
      <div className="stalker">
        <div className={`${boo.className} main-box`}>
          <h3 className="director">Andrei Tarkovsky&#39;s</h3>
          <h1 className="title">STALKER</h1>
        </div>
      </div>
    </main>
  )
}
