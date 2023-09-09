import Image from 'next/image' 
import { Russo_One } from 'next/font/google'

const russo = Russo_One({ weight: "400", subsets: ['latin'] })

export default function Influence() {
    return (
        <section id="influence" className={`${russo.className} influence`}>
           
        </section>
    )
}