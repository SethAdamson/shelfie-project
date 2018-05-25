module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send())
    },

    postProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, price, imgurl } = req.body;

        dbInstance.create_product([ name, price, imgurl ])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
}