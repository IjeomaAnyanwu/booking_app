import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from "../controller/hotel.js";
import Hotel from "../models/hotels.js"
//import { createError } from "../utils/error.js";

const router = express.Router()

router.post('/', createHotel)
router.put('/:id', updatedHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', getHotel)
router.get('/', getAllHotel)



export default router