const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/recipe', async (request, response) => {
  try {
    var recipe = new RecipeModel(request.body);
    var result = await recipe.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/recipes', async (request, response) => {
  try {
    var result = await RecipeModel.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/recipe:id', async (request, response) => {
  try {
    var recipe = await RecipeModel.findById(request.params.id).exec();
    response.send(recipe);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put('/recipe:id', async (request, response) => {
  try {
    var recipe = await RecipeModel.findById(request.params.id).exec();
    recipe.set(request.body);
    var result = await recipe.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/recipe:id', async (request, response) => {
  try {
    var result = await RecipeModel.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World!')
  });


mongoose.connect('mongodb://localhost:27017/recipesDB', { useNewUrlParser: true });

const recipeSchema = new mongoose.Schema ({
  name: { 
      type: String,
      required: [true, 'item is required']
    },
  imgUrl: {

  },
  shortDescription: String,
  preparation: String,
  category: [ String ],
  ingredients: [
    {
      amount: String,
      item: String
    }
  ],
  time: String,
  portion: String,
  nutritionalValues: [
    {kcal: String},
    {fat: String},
    {saturates: String},
    {carbs: String},
    {sugars: String},
    {fibre: String},
    {salt: String}
  ]
});

const RecipeModel = Mongoose.model('recipes', recipeSchema);
module.exports = RecipeModel;

//Launch listening server on port 8080
app.listen(8081, '0.0.0.0');
    console.log('App is running on http://8081:0.0.0.0');