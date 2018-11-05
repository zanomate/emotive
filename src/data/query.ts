export interface QueryPropertyData {
    name: string;
    constants?: string[];
    datatypes?: string[];
}

export class Query {
    static Width: QueryPropertyData = {
        name: 'width',
        constants: ['auto'],
        datatypes: ['Length']
    }
}
