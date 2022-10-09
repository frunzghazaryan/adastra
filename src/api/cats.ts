import config from '$src/config'

export type CatItem = string

export const getCats = (): Promise<CatItem[]> =>
  fetch(`${config.API_URL}?count=10`)
    .then(res => res.json())
    .then(res => res.data)
