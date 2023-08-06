declare interface API {
  user: UserAPI
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
  getFeatured: (username: string) => Promise<[]>,
}

export interface User {
  photoURL: string,
  username: string,
  isPremium: boolean,
  themeColor: number
}

declare const api: API;
export default api;
