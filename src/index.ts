import swaggerUi from "swagger-ui-express";
import cors from "cors";
import express from "express";
import { ExceptionsHandler } from "./middlewares/exceptions.handler";
import { UnknownRoutesHandler } from "./middlewares/unknownRoutes.handler";
import { config } from "./config";
import morgan from "morgan";
import { RegisterRoutes } from "./routes";

/**
 * Genarated swagger path
 */
const swaggerDocument = require("../swagger.json")

/**
 * Create app.
 */
const app = express();

/**
 * We configure the app to use JSON format to parse request body.
 */
app.use(express.json());

/**
 * We configure the app 
 */
app.use(cors());

/**
 * Configure tiny
 */
app.use(morgan("tiny"));
app.use(express.static("public"));

/**
 * Add swagger
 */
app.get('/swagger/swagger.json', (_req, res) => res.json(swaggerDocument));
app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

/**
 * Add Routes 
 */
RegisterRoutes(app);


/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => res.send('🏠'))


/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler)

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(ExceptionsHandler)

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(config.API_PORT, () => console.log(`Server is running on http://localhost:${config.API_PORT}`))

export default app;