export interface OriginDto {
  name: string;
  url: string;
}

export interface LocationDto {
  name: string;
  url: string;
}

export interface CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginDto;
  location: LocationDto;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface InfoDto {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface CharactersDto {
  info: InfoDto;
  results: CharacterDto[];
}
