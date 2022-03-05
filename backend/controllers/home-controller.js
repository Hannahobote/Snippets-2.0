import { Snippets } from '../models/snippet-model.js'

export class HomeController {

  /**
   * Get alls Snippets.
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async getAll(req, res, next) {
    // find all snippets in database
    const snippets = await Snippets.find()
    res.status(200).json(snippets)
  }

  /**
   * Create a snippet.
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async create(req, res, next) {
    const { title, description, author } = req.body

    // check if snippet has title or description, else end request.
    if (!title && !description) {
      res.status(400)
      throw new Error('please add tite and decription field.')
    }

    // create snippet in db
    const snippet = await Snippets.create({
      title,
      description,
      author
    })

    res.status(200).json(snippet)
    next()
  }

  /**
   * Get one snippet.
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async read(req, res, next) {
    const snippet = await Snippets.findById(req.params.id)

    // if snippet dont exist then end request
    if (!snippet) {
      res.status(400)
      throw new Error('Snippet not found.')
    }
    res.status(200).json(snippet)
  }

  /**
   * Update snippet.
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async update(req, res, next) {
    const snippet = await Snippets.findById(req.params.id)

    // if snippet dont exist then end request
    if (!snippet) {
      res.status(400)
      throw new Error('Snippet not found.')
    }

    // update in db
    const result = await Snippets.updateOne({ _id: req.params.id }, {
      title: req.body.title,
      description: req.body.description
    })

    res.status(200).json(snippet)
  }

  /**
   * Delete snippet.
   *
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async delete(req, res, next) {
    const snippet = await Snippets.findById(req.params.id)

    // if snippet dont exist then end request
    if (!snippet) {
      res.status(400)
      throw new Error('Snippet not found.')
    }

    // delete form db
    await snippet.remove()

    res.status(200).json({ id: req.params.id })
  }

}