'use client'

import Head from "../head"
import { QueryClient, QueryClientProvider  } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import '../../src/styles/globals.css'

const queryClient = new QueryClient()

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <QueryClientProvider client={queryClient}>
        <div className="container">
          {children} 
        </div>
        <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
