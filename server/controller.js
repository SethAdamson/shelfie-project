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

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;

        dbInstance.delete_product([id])
        .then(dbInstance.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send()));
    },

    editProduct: (req, res) => {
        const { name, price, imgurl } = req.body;
        const {id} = req.params
        const dbInstance = req.app.get('db');
        dbInstance.update_product([id, name, price, imgurl])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
}