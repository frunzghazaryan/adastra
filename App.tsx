import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import Navigator from '$src/navigation'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  )
}
