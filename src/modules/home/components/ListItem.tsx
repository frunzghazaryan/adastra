import * as React from 'react'
import {Text, StyleSheet, Pressable} from 'react-native'

interface ListItemProps {
  title: string
  onPress: () => void
}

const ListItem = ({title, onPress}: ListItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
    </Pressable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    marginBottom: 24,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  text: {
    fontSize: 24,
  },
})
