import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

import {textFont} from '../lib/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${textFont.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
