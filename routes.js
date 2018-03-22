module.exports = function (api, express, bodyParser, path, app) {
    const port = process.env.PORT || 8000

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "client/dist")));

    app.get("/animals", api.getAllAnimals);
    app.get("/animals/:_id", api.getAnimalById);
    app.post("/animals", api.createAnimal);
    app.put("/animals", api.updateAnimal);
    app.delete("/animals/:_id", api.deleteAnimal);

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/dist/index.html"));
    });

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}