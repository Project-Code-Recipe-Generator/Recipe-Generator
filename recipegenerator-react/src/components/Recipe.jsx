import React from "react";
import "./Recipe.css";
import food_image from "./food_image.png";
import estimated_icon from "./estimated_icon.png";
import servings_icon from "./servings_icon.png";
import ingredients_icon from "./ingredients_icon.png";

const Recipe = () => {
  return (
    <div className="whole-container">
      <div className="first-section">
        <div className="left-side-container">
          <div className="title-container">
            <h1 className="title" style={{ fontWeight: 700 }}>
              PH: Tofu Katsu Curry
            </h1>
          </div>
          <div className="description-container">
            <h2 class="description">
              PH: Short description of the recipe Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
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
        {/* //     <ol style={{ textAlign: 'left', padding: '0 20px', color: '#333', fontSize: '18px' }}>
      //       <li>Turn on a multi-functional pressure cooker (such as Instant Pot) and select Sauté function. Add coconut oil; when hot, add onion and cook for 1 minute. Add 2 tablespoons curry powder and garlic. Mix well and cook for 2 minutes. Turn off Sauté function. Stir in diced tomatoes, tomato sauce, chicken broth, and sugar.</li>
      //     </ol>
      //     <ol start="2" style={{ textAlign: 'left', padding: '0 20px', color: '#333', fontSize: '18px', marginTop: '20px' }}>
      //       <li>Poke holes into each chicken breast using a fork. Sprinkle with salt, pepper, and remaining curry powder. Add seasoned chicken to the pot. Close and lock the lid. Select high pressure according to manufacturer's instructions; set timer for 10 minutes. Allow 10 to 15 minutes for pressure to build.</li>
      //     </ol>
      //     <ol start="3" style={{ textAlign: 'left', padding: '0 20px', color: '#333', fontSize: '18px', marginTop: '20px' }}>
      //       <li>Release pressure using the natural-release method according to manufacturer's instructions for 10 minutes. Release remaining pressure carefully using the quick-release method according to manufacturer's instructions, about 5 minutes. Unlock and remove the lid.</li>
      //     </ol>
      //     <ol start="4" style={{ textAlign: 'left', padding: '0 20px', color: '#333', fontSize: '18px', marginTop: '20px' }}>
      //       <li>Remove chicken; use 2 forks to shred the meat and return it to the pot. Turn on Sauté function; cook and stir until liquid is lightly boiling, 2 to 3 minutes.</li>
      //     </ol>
      //     <ol start="5" style={{ textAlign: 'left', padding: '0 20px', color: '#333', fontSize: '18px', marginTop: '20px' }}>
      //       <li>Turn the pressure cooker to the Keep Warm setting. Add coconut milk and stir well; cook for 10 minutes more to allow flavors to come together.</li>
      //     </ol>
      //   </div>
      // </div> */}
      </div>
      <div className="second-section">
        <div className="ingredients-box">
          <h2 className="title" style={{ marginBottom: -5 }}>
            Ingredients{" "}
          </h2>
          <p className="units">UNITS: US</p>
          <ul className="ingredients-list">
            <li>3 cups uncooked long grain white rice (used Uncle Ben's)</li>
            <li>4 Tbsp. Creole seasoning (used Zatarain's)</li>
            <li>1 1/2 Tbsp. bell peppers (Zatarain's Dehydrated Sweet)</li>
            <li>2 Tbsp. minced onion (used McCormick's)</li>
            <li>1 Tbsp. minced garlic</li>
            <li>2 Tbsp. soy sauce</li>
            <li>6 1/2 cups water</li>
            <li>2 Tbsp. butter</li>
            <li>1 dash paprika (on top for taste)</li>
            <li>ground beef</li>
            <li>butter</li>
            <li>meat</li>
            <li>rice</li>
            <li>fluff</li>
            <li>1 dash paprika</li>
            <li>peppers</li>
            <li>onion</li>
            {/* Add more example ingredients */}
          </ul>
        </div>
        <div>
          <h2 className="title" style={{ marginBottom: -5 }}>
            Directions
          </h2>
          <ol className="directions-list">
            <li>
              Turn on a multi-functional pressure cooker (such as Instant Pot)
              and select Sauté function. Add coconut oil; when hot, add onion
              and cook for 1 minute. Add 2 tablespoons curry powder and garlic.
              Mix well and cook for 2 minutes. Turn off Sauté function. Stir in
              diced tomatoes, tomato sauce, chicken broth, and sugar.
            </li>

            <li>
              Poke holes into each chicken breast using a fork. Sprinkle with
              salt, pepper, and remaining curry powder. Add seasoned chicken to
              the pot. Close and lock the lid. Select high pressure according to
              manufacturer's instructions; set timer for 10 minutes. Allow 10 to
              15 minutes for pressure to build.
            </li>

            <li>
              Release pressure using the natural-release method according to
              manufacturer's instructions for 10 minutes. Release remaining
              pressure carefully using the quick-release method according to
              manufacturer's instructions, about 5 minutes. Unlock and remove
              the lid.
            </li>

            <li>
              Remove chicken; use 2 forks to shred the meat and return it to the
              pot. Turn on Sauté function; cook and stir until liquid is lightly
              boiling, 2 to 3 minutes.
            </li>

            <li>
              Turn the pressure cooker to the Keep Warm setting. Add coconut
              milk and stir well; cook for 10 minutes more to allow flavors to
              come together.
            </li>
          </ol>
        </div>
        <h2 className="title" style={{ marginBottom: 15 }}>
          Nutrition Facts (per serving)
        </h2>
        <div className="nutrition-circles">
          <div className="nutrition-circle">
            <p className="nutrition-circles-text">Calories</p>
          </div>
          <div className="nutrition-circle">
            <p className="nutrition-circles-text">Fat</p>
          </div>
          <div className="nutrition-circle">
            <p className="nutrition-circles-text">Protein</p>
          </div>
          <div className="nutrition-circle">
            <p className="nutrition-circles-text">Carbs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
