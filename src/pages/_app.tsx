import '../styles/globals.css'
import '../styles/landing-page.css'
import { AppProps } from 'next/app';
import Script from "next/script";
import { useEffect } from 'react';
import Home from '.';

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
            <Script src="./scripts/particles.js" strategy="worker" />
        </>
    )
}