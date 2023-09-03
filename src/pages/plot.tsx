import { Russo_One } from 'next/font/google'

const russo = Russo_One({ weight: "400", subsets: ['latin'] })


export default function Plot() {
    return (
        <section id="plot-section" className={`${russo.className} plot`}>
            <div className="plot-container">
                {Array.from({ length: 300 }, (_, i) =>  <i className="rain" key={i}></i>)}
               <div className="summary-container">
                <h3>Summary</h3>
                    <p>Stalker is a 1979 Soviet science fiction film directed by Andrei Tarkovsky. The story follows a guide, 
                        known as the Stalker, who leads two clients, a Writer and a Professor, through a mysterious and forbidden 
                        area known as the Zone. The Zone is rumored to have the power to fulfill one is innermost desires. 
                        As they navigate the perilous and surreal landscape of the Zone, the characters confront their own hopes, 
                        fears, and existential dilemmas. The film explores themes of human longing, faith, and the ambiguous nature of reality 
                        in a thought-provoking and visually stunning manner.</p>
               </div>
            </div>
        </section>
    )
}