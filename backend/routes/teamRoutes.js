import express from 'express'
import {getTeam,updateTeam} from '../controllers/teamController.js'
import {protect} from '../middleware/authMiddleWare.js'
const router = express.Router()

router.route('/').get(getTeam)
router.route('/employeeRegistration').get(protect,getTeam).put(protect,updateTeam) 


export default router