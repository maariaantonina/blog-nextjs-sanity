import { Montserrat, Playfair_Display } from "next/font/google";

export const textFont = Montserrat({
  weight: ['200','400'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const titleFont = Playfair_Display({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-playfair'
})