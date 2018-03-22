module.exports = function (database) {
    return {
        getAllAnimals: (req, res) => {
            database.getAllAnimals((err, animals) => {
                res.json({ err: err, animals: animals });
            });
        },
        getAnimalById: (req, res) => {
            let _id = req.params._id;

            database.getAnimalById(_id, (err, animal) => {
                res.json({ err: err, animals: [animal] });
            });
        },
        createAnimal: (req, res) => {
            database.createAnimal(req.body, (err, animal) => {
                res.json({ err: err, animals: [animal] });
            });
        },
        updateAnimal: (req, res) => {
            let _id = req.body._id;

            database.updateAnimal(_id, req.body.props, (err, animal) => {
                res.json({ err: err, animals: [animal] });
            });
        },
        deleteAnimal: (req, res) => {
            let _id = req.params._id;

            database.deleteAnimal(_id, (err, animal) => {
                res.json({ err: err, animals: [animal] });
            });
        }
    }
}