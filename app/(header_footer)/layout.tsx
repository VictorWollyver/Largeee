
import Header from "../../src/components/header"
import Head from "../head"
import '../../src/styles/globals.css'
import Footer from "../../src/components/footer"
import { Providers } from "../providers"

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en" >
      <Head />
      <body>
        <Providers>
          <div className="container">
            <Header />
            {children} 
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
