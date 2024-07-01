import "@/styles/globals.scss"
import Layout from "components/Layout"
import { SSRProvider } from "react-bootstrap"

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
