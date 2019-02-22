module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')

    db.get_houses().then( response => {
      res.status(200).send(response)
    })
  },

  createHouse: ( req, res) => {
    const db = req.app.get('db')

    const { property_name, address, city, state, zip } = req.body

    db.create_house([property_name, address, city, state, zip]).then( response => {
      res.status(200).send('all good')
    })

  }
}