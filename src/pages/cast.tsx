import Image from 'next/image' 
import { Russo_One } from 'next/font/google'

const russo = Russo_One({ weight: "400", subsets: ['latin'] })

export default function Cast() {
    return (
        <section id="cast" className={`${russo.className} cast`}>
            <div className="cast-container">
                <h3>Cast</h3>
                <div className="cast-list">
                    <div className="actor-container">
                        <div className="actor-description actor-effect">
                            <h5>Aleksandr Kaydanovskiy</h5>
                            <p>
                                Aleksandr Kaydanovskiy was a talented Soviet actor best known for his iconic role as The Stalker in Andrei Tarkovsky&#39;s 1979 science fiction film Stalker. 
                                Kaydanovskiy&#39;s portrayal of the enigmatic guide who leads characters through a mysterious and 
                                dangerous zone is widely regarded as a masterful performance that added depth and intrigue to the film&#39;s philosophical themes. 
                                His stoic and contemplative presence contributed significantly to the enduring legacy of Stalker as a thought-provoking and visually stunning work of cinema.
                            </p>
                        </div>
                        <div className="actor-image-container actor-effect">
                            <Image  className='portrait' 
                                    src="/images/cast/Aleksandr_Kaydanovskiy.jpg" 
                                    alt='Aleksandr Kaydanovskiy' 
                                    width='150'
                                    height='300' />
                        </div>
                    </div>
                    <div className="actor-container">      
                        <div className="actor-description actor-effect">
                            <h5>Anatoly Solonitsyn</h5>
                            <p>
                            Anatoly Solonitsyn, another accomplished Soviet actor, played the role of The Writer in Andrei Tarkovsky&#39;s Stalker. Solonitsyn&#39;s character, 
                            like Aleksandr Kaydanovskiy&#39;s Stalker, embarked on a profound journey into the Zone, symbolizing the human quest for inspiration and meaning. 
                            His performance, marked by introspection and vulnerability, added a crucial layer to the film&#39;s exploration of the 
                            human psyche and existential questions, making Stalker a cinematic masterpiece deeply enriched by its talented cast.
                            </p>
                        </div>
                        <div className="actor-image-container actor-effect">
                            <Image  className='portrait' 
                                    src="/images/cast/Anatoly_Solonitsyn.jpg" 
                                    alt='Anatoly Solonitsyn'
                                    width='150'
                                    height='300' />
                        </div>
                        <div className="actor-description"></div>
                    </div>
                    <div className="actor-container">
                        <div className="actor-description actor-effect">
                            <h5>Nikolai Grinko</h5>
                            <p>
                            Nikolai Grinko portrayed The Professor in Andrei Tarkovsky&#39;s Stalker, forming a compelling trio of characters alongside 
                            Anatoly Solonitsyn&#39;s Writer and Aleksandr Kaydanovskiy&#39;s Stalker. Grinko&#39;s character, The Professor, brought an intellectual 
                            and philosophical dimension to the film, contributing to the rich tapestry of ideas and perspectives explored within the enigmatic Zone, 
                            making his performance a vital part of the movie&#39;s profound narrative.
                            </p>
                        </div>
                        <div className="actor-image-container actor-effect">
                            <Image  className='portrait' 
                                    src="/images/cast/Nikolai_Grinko.jpg" 
                                    alt='Nikolai Grinko'
                                    width='150'
                                    height='300' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}