import { supabase } from "./bd/supabase.js"
export const tablaUsuarios = ()=>{

    // ejemplos de array con datos
    const datos = [
        {
            id:1,
            nombre: 'aa',
            contraseña: 1234,
            email: 'aa@mail.com'
        },
        {
            id:2,
            nombre: 'bb',
            contraseña: 1234,
            email: 'bb@mail.com'
        },
    ]

    const leerUsuarios = async ()=>{
        
        let { data: users, error } = await supabase
        .from('users')
        .select('*')
        console.log(data, error);

    }

    let tabla = `
    <table id="tabla-usuarios" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
    `
    datos.forEach(elemento => {
        tabla+=`
        <tr>
            <td>${elemento.id}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.email}</td>
        </tr>
        `
    });

    tabla+=`
        </tbody>
    </table>
    `
    return tabla
}