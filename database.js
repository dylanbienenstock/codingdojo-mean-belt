module.exports = function(mongoose) {
    mongoose.connect("mongodb://localhost/MEANBelt");

    const animalSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Pet name is required"],
            trim: true,
            minlength: [3, "Pet name must be at least 3 characters."]
        },
        type: {
            type: String,
            required: [true, "Pet type is required"],
            trim: true,
            minlength: [3, "Pet type must be at least 3 characters."]
        },
        description: {
            type: String,
            required: [true, "Pet description is required"],
            trim: true,
            minlength: [3, "Pet description must be at least 3 characters."]
        },
        skills: [{
            type: String,
            trim: true
        }],
        likes: {
            type: Number,
            default: 0
        }
    });

    mongoose.model("Animal", animalSchema);

    const Animal = mongoose.model("Animal");

    return {
        getAllAnimals: (callback) => {
            Animal.find({}, callback);
        },
        getAnimalById: (_id, callback) => {
            Animal.findOne({ _id: _id }, callback);
        },
        createAnimal: (props, callback) => {
            Animal.find({ name: props.name }, (err, animals) => {
                if (animals.length == 0) {
                    Animal.create(props, callback);
                } else {
                    callback({
                        errors: {
                            name: {
                                message: "Pet name must be unique."
                            }
                        }
                    }, []);
                }
            });
        },
        updateAnimal: (_id, props, callback) => {
            Animal.updateOne({ _id: _id }, props, { runValidators: true }, callback);
        },
        deleteAnimal: (_id, callback) => {
            Animal.deleteOne({ _id: _id }, callback);
        }
    }
}