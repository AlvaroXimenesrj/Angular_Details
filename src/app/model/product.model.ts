export class Product {
    
    constructor(public id?: number,
                public name?: string,
                public category?: string,
                public price?: number) { }
}

// o que vem da API por exemplo, tem que ser refletido aqui,
// se tenho uma Model em c# chamada Product la na API, aqui
// deve ter também, caso contrário ele não conseguirá identificar