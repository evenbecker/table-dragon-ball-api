export interface Character {
  id: number,
  name: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  description: string,
  image: string,
  affiliation: string,
  deletedAt?: null,  
  transformations: Character[];
}
