/// <reference types="vite/client" />

type WorkShop = {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
    instructor: string;
    info: string;
    level: string;
    numOfEntry: number;
    tags: string[]
}

type Instructor = {
    id: string;
    name: string;
    imageUrl: string;
    biography: string;
    organization: string;
}

type Organization = {
    id: string;
    name: string;
    info: string;
}