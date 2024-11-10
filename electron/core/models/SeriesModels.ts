export interface SeriesPlaylistProps {
  playlist: SeriesProps[] 
  categories: CategoriesProps[]
}

export interface SeriesProps {
  title: string
  name: string
  num: number
  series_id: number
  rating: string
  plot: string
  last_modified: string
  cast: string
  director: string
  category_id: string
  cover: string
}

export interface EpisodeProps {
  id: string
  title: string
  container_extension: string
  episode_num: string
}

export interface SerieInfoProps {
  info: {
    name: string
    plot: string
    director: string
    cast: string
  }
  episodes: {
    [key: string]: EpisodeProps[]
  }
}

export interface CategoriesProps {
  category_id: string,
  category_name: string
}

export interface UserEpisodeProps {
  episodeId: string
  season: string
  currentTime: number
  duration: number
  watching: boolean
}

export interface UserSeriesDataProps {
  id?: string
  favorite?: boolean
  episodes?: UserEpisodeProps[]
}