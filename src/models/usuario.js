import {Schema,model} from 'mongoose'

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    },
    correo:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    },
    contraseña:{
        type:String,
        minLength:2,
        maxLength:20,
        required:true
    }
});

const Usuario = model('usuario',usuarioSchema);
export default Usuario