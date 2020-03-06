import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import InnerPageHeader from './components/InnerPageHeader';
import SingleRecipe from './components/SingleRecipe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home(){
    return <div className="App">
    <Navbar/>
    <Header/>
    <RecipeList/>
  </div>
 };

 function Login() {
   return <div className="App"> <Navbar/> <h1> Login page</h1> </div>
 };

 function Signup() {
    return <div className="App"> <Navbar/> <h1> Sign up page</h1> </div>
 };

 function Profile() {
  return <div className="App"> <Navbar/> <h1> Profile page</h1> </div>
};

function Recipes() {
  return <div className="App"> <Navbar/> <h1>Recipes</h1> </div>
}

function Breakfast() {
  return <div className="App"> <Navbar/> <h1>Breakfast</h1> </div>
}

function Lunch() {
  return <div className="App"> <Navbar/> <h1>Lunch</h1> </div>
}

function Dinner() {
  return <div className="App"> <Navbar/> <h1>Dinner</h1> </div>
}

function Submit() {
  return <div className="App"> <Navbar/> <h1>Submit</h1> </div>
}

function Mission() {
  return <div className="App"> <Navbar/> <h1>Mission page</h1> </div>
}

function Sample() {
  return <div className="App"> <Navbar/> <InnerPageHeader/> <SingleRecipe/> </div>
}
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/breakfast" exact component={Breakfast}/>
        <Route path="/lunch" exact component={Lunch}/>
        <Route path="/dinner" exact component={Dinner}/>
        <Route path="/recipes" exact component={Recipes}/>
        <Route path="/submit" exact component={Submit}/>
        <Route path="/mission" exact component={Mission}/>

        <Route path="/sample-recipe" exact component={Sample}/>

      </Switch>
    </Router>

  );
}

export default App;
