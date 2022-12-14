import express from 'express';
import Cors from 'cors';
import schedule from 'node-schedule'
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
app.use('/api', churchesRouter)
app.use('/api', membersRouter)
app.use('/api', usersRouter)
app.use('/api', emailRouter)

// Swagger Documentation 
var options = {
     explorer: true,
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

schedule.scheduleJob('00 1 00 * * *', async function() {
     // This will run every Day at 12:00;
     app.use('/api', emailRouter)
 });

app.listen(port, () => console.log(`Listening on localhost: ${port}`));