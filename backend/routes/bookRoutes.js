import express from 'express'
import {createBook,getUserBookDetails} from '../controllers/bookController.js'
import {protect} from '../middleware/authMiddleWare.js'
const router = express.Router()
router.route('/').post(createBook)
router.route('/getBooks').post(getUserBookDetails)

export default router