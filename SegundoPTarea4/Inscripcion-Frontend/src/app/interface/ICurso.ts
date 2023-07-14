export interface ICursos{
    sum:      number;
    cursos: ICurso[];
}
export interface ICurso{
    _id?:     string;
    descripcion:  string;
    fechaInicio: string;
}