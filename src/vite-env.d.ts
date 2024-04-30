/// <reference types="vite/client" />

type WorkShop = {
    id: string;
    name: string;
    date: string;
    imageUrl: string;
    instructor: string;
    info: string;
    level: string;
    subject: string
    numOfEntry: number;
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