import express from "express"

const app = express();

app.use(express.json());

import PatientRouter from "../src/routes/PatientRoutes"

app.use('/patient', PatientRouter)
app.use('/patient/allPatient', PatientRouter)

app.listen(8080, () =>{
    console.log("Server is running!")
})