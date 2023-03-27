import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--font-open',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${open.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
