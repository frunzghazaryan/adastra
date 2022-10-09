import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from '$src/modules/home/screens/HomeScreen'
import DetailsScreen from '$src/modules/home/screens/DetailsScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RootStackParamList} from '$src/navigation/types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
