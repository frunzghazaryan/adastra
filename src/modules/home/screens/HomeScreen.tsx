import * as React from 'react'
import {StyleSheet, FlatList} from 'react-native'
import {useQuery} from '@tanstack/react-query'

import {HomeScreenProps} from '$src/navigation/types'
import {CatItem} from '$src/api/cats'
import {getCats} from '$src/api/cats'
import ListItem from '$src/modules/home/components/ListItem'

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {isLoading, data, refetch} = useQuery(['cats'], getCats)

  const renderItem = ({item}: {item: CatItem}) => {
    const handleItemPress = () => navigation.navigate('Details', {item})

    return <ListItem title={item} onPress={handleItemPress} />
  }

  const keyExtractor = (item: CatItem) => item

  return (
    <FlatList<CatItem>
      data={data}
      refreshing={isLoading}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onRefresh={refetch}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  contentContainerStyle: {
    paddingBottom: 40,
  },
})
