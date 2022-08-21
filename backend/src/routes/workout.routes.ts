import { Router } from "express";
import { createOne, deleteAll, deleteById, editOne, getAll, getById } from "../controller/workout.controller";

const router = Router()

// add handlers here
router.get('/', getAll)

router.get('/:id', getById)

router.post('/', createOne)

router.patch('/', editOne)

router.delete('/', deleteAll)

router.delete('/:id', deleteById)



export default router

