import Image from 'next/image' 
import { Russo_One } from 'next/font/google'

const russo = Russo_One({ weight: "400", subsets: ['latin'] })

export default function Influence() {
    return (
        <section id="influence" className={`${russo.className} influence`}>
           <div className="influence-container">
                <div className="events-container">
                    <h3>Events</h3>
                    <p className="text">
                        The film heavily influenced the Cacophony Society, which began in 1986 in the San Francisco Bay Area and which organized Zone Trips for participan
                    </p>
                </div>
                <div className="film-container">
                    <h3>Film</h3>
                    <p className="text">
                        The French filmmaker Chris Marker used Tarkovsky&#39;s concept of The Zone from the film for his film, Sans Soleil (1983).
                        Stalker, the Russian International Human Rights Film Festival, was named after the film at its founding in 1995.
                        The 2012 film Chernobyl Diaries also involves a tour guide, similar to a stalker, giving groups extreme tours of the Chernobyl area.
                    </p>
                </div>
                <div className="literature-container">
                    <h3>Literature</h3>
                    <p className="text">
                        In 2012, the English writer Geoff Dyer published Zona: A Book About a Film About a Journey to a Room drawing together his personal observations as well as critical insights about the film and the experience of watching it.
                    </p>
                </div>
                <div className="music-container">
                    <h3>Music</h3>
                    <p className="text">
                        In the song Dissidents from the 1984 album The Flat Earth by Thomas Dolby, the bridge between two verses includes a narrative from the film.
                    </p>
                </div>
                <div className="games-container">
                    <h3>Games</h3>
                    <p className="text">
                    n 2007, the Ukrainian video-game developer GSC Game World published S.T.A.L.K.E.R.: Shadow of Chernobyl, an open-world, first-person shooter loosely based on both the film, the original novel, and the real life Chernobyl Nuclear Power Plant disaster.
                    </p>
                </div>
           </div>
        </section>
    )
}