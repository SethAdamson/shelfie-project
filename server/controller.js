module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send())
    }
}