export interface MediaContent {
    id: number;
    title: string;
    description: string;
    actors: Actor[];
    releaseDate: Date;
    rating: number;
    imageUrl: string;
    type: MediaType;
}

interface MediaType {
    id: number;
    key: string;
    name: string;
}

interface Actor {
    name: string;
    surname: string;
}