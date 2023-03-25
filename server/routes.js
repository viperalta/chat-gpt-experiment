const PromptController = require("./controllers/prompt.controller")


module.exports = app => {

    app.post("/api/prompt",PromptController.send);
    
}