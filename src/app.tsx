import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import './app.scss'
const queryClient = new QueryClient()

const App = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default App
