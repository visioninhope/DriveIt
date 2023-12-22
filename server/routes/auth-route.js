const express = require('express')
const router = express.Router()
const { signUp, signIn, recoverPassword, recoveryCode, recoveryCodeVerify } = require('../controllers/auth-controller')

router.route("/signup").post(signUp)
router.route("/login").post(signIn)
router.route("/recover-password").patch(recoverPassword)
router.route("/password-recovery-code").post(recoveryCode)
router.route("/recovery-code-verify").post(recoveryCodeVerify)


module.exports = router