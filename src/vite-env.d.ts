/// <reference types="vite/client" />

type WorkShop = {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
    instructor: string;
    info: string;
    numOfEntry: number;
}

type Instructor = {
    id: string;
    name: string;
    imageUrl: string;
    biography: string;
    organization: string;
}