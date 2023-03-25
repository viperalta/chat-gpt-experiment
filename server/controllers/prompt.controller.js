
const axios = require('axios')
const {Configuration,OpenAIApi}=require("openai")

module.exports.send = async(req,res) => {

    const prompt = req.body.prompt
    console.log(prompt)
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    })
    const openai = new OpenAIApi(config)

    try{
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:prompt,
            max_tokens:2048,
            temperature:1
        })
        console.log(response.data.choices[0].text)
        res.json({chatgpt_dice:response.data,texto:response.data.choices[0].text})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors});
    }
 
}