import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from './components/HomePage';
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";

const App = () => {
  return (
    <Router>
      <div>
        {/* <SearchBar */}
        {/* onSearch= */}
        {/* {() => { */}
        {/* /* function to perform search */}
        {/* }} */}
        {/* /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/search" element={<RecipeList />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/recipe/:id" element={<Recipe />} /> */}
          // ... other routes
        </Routes>
      </div>
    </Router>
  );
};

export default App;
