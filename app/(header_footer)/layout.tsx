'use client'

import Header from "../../src/components/header"
import Head from "../head"
import '../../src/styles/globals.css'
import Footer from "../../src/components/footer"
import { QueryClient, QueryClientProvider  } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en" className="">
      <Head />
      <body>
        <QueryClientProvider client={queryClient}>
        <div className="container">
          <Header />
          {children} 
          <Footer />
        </div>
        <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
