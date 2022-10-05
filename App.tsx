import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
