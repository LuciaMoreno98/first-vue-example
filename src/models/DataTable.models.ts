interface CharacterResponse {
  data: {
    info: Info,
    results: Character[]
  }
}

interface Info {
  count: number,
  next: string,
  pages: number,
  prev: string
}

interface Character {
  created: string,
  gender: string,
  id: number,
  image: string,
  name: string,
  status: string,
  episode: string[],
  origin: Origen
}

interface Origen {
  name: string,
  url: string,
}
