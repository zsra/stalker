import '../styles/globals.css'
import '../styles/landing-page.css'
import '../styles/particles.scss'
import '../styles/plot.css'
import '../styles/rain.scss'
import '../styles/cast.css'
import { AppProps } from 'next/app';
import Home from '.';
import { Metadata } from 'next';
import Plot from './plot';
import Cast from './cast'

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
            <Cast />
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
                            let animationRun = false;

                            let summary = document.querySelector('.summary-container');
                            let plot = document.querySelector('.plot');
                            let stalker = document.querySelector('.stalker');
                
                            function scrollToNextViewport() {
                                if (framesToScroll > 0 && scrollDirection === -1) {
                                    const scrollStep = window.innerHeight / framesToScroll;
                                    window.scrollBy(0, scrollStep);
                                    framesToScroll--;
                                    if(animationRun) {
                                        addPlotAnimations();
                                        animationRun = false;
                                    }
                                    requestAnimationFrame(scrollToNextViewport);
                                }
                                else if (framesToScroll <= 30 && scrollDirection === 1) {
                                    const scrollStep = window.innerHeight / (31 - framesToScroll);
                                    window.scrollBy(0, -scrollStep);
                                    framesToScroll++;
                                    if(animationRun) {
                                        updatePlotAnimations();
                                        animationRun = false;
                                    }
                                    requestAnimationFrame(scrollToNextViewport);
                                }
                                else {
                                    isScrolling = false;
                                    removePlotAnimations();
                                }
                            }
                
                            window.addEventListener('scroll', () => {
                                if (!isScrolling) {
                                    isScrolling = true;
                                    animationRun = true;
                                    scrollDirection = window.scrollY > prev ? -1 : 1;
                                    prev =  window.scrollY;
                                    scrollToNextViewport();
                                }
                            });
                            
                            function addPlotAnimations() {
                                summary.style.animation = 'fadeInAnimation ease-in-out 2s';
                                plot.style.animation =  'shrink 5s';
                            }

                            function updatePlotAnimations() {
                                summary.style.animation = 'fadeOutAnimation ease-in-out 2s';
                                plot.style.animation =  'scaleUp 5s';
                            }

                            function removePlotAnimations() {
                                setTimeout(function() {
                                    summary.style.removeProperty('animation');  
                                    plot.style.removeProperty('animation');
                                  }, 5000);
                            }` 
            }} />
        </>
    )
}