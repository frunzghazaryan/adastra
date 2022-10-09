import type {CatItem} from '$src/api/cats'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: {}
  Details: {item: CatItem}
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>
