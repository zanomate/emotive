export type Param = number | string | Array<number | string>;
export type Value = number | string | Array<number | string | Array<number | string>>;

export type Sheet = { [property: string]: string };

export type Measure = (...nums: number[]) => string;
export type Method = (...params: Param[]) => string;
