// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import '../index.css'    // ← imports src/index.css

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
