declare interface API {
  user: UserAPI,
  progress: ProgressAPI,
  search: SearchAPI
}

declare interface UserAPI {
  basicInformation: (username: string) => Promise<User>,
  completeInformation: (token: string) => Promise<User & {
    email: string,
    biographie: string,
    NotificationToken: string
  }>,
  changeAvatar: (url: string, token: string) => Promise<boolean>,
  changeBiography: (biography: string, token: string) => Promise<boolean>,
  changeColor: (color: number, token: string) => Promise<boolean>,
  getFeatured: (username: string) => Promise<FeaturedItem[]>,
}

declare interface ProgressAPI {
  get: (username: string) => Promise<ProgressItem[]>
}

declare type SearchAPI = (query: string, type?: QueryType) => []

declare type QueryType = 'anime' | 'user';

export interface User {
  photoURL: string,
  username: string,
  isPremium: boolean,
  themeColor: number
}

declare interface ProgressItem {
  id: number,
  progression: number,
  ProgressStatus: number,
  image: string,
  title: string,
  NpEpisodes: number,
  status: number,
  type: 'Anime',
  studios: number,
  genre: AnimeGenre[]
}

// pourquoi j'ai passé autant de temps sur ce truc
declare type AnimeGenre = 'Action' | 'Adventure' | 'Comedie' | 'Drama' | 'Ecchi' | 'Fantaisie' | 'Mecha' | 'Mystère' |
  'Psychologique' | 'Romance' | 'Sci-fi' | 'Slice Of Slice' | 'Surnaturel' | string;

declare interface FeaturedItem {
  _id: string,
  id: number,
  title: string,
  titleEN?: string,
  titleJP?: string,
  image: string;
  synopsis: string,
  type: 'Anime',
  status: number,
  NpEpisodes: number,
  videos: Video[],
  bannerURL?: string,
  alt: string[],
  studios: string,
  diffuseur: {
    [key: string]: string
  },
  EpAverage: number,
  adult?: boolean,
  startdate: string
  enddate: string,
  genre: AnimeGenre[],
  idAnilist: number,
  idMAL: number,
  origin: string,
  romanji: string,
  season: string,
  source?: string,
  vf?: boolean,
  social?: {
    [key: string]: string
  }
}

declare interface Video {
  title: string,
  url: string,
  photo: string
}

declare const api: API;
export default api;
