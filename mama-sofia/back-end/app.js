const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/recipe', async (request, response) => {
  try {
    var recipe = new Recipe(request.body);
    var result = await recipe.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/recipes', async (request, response) => {
  try {
    var result = await Recipe.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/recipe:id', async (request, response) => {
  try {
    var recipe = await Recipe.findById(request.params.id).exec();
    response.send(recipe);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put('/recipe:id', async (request, response) => {
  try {
    var recipe = await Recipe.findById(request.params.id).exec();
    recipe.set(request.body);
    var result = await recipe.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete('/recipe:id', async (request, response) => {
  try {
    var result = await Recipe.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello Wooorld!')
  });


mongoose.connect('mongodb://localhost:27017/recipesDB', { useNewUrlParser: true });

const recipeSchema = new mongoose.Schema ({
  name: { 
      type: String,
      required: [true, 'item is required']
    },
  imgURL: String,
  shortDescription: {
    type: String,
    required: [true, 'item is required']
  },
  preparation: {
    type: String,
    required: [true, 'item is required']
  },
  category: [ String ],
  ingredients: [
    String
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
    {protein: String},
    {salt: String}
  ]
});
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

const recipe1 = new Recipe ({
  name: "Caponata pasta",
  imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg",
  shortDescription: "Whip up our easy vegetarian caponata pasta in just 20 minutes.",
  preparation: `Heat the oil in a large pan and cook the onion for 8-10 mins until starting to caramelise (or for longer if you have time – the sweeter the better). Add the garlic for the final 2 mins of cooking time.
  Tip in the mixed veg, tomatoes, capers and raisins. Season well and simmer, uncovered, for 10 mins, or until you have a rich sauce.
  Meanwhile, boil the kettle. Pour the kettleful of water into a large pan with a little salt and bring back to the boil. Add the pasta and cook until tender with a little bite, then drain, reserving some of the pasta water. Tip the pasta into the sauce, adding a splash of pasta water if it needs loosening. Scatter with the basil leaves and parmesan, if you like, and serve straight from the pan`,
  category: "dinner",
  ingredients: [
      "4 tbsp olive oil (or use the oil from your chargrilled veg, see below)",
      "1 large onion , finely chopped",
      "4 garlic cloves, finely sliced",
      "250g chargrilled Mediterranean veg (peppers and aubergines, if possible) from a jar, pot or deli counter, drained if in oil (you can use this oil in place of the olive oil) and roughly chopped",
      "400g can chopped tomatoes",
      "1 tbsp small capers",
      "2 tbsp raisins",
      "350g rigatoni, penne or another short pasta shape",
      "bunch basil, leaves picked"
  ],
  time: '20mins',
  portion: 'for 4',
  nutritionalValues: {
      kcal: 542,
      fat: '14g',
      saturates: '2g',
      carbs: '85g',
      sugars: '21g',
      fibre: '9g',
      protein: '14g',
      salt: '0.5g'
  }
});

const recipe2 = new Recipe({
  name: "Coconut & squash dhansak",
  imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/coconut-squash-dhansak.jpg",
  shortDescription: "This easy vegetarian curry is perfect for a healthy dinner",
  preparation: `Heat the oil in a large pan. Put the squash in a bowl with a splash of water. 
Cover with cling film and microwave on High for 10 mins or until tender. 
Meanwhile, add the onions to the hot oil and cook for a few mins until soft. Add the curry paste, tomatoes and coconut milk, and simmer for 10 mins until thickened to a rich sauce.
Warm the naan breads in a low oven or in the toaster. Drain any liquid from the squash, then add to the sauce with the lentils, spinach and some seasoning. 
Simmer for a further 2-3 mins to wilt the spinach, then stir in the coconut yogurt. Serve with the warm naan and a dollop of extra yogurt.`,
  category: "lunch",
  ingredients: [
      "1 tbsp vegetable oil",
      "500g butternut squash (about 1 small squash), peeled and chopped into bite-sized chunks (or buy a pack of ready-prepared to save time), see tip, below left",
      "100g frozen chopped onions",
      "4 heaped tbsp mild curry paste (we used korma)",
      "400g can chopped tomatoes",
      "400g can light coconut milk",
      "Mini naan bread, to serve",
      "400g can lentils, drained",
      "200g bag baby spinach"
  ],
  time: '20mins',
  portion: 'for 4',
  nutritionalValues: {
      kcal: 320,
      fat: '17g',
      saturates: '9g',
      carbs: '29g',
      sugars: '17g',
      fibre: '7g',
      protein: '9g',
      salt: '1g'
  }
});

const recipe3 = new Recipe({
  name: "Indian chickpeas with poached eggs",
  imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/indian-chickpeas-with-poached-eggs.jpg",
  shortDescription: "This quick, fibre-rich veggie supper is filling and good for you too.",
  preparation: `Heat the oil in a non-stick sauté pan, add the garlic, pepper, chilli and the whites from the spring onions, and fry for 5 mins over a medium-high heat. Meanwhile, put a large pan of water on to boil.Add the spices, tomatoes, most of the coriander and the chickpeas to the sauté pan and cook for 1-2 mins more. 
Stir in the bouillon powder and enough liquid from the chickpeas to moisten everything, and leave to simmer gently. 
Once the water is at a rolling boil, crack in your eggs and poach for 2 mins, then remove with a slotted spoon. Stir the spring onion tops into the chickpeas, then very lightly crush a few of the chickpeas with a fork or potato masher. 
Spoon the chickpea mixture onto plates, scatter with the reserved coriander and top with the eggs. Serve with an extra sprinkle of cumin, if you like.`,
  category: "lunch",
  ingredients: [
      "1 tbsp rapeseed oil",
      "2 garlic cloves, chopped",
      "1 yellow pepper, deseeded and diced",
      "½ - 1 red chilli, deseeded and chopped",
      "½ bunch spring onions(about 5), tops and whites sliced but kept separate",
      "1 tsp cumin, plus a little extra to serve (optional)",
      "1 tsp coriander",
      "½ tsp turmeric",
      "3 tomatoes, cut into wedges"
  ],
  time: '10mins',
  portion: 'for 4',
  nutritionalValues: {
      kcal: 471,
      fat: '15g',
      saturates: '8g',
      carbs: '63g',
      sugars: '8g',
      fibre: '8g',
      protein: '18g',
      salt: '2.7g'
  }
});

const recipe4 = new Recipe ({
  name: "Sweetcorn & courgette fritters",
  imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/07/sweetcorn-courgette-fritters.jpg",
  shortDescription: "An easy, vegetarian fritter you can have on the table in 25 minutes.",
  preparation: `Mix the sweetcorn, spring onions, courgette, paprika, flour, beaten egg, milk and some seasoning in a large bowl and set aside. 
Put a large pan of water on to boil. In a bowl, mix the chilli sauce with the lime juice and set aside. 
Heat the oil in a large, non-stick pan and spoon in four burger-sized mounds of the fritter mixture, spaced apart (you may need to do this in two batches). 
When brown on the underside, turn over and cook for 3 mins more until golden.Meanwhile, poach the eggs in the simmering water for 2-3 mins until cooked and the yolks are runny. 
Remove with a slotted spoon. Serve the fritters topped with a poached egg, mixed leaves and a drizzle of the chilli dressing.`,
  category: "dinner",
  ingredients: [
      "198g can sweetcorn, drained",
      "2 spring onions, finely chopped",
      "50g courgette , grated",
      "1 tsp smoked paprika",
      "50g self-raising flour",
      "5 eggs, 1 beaten, 4 for poaching",
      "40ml milk",
      "4 tbsp sweet chilli sauce",
      "juice 1 lime",
      "1 tbsp vegetable oil",
      "mixed leaves, to serve"
  ],
  time: '25mins',
  portion: 'for 2',
  nutritionalValues: {
      kcal: 465,
      fat: '21g',
      saturates: '5g',
      carbs: '44g',
      sugars: '20g',
      fibre: '5g',
      protein: '23g',
      salt: '1.7g'
  }
});

const recipe5 = new Recipe({
  name: "Spiced halloumi & pineapple burger",
  imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/07/halloumi-burger.jpg",
  shortDescription: "Pack four of your 5-a-day into these tasty veggie burgers.",
  preparation: "Heat the barbecue. Put the cabbage, carrot, radish and coriander in a bowl. Pour over the lime juice, add ½ tbsp oil and the chilli flakes, then season with salt and pepper. Give everything a good mix with your hands. This can be done a few hours before and kept in the fridge. Mix the remaining oil with the chipotle paste then coat the halloumi slices in the mixture. Put the halloumi slices on a sheet of foil and put on the barbecue with the pineapple (or use a searing hot griddle pan if cooking inside). Cook for 2 mins on each side until the cheese is golden, and the pineapple is beginning to caramelise. Brush the buns with the remaining chipotle oil, then put your burger buns, if using, cut-side down, on the barbecue for the last 30 seconds of cooking to toast. Assemble your burgers with the lettuce or buns. Start with a handful of the slaw, then add halloumi and pineapple. Serve with the remaining slaw.",
  category: "lunch",
  ingredients: [
      "½ red cabbage, grated",
      "2 carrots, grated",
      "100g radishes, sliced",
      "1 small pack coriander, chopped",
      "2 limes, juiced",
      "1 tbsp cold-pressed rapeseed oil",
      "big pinch of chilli flakes",
      "1 tbsp chipotle paste",
      "60g halloumi, cut into 4 slices",
      "2 small slices of fresh pineapple",
      "1 Little Gem lettuce, divided into 4 lettuce cups, or 2 small seeded burger buns, cut in half, to serve (optional)"
  ],
  time: '10mins',
  portion: 'for 2',
  nutritionalValues: {
      kcal: 264,
      fat: '14g',
      saturates: '5g',
      carbs: '19g',
      sugars: '18g',
      fibre: '10g',
      protein: '11g',
      salt: '1.2g'
  }
});


const recipe6 = new Recipe({
  name: "Veggie Chinese pancakes",
        imgURL: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1215468_10.jpg",
        shortDescription: "Anthea Hawdon's practical vegetarian pancakes with hoisin sauce.",
        preparation: `Heat a small frying pan. Add the mushrooms, soy, five-spice, rice wine, sesame oil and sugar. Stir until the mushrooms are cooked and the sauce is thick, bubbling and clinging to the mushrooms. Warm the pancakes – steam them or heat them in the microwave.
    Serve the mushrooms, spring onions, cucumber, lettuce and hoisin sauce in separate dishes, with the pancakes alongside.
    To assemble, spread a pancake, with a little hoisin sauce. Add some mushrooms, onions, cucumber and lettuce. Fold the pancake and enjoy.`,
        category: "breakfast",
        ingredients: [
            "200g mushroom, sliced (we used chestnut)",
            "2 tbsp soy sauce",
            "½ tsp five spice powder",
            "1 tbsp rice wine, preferably Shaohsing",
            "½ tbsp sesame oil",
            "1 tsp sugar",
            "6 Chinese pancakes",
            "2 spring onions, finely sliced",
            "5cm length cucumber, deseeded and sliced into matchsticks",
            "½ Little Gem lettuce, shredded",
            "4 tbsp hoisin sauce"
        ],
        time: '25mins',
        portion: 'for 2',
        nutritionalValues: {
            kcal: 254,
            fat: '7g',
            saturates: '1g',
            carbs: '37g',
            sugars: '17g',
            fibre: '4g',
            protein: '7g',
            salt: '4.1g'
        }
});

const defaultRecipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6];
Recipe.insertMany(defaultRecipes);



//Launch listening server on port 8080
app.listen(8081, '0.0.0.0');
    console.log('App is running on http://8081:0.0.0.0');