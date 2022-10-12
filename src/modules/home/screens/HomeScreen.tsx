import React, {useState} from 'react'
import {StyleSheet, FlatList, TextInput, Text} from 'react-native'
import {useQuery} from '@tanstack/react-query'

import {HomeScreenProps} from '$src/navigation/types'
import {CatItem} from '$src/api/cats'
import {getCats} from '$src/api/cats'
import ListItem from '$src/modules/home/components/ListItem'

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [searchStr, setSearchStr] = useState('')
  const {isLoading, data, refetch} = useQuery(['cats'], getCats)

  const renderItem = ({item}: {item: CatItem}) => {
    const handleItemPress = () => navigation.navigate('Details', {item})

    return <ListItem title={item} onPress={handleItemPress} />
  }

  const keyExtractor = (item: CatItem) => item

  const renderSearchResults = () => {
    if (searchStr.length < 2 || !data) {
      return null
    }
    const _data = data.filter(item =>
      item.toLowerCase().includes(searchStr.toLowerCase()),
    )
    return (
      <FlatList<CatItem>
        data={_data}
        ListEmptyComponent={<Text>No Results...</Text>}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.searchList}
        contentContainerStyle={styles.contentContainerStyle}
      />
    )
  }

  return (
    <>
      <FlatList<CatItem>
        data={data}
        ListHeaderComponent={
          <TextInput
            placeholder="Search..."
            onChangeText={setSearchStr}
            style={styles.input}
          />
        }
        refreshing={isLoading}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onRefresh={refetch}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      />

      {renderSearchResults()}
    </>
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
  searchList: {
    ...StyleSheet.absoluteFillObject,
    top: 90,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
})
