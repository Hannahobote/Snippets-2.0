export class AuthController {
  index(req, res, next) {
    return res.status(200).json({message: 'login or signup user.'})
  }

  login(req, res, next) {
    return res.status(200).json({message: 'login or signup user.'})
  }

  signup(req, res, next) {
    return res.status(200).json({message: 'login or signup user.'})
  }

  logout(req, res, next) {
    return res.status(200).json({message: 'login or signup user.'})
  }

}