module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')

    db.get_houses().then( response => {
      res.status(200).send(response)
    })
  },

  createHouse: ( req, res) => {
    const db = req.app.get('db')

    const { property_name, address, city, state, zip, image, monthly_mortgage } = req.body

    db.create_house([property_name, address, city, state, zip,image, monthly_mortgage]).then( response => {
      res.status(200).send('all good')
    })

  },

  deleteHouse: ( req, res ) => {
    const db = req.app.get('db')
    const { property_id }  = req.params
    console.log(property_id)
    db.delete_house([property_id]).then( response => {
      res.status(200).send(response)
    })
  }
}