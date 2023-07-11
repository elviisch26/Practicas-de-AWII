import { Number } from "mongoose";

export interface ICursos{
    sum:      number;
    curso: ICurso[];
}
export interface ICurso{
    _id?:     string;
    descripcion:  String;
    fechaInicio: Number;
}