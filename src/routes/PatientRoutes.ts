import {Router} from "express"
import PatientsController from "../Controller/PatientsController"


const router = Router()

router.post('/', PatientsController.createPatient)
router.get('/', PatientsController.listPacient)

export default router