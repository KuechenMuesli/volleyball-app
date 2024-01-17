export interface List  {
  date: Date,
  first_list: {
    time: number,
    players : string[]
  },
  second_list?: {
    time: number,
    players: string[]
  }
}
