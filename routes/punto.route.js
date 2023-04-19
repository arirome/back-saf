import  Router  from "express";


import {
  getPuntos,
  getPunto,
  postNuevoPunto,
  putPuntos,
  deletePuntos
} from "../controllers/punto.controller.js";
import validarJWT from "../middlewares/validar-jwt.js";

const router = Router();

//  Obtener todos los puntos - publico
router.get("/ver-puntos", getPuntos);

// Obtener un punto por id - publico
router.get(
  "/ver-punto/:id",

  getPunto
);

// Crear punto - privado - cualquier persona con un token válido
router.post(
  "/guardar-punto",validarJWT,
  postNuevoPunto
);

router.put("/actualizar-punto/:id", putPuntos)



router.delete("/delete-punto/:id", deletePuntos)

export default router;
