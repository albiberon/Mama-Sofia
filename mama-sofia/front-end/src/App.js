import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import LoginSection from "./components/LoginSection";
import SingleRecipe from './components/SingleRecipe';
import RecipeEdit from './components/RecipeEdit';
import ApiDocumentation from './components/ApiDocumentation';
import MissionPage from './components/MissionPage';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';


function Home(){
    return <div className="App">
    <Navbar/>
    <Header/>
    <RecipeList/>
  </div>
 };

 function Login() {
   return <div className="App"> <Navbar/><LoginSection/> </div>
 };

 function Signup() {
    return <div className="App"> <Navbar/> <h1> Sign up page</h1> </div>
 };

 function Profile() {
  return <div className="App"> <Navbar/> <h1> Profile page</h1> </div>
};

function Breakfast() {
  return <div className="App"> <Navbar/> <h1>Breakfast</h1> </div>
}

function Lunch() {
  return <div className="App"> <Navbar/> <h1>Lunch</h1> </div>
}

function Api() {
  return <div className="App"> <Navbar/> <ApiDocumentation/> </div>
}

function Dinner() {
  return <div className="App"> <Navbar/> <h1>Dinner</h1> </div>
}

function Submit() {
  return <div className="App"> <Navbar/><RecipeEdit/></div>
}

function Mission() {
  return <div className="App"> <Navbar/> <MissionPage/> </div>
}

function Single() {
    let{id} = useParams();
  return <div className="App"> <Navbar/> <SingleRecipe _id={id}/> </div>
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
        <Route path="/recipes" exact component={Home}/>
        <Route path="/submit" exact component={Submit}/>
        <Route path="/mission" exact component={Mission}/>
        <Route path="/api" exact component={Api}/>

        <Route path="/recipe-details/:id" exact component={Single}/>
        <Route path="/recipe-edit-details/:id" exact component={Single}/>

      </Switch>
    </Router>

  );
}

export default App;
