export class HomeController {

  getAll(req, res, next) {
    res.status(200).json({ message: 'all snippets' })
  }

  create(req, res, next) {
    res.status(200).json({ message: 'snippet created', snippet: req.body })
  }

  read(req, res, next) {
    res.status(200).json({ message: `read one snippet ${req.params.id} ` })
  }

  update(req, res, next) {
    res.status(200).json({ message: `snippet updated ${req.params.id} ` })
  }

  delete(req, res, next) {
    res.status(200).json({ message: `snippet deleted ${req.params.id} ` })
  }


}