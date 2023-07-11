
export interface IAspirantes{
    sum:      number;
    aspirantes: IAspirante[];
}
export interface IAspirante{
    _id?:     string;
    nombre:  String;
    identificacion: number;
}