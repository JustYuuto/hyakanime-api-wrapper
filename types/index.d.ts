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
}

export interface User {
  photoURL: string,
  username: string,
  isPremium: boolean,
  themeColor: number
}

declare const api: API;
export default api;
