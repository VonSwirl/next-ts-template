import '../styles/globals.scss'

interface Props {
  Component: any
  pageProps: any
}

function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default App
