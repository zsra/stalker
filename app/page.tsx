import './styles/home.css'
import { Black_Ops_One } from 'next/font/google'

const boo = Black_Ops_One({ weight: "400", subsets: ['latin'] })

export default function Home() {
  return (
    <main className="landing-page">
      <div className="stalker">
        <div className="top">
          <div className={`${boo.className} main-box`}>
            <h3 className="director">Andrei Tarkovsky&#39;s</h3>
            <h1 className="title">STALKER</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="do">
            <a href="#">
              <span className="visually-hidden">Scroll down</span>
              <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="1"/>
                  <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="2"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </main>
  )
}
