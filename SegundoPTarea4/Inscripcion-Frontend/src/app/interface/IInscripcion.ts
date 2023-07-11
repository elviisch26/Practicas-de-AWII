import { Number, ObjectId } from "mongoose";

export interface IIncripciones{
    sum:      number;
    inscripcion: IIncripcion[];
}
export interface IIncripcion{
    _id?:     String;
    /*_idcurso?: ObjectId;
    _idaspirante?: ObjectId;*/
    fecha:  Number;
    hora: Number;
    valorCancelado: Number;
}