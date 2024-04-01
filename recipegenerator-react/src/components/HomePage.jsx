import React from "react";
import "./HomePage.css";
import food_image from "./food_image.png";
import estimated_icon from "./estimated_icon.png";
import servings_icon from "./servings_icon.png";
import ingredients_icon from "./ingredients_icon.png";

const App = () => {
  return (
    <div className="whole-container">
      <div className="left-side-container">
        <div className="title-container">
          <h1 class="title">PH: Tofu Katsu Curry</h1>{" "}
        </div>
        <div className="description-container">
          <h2 class="description">
            PH: Short description of the recipe Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h2>
        </div>
        <div className="pink-bar"></div>
        <div className="box-container">
          <div className="box-columns">
            <div className="box-icon-container">
              <img src={estimated_icon} class="icon-container" />
              <h1 class="box-headers">Estimated: </h1>
            </div>
            <h2 class="box-text">PH: Estimated Time</h2>
          </div>
          <div className="box-columns">
            <div className="box-icon-container">
              <img src={servings_icon} class="icon-container" />
              <h1 class="box-headers">Servings: </h1>
            </div>
            <h2 class="box-text">PH: Servings </h2>
          </div>
          <div className="box-columns">
            <div className="box-icon-container">
              <img src={ingredients_icon} class="icon-container" />
              <h1 class="box-headers">Ingredients: </h1>
            </div>
            <h2 class="box-text">PH: # of Ingredients</h2>
          </div>
        </div>
      </div>
      <div className="circle-container">
        <div className="image-container">
          <img src={food_image} alt="Tofu Katsu Curry" />
        </div>
      </div>
    </div>
  );
};

export default App;
