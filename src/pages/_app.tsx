import '../styles/globals.css'
import '../styles/landing-page.css'
import '../styles/particles.scss'
import '../styles/plot.css'
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
                        });`}} />
        </>
    )
}