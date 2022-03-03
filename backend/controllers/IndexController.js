export class IndexController {
  index (req, res) {
    return res.status(200).json({message: 'welcome to the api'})
  }
}