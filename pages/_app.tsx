import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from '../store';

import { Sora, Inter } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })


function App({ Component, pageProps }: AppProps) {
  return <main className={`${inter.variable} ${sora.variable} `}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
}

export default wrapper.withRedux(App);