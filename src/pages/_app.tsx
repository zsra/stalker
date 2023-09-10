import { AppProps } from 'next/app';
import Home from '.';
import { Metadata } from 'next';
import Plot from './plot';
import Cast from './cast'
import Script from 'next/script'

import '../styles/globals.css'
import '../styles/landing-page.css'
import '../styles/plot.css'
import '../styles/cast.css'
import '../styles/influence.css'

import '../styles/effects/particles.scss'
import '../styles/effects/rain.scss'
import Influence from './influence';

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
            <Influence />
            <Script src='scripts/scroll.js' />
        </>
    )
}