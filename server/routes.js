const PromptController = require("./controllers/prompt.controller")


module.exports = app => {
    //Cancion

    app.post("/api/prompt",PromptController.send);
    /* app.get("/api/canciones",CancionController.findAll);
    app.get("/api/cancion/:id",CancionController.findOne);
    app.put("/api/cancion/:id",CancionController.update);
    app.delete("/api/cancion/:id",CancionController.delete); */
}