import 'module-alias/register';
import express,{Application}from "express";
import { Request,Response,NextFunction } from "express";
import { routes } from '@routes/index';
const app:Application = express();


import connectDatbase from '@initials/database';

const PORT:number =3567;

connectDatbase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req:Request, res:Response) => {
    res.send("welcome");
})

// Configure all Routes from Here
routes(app);

// setup express middleware logging and error handling
// app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
//     logger.error(err.stack);
//     next(err);
// });

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send(`Internal Server Error ${err.message}`);
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
