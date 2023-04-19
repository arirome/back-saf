import { model, Schema } from 'mongoose';

const ProductoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
   
    },
    estado: {
      type: Boolean,
      default: true,
      required: true,
    },
    distribuidor: {
      type: Schema.Types.ObjectId,
      ref: "distribuidorModelo",
      required: true,
    },
   
    unidad: {
      type: String,
      default: "UN",
    },
    precio: {
      type: Number,
      default: 0,
    },

    descripcion: { type: String },
    

   /*  distribuidor: {
      type: Schema.Types.ObjectId,
      ref: "Distribuidors",
      required: true,
    }, */

    img: { type: String },
  },
  { timestamps: true }
);

ProductoSchema.methods.toJSON = function () {
  const { __v, estado, _id, ...data } = this.toObject();
  data.uid = _id;
  return data;
};

export default model("productoModelo", ProductoSchema);