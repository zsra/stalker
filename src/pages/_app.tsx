import { AppProps } from 'next/app';
import Home from '.';
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
import Head from 'next/head';

export default function App(props: AppProps) {
    const {
        pageProps,
    }: { pageProps: any } = props
    return (
        <>
            <Head>
                <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
                key="viewport"
                />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                name="Stalker"
                content="Stalker is a 1979 Soviet science fiction art film directed by Andrei Tarkovsky"
                key="description"
                />
            </Head>
            <Home />
            <Plot />
            <Cast />
            <Influence />
            <Script src='scripts/scroll.js' />
        </>
    )
}