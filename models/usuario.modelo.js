import { model, Schema } from 'mongoose';

const UsuarioSchema = new Schema(
  {
    usuario: {
      type: String,
      required: [true, "El usuario es obligatorio"],
    },
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    apellido: {
      type: String,
      required: [true, "El apellido es obligatorio"],
    },
    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    description:{
      type: String,
      default: "Trabajador del SAF",
    },
    /* designado: {
      type: Schema.Types.ObjectId,
      ref: "Punto",
    }, */
    ubicacion: {
      lat: {
        type: Number,
      },
      lon: {
        type: Number,
      },
    },
    img: {
      type: String,
    },
    rol: {
      type: String,
      required: true,
      default: "user",
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

export default model("usuarioModelo", UsuarioSchema);
