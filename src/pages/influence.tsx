import { Russo_One } from 'next/font/google'

const russo = Russo_One({ weight: "400", subsets: ['latin'] })

export default function Influence() {
    return (
        <section id="influence" className={`${russo.className} influence`}>
           <div className="influence-container">
                <h3>Influence</h3>
                <div className="influence-item-container">
                    <div className="events-container influence-item">
                        <h5>Events</h5>
                        <div className="list-container">
                            <li>The film heavily influenced the Cacophony Society, which began in 1986 in the San Francisco Bay Area and which organized Zone Trips for participan.</li>
                        </div>
                    </div>
                    <div className="film-container influence-item">
                        <h5>Film</h5>
                        <div className="list-container">
                            <li>The French filmmaker Chris Marker used Tarkovsky&#39;s concept of The Zone from the film for his film, Sans Soleil (1983).</li>
                            <li>Stalker, the Russian International Human Rights Film Festival, was named after the film at its founding in 1995.</li>
                            <li>The 2012 film Chernobyl Diaries also involves a tour guide, similar to a stalker, giving groups extreme tours of the Chernobyl area.</li>
                        </div>
                    </div>
                    <div className="literature-container influence-item">
                        <h5>Literature</h5>
                        <div className="list-container">
                            <li>In 2012, the English writer Geoff Dyer published Zona: A Book About a Film About a Journey to a Room drawing together his personal observations as well as critical insights about the film and the experience of watching it.</li>
                        </div>
                    </div>
                    <div className="music-container influence-item">
                        <h5>Music</h5>
                        <div className="list-container">
                            <li>In the song Dissidents from the 1984 album The Flat Earth by Thomas Dolby, the bridge between two verses includes a narrative from the film.</li>
                        </div>
                    </div>
                    <div className="games-container influence-item">
                        <h5>Games</h5>
                        <div className="list-container">
                         <li>In 2007, the Ukrainian video-game developer GSC Game World published S.T.A.L.K.E.R.: Shadow of Chernobyl, an open-world, first-person shooter loosely based on both the film, the original novel, and the real life Chernobyl Nuclear Power Plant disaster.</li>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}