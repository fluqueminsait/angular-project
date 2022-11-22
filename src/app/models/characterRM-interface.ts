export interface characterRM {
    id?: number;
    name?: string;
    image?: string;
    species?: string;
    status?: string;
    url?: string;
    location?: any;
}

export interface myListOfCharacters {
    id?: number;
    characterNameForm?: string;
    characterImageForm?: string;
}

export interface ApiBook {
    id: string,
    createdAt: string,
    title: string;
    image: string;
    isbn: string;
    published: string;
    language: string;
    edition: string;
    author: string;
  }

  export interface ApiAuthor {
    id: string;
    createdAt: string;
    name: string;
    image: string;
    biography: string;
    numberBooks: number;
    birthDate: string;
    isAlive: boolean;
  }

  export interface Author {
    id: string;
    name: string;
    image: string;
    numberBooks: number;
    birthDate: string;
  }

  export interface Book {
    id: string;
    title: string;
    image: string;
    isbn: string;
    published: string;
    author?: Author;
  }



