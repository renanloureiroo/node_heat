import { Router } from "express"
import { AuthenticateUserController } from "./controller/AuthenticateUserController"
import { CreateMessageController } from "./controller/CreateMessageController"

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
)

export { router }
