import distribuidorModelo from '../models/distribuidor.modelo.js';


// Devuelve todos los distribuidor activas de la colección
export const getDistribuidores = async (req, res) => {
  try {
      const distribuidores = await distribuidorModelo.find({estado: true}) // consulta para todos los documentos
  
  // Respuesta del servidor
  res.json(distribuidores);
  } catch (error) {
      console.log("Error al traer los distribuidores: ", error)
  }
}


// Controlador que almacena un nuevo distribuidor
export const postDistribuidores = async (req, res) => {
  // Desestructuramos la información recibida del cliente

 const datos = req.body;

 try {
     // Se alamacena el nuevo distribuidor en la base de datos
 const distribuidor = new distribuidorModelo(datos);
 await distribuidor.save() 

 res.json({msg: 'El distribudor se guardo correctamente'});
 } catch (error) {
     console.log("Error al crear un distribuidor: ", error)
 }
}

// Controlador que almacena un nuevo distribuidor
export const updateDistribuidores = async (req, res) => {

    const { id } = req.params;

  // Desestructuramos la información recibida del cliente

 const datos = req.body;

 try {
     // Se alamacena el nuevo distribuidor en la base de datos
 const distribudor = await distribuidorModelo.findByIdAndUpdate(
      id,
      {
        nombre: datos.nombre,
      },
      { new: true }
    );

    res.json({
        msg: "Distribudor actualizado correctamente",
        distribudor,
      });
 } catch (error) {
     console.log("Error al actualizar el distribuidor: ", error)
 }
}

// Cambiar el estado activo de un distribuidor (Eliminación lógica)
export const deleteLogDistribuidor = async (req, res) => {
    const { id } = req.params;
    try {
      const distribudor = await distribuidorModelo.findByIdAndUpdate(
          id,
          { estado: false },
          { new: true }
        );
      
        // Respuesta del servidor
        res.json({
          msg: "Distribuidor eliminado correctamente (lógica)",
          distribudor,
        });
    } catch (error) {
      console.log("Error al eliminar de forma logica un distribuidor: ", error)
    }
  };

// Cambiar el estado activo de un distribuidor (Eliminación lógica)
export const reactivarLogDistribuidor = async (req, res) => {
    const { id } = req.params;
    try {
      const distribudor = await distribuidorModelo.findByIdAndUpdate(
          id,
          { estado: true },
          { new: true }
        );
      
        // Respuesta del servidor
        res.json({
          msg: "Distribuidor reactivado correctamente (lógica)",
          distribudor,
        });
    } catch (error) {
      console.log("Error al reactivar de forma logica un distribuidor: ", error)
    }
  };

// Controlador para eliminar un distribuidor de la BD físicamente
export const deleteDistribuidor = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Ejecución normal del programa
      await distribuidorModelo.findByIdAndDelete(id);
  
      res.json({
        msg: "Distribuidor eliminado (físicamente) correctamente",
      });
    } catch (error) {
      // Si ocurre un error
      console.log("Error al eliminar el distribuidor: ", error);
    }
  };
