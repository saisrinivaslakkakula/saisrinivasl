import express from 'express'
import {addFeedback,getFeedbackByEmail,getAllFeedbacks} from '../controllers/feedbackContoller.js'
const router = express.Router()
router.route('/').post(addFeedback)
router.route('/getFeedbackByEmail').post(getFeedbackByEmail)
router.route('/getAllFeedbacks').get(getAllFeedbacks)
export default router 