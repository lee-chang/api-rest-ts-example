import { Router } from 'express'
import { loginController, registerController } from '../controllers/auth.controller'


const router = Router()

/**
 * * http://localhost:PORT/api/auth/[...]
 */

router.post("/register", registerController)
router.post("/login", loginController)

export { router }