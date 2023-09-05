import Image from 'next/image' 

export default function Cast() {
    return (
        <section id="cast" className="cast">
            <h3>Cast</h3>
            <div className="actor-container">
                <div className="actor-description"></div>
                <div className="actor-image-container">
                    <Image src="../public/images/cast/Aleksandr_Kaydanovskiy.jpg" alt='Aleksandr Kaydanovskiy' />
                </div>
            </div>
            <div className="actor-container">      
                <div className="actor-image-container">
                    <Image src="../public/images/cast/Anatoly_Solonitsyn.jpg" alt='Anatoly_Solonitsyn' />
                </div>
                <div className="actor-description"></div>
            </div>
            <div className="actor-container">
                <div className="actor-description"></div>
                <div className="actor-image-container">
                    <Image src="../public/images/cast/Nikolai_Grinko.jpg.jpg" alt='Nikolai Grinko' />
                </div>
            </div>
        </section>
    )
}