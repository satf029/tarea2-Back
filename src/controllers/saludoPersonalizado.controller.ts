import { Request, Response } from "express";

export const saludoPersonalizado= (req: Request, res: Response) => {
    const {nombre} = req.params;
    const fechaActual= new Date();
    const hora = fechaActual.getHours();
    let mensaje;
    if ( hora < 12 && hora > 0 ){
        mensaje = `Buenos días, ${nombre}. Bienvenido a nuestra API!`
    }else if ( hora > 11 && hora < 20){
        mensaje = `Buenas tardes, ${nombre}. Bienvenido a nuestra API!`
    }else{
        mensaje =  `Buenas noches, ${nombre}. Bienvenido a nuestra API!`
    }
    res.json({mensaje});
};