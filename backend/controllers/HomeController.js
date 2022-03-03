export class HomeController {
  getAll (req, res, next) {
    res.status(200).json({message: 'all snippets'})
  }

  create(req, res, next) {
    res.status(200).json({message: 'snippet created'})
  }

  read(req, res, next) {
    res.status(200).json({message: 'heres your snippet'})
  }

  update(req, res, next) {
    res.status(200).json({message: 'snippet updated'})
  }


}