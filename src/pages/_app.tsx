import '../styles/globals.css'
import '../styles/landing-page.css'
import '../styles/particles.scss'
import { AppProps } from 'next/app';
import Script from "next/script";
import { useEffect } from 'react';
import Home from '.';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Stalker',
    description: 'Stalker is a 1979 Soviet science fiction art film directed by Andrei Tarkovsky',
}

export default function App(props: AppProps) {
    useEffect(() => {
      }, []);
    const {
        pageProps,
    }: { pageProps: any } = props
    return (
        <>
            <Home />
            <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="worker" />
        </>
    )
}