import '../styles/globals.css'
import '../styles/landing-page.css'
import '../styles/particles.scss'
import '../styles/plot.css'
import '../styles/rain.scss'
import { AppProps } from 'next/app';
import Home from '.';
import { Metadata } from 'next';
import Plot from './plot';

export const metadata: Metadata = {
    title: 'Stalker',
    description: 'Stalker is a 1979 Soviet science fiction art film directed by Andrei Tarkovsky',
}

export default function App(props: AppProps) {
    const {
        pageProps,
    }: { pageProps: any } = props
    return (
        <>
            <Home />
            <Plot />
            <script dangerouslySetInnerHTML={{
                __html: `document.addEventListener('DOMContentLoaded', function () {
                            document.querySelector('.down-arrow-container')?.addEventListener('click', function () {
                                const targetElement = document.getElementById('plot-section');

                                if (targetElement) {
                                    window.scrollTo({
                                        top: targetElement.offsetTop,
                                        behavior: 'smooth'
                                    });
                                }
                            });
                        });`
            }} />
            <script dangerouslySetInnerHTML={{
                __html: `   let isScrolling = false;
                            let framesToScroll = 30;
                            let scrollDirection = 0;
                            let prev = window.scrollY;
                
                            function scrollToNextViewport() {
                                if (framesToScroll > 0 && scrollDirection === -1) {
                                    const scrollStep = window.innerHeight / framesToScroll;
                                    window.scrollBy(0, scrollStep);
                                    framesToScroll--;
                                    requestAnimationFrame(scrollToNextViewport);
                                }
                                else if (framesToScroll <= 30 && scrollDirection === 1) {
                                    const scrollStep = window.innerHeight / (31 - framesToScroll);
                                    window.scrollBy(0, -scrollStep);
                                    framesToScroll++;
                                    requestAnimationFrame(scrollToNextViewport);
                                }
                                else {
                                    isScrolling = false;
                                }
                            }
                
                            window.addEventListener('scroll', () => {
                                if (!isScrolling) {
                                    isScrolling = true;
                                    scrollDirection = window.scrollY > prev ? -1 : 1;
                                    prev =  window.scrollY;
                                    scrollToNextViewport();
                                }
                            });` 
            }} />
        </>
    )
}