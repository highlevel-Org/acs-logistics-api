require('dotenv').config()

const express = require("express");
const server = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const notesRouter = require('./routes/notesRoute');
const {userRouter,shippmentRouter} = require('./api/routes');



require('./api/Database/DB')




server.use(cors())
// server.use(express.static('./index.html'))
// server.use(express.json())
// server.use(morgan)
server.use(morgan('tiny'))
server.use(bodyParser.urlencoded({limit:'50mb', extended: false }))
server.use(express.json({ limit: '50mb' }));
server.disable('etag');

// server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


server.get("/api", (req, res) => {
	res.send("welocme to acs-logistics  api/v1");
 
});



 
server.use("/api/shippment",shippmentRouter)
server.use("/api/auth",userRouter)




server.listen(port, () => {
	console.log(`server runing on port http://localhost:${port}/api`);
});
