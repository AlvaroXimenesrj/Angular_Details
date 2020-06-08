// try change to interface
export class Product {
    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public price?: number,
        public Teste?: Teste
        ) { }
}

export class Teste{
    constructor(
        public name?: string
    ) {}
}
// or interface

export interface IProduct{
    id: number;
    name: string;
    category: string;
    price: number;
}