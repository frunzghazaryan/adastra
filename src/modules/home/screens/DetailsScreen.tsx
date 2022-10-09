import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {DetailsScreenProps} from '$src/navigation/types'

const DetailsScreen = ({route}: DetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.item}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    fontSize: 30,
  },
})
