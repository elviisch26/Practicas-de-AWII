export interface IIncripciones{
    sum:      number;
    inscripciones: IIncripcion[];
}
export interface IIncripcion{
    _id?:     string;
    _idcurso?:string;
    _idaspirante?:string;
    fecha:  string;
    hora: string;
    valorCancelado: number;
}