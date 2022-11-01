import express from 'express';
import Cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type: "json"};

//Routers
import churchesRouter from './src/routes/churchesRoutes.js';
import membersRouter from './src/routes/membersRoutes.js';
import usersRouter from './src/routes/usersRoutes.js';
import emailRouter from './src/routes/emailRoutes.js';

const app = express()
const port = process.env.PORT || 8001

//middlewares
app.use(express.json());
app.use(Cors());

//Endpoints
app.get('/', (req, res) => res.status(200).send('Hello CleverProgrammers!!!!!. CELZ4 API!!!🔥🔥'))
app.use('/api/v1', churchesRouter)
app.use('/api/v1', membersRouter)
app.use('/api/v1', usersRouter)
app.use('/api/v1', emailRouter)

// Swagger Documentation 
var options = {
     explorer: true,
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


app.listen(port, () => console.log(`Listening on localhost: ${port}`));