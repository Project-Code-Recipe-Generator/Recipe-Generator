import spoonacular as sp

from .config import create_blueprint, render_template, request

api = sp.API("649f8d900ea145c0b8404e5cb01c1251")

main_views = create_blueprint("main")

@main_views.route("/")
def do_main_home():
    return render_template("hello.html")

@main_views.route("/api/query")
def do_query():
    '''Takes a recipe query and parses it into dishes -> ingredients, instructions, health information
    
    @params
    formdata with key "query"
    
    @return
    - HTTP 400 error 
    OR
    - {
        "number": int   (The number of expected results (between 1 and 100)),
        "offset": int     (The number of results to skip (between 0 and 900)),
        "results": [
            {
                "title": str,
                "image": url,
                "imageType": str (e.g., "jpg"),
                **"readyInMinutes": int,
                **"servings": int,
                "cookingMinutes": int (CAN be 0 or -1),
                "preparationMinutes": int (CAN be 0 or -1),
                "summary": str (SUmmary of recipe in HTML markdown),
                "instructions": str (Paragraph version of "analyzedInstructions"),                
                "analyzedInstructions": {
                    "steps": [
                        "number": int   (Step number 1, 2, ...),
                        "step": str (what is done on the step),
                        "ingredients": [
                                {
                                    "id": int,
                                    "image": "url/name.png",
                                    "localizedName": str (i.e., display name),
                                    "name": str
                                }
                            ]
                    ]
                },           
                "sourceName": str,
                "sourceUrl": url,
                "dairyFree": bool,
                "glutenFree": bool,
                "vegan": bool,
                "vegetarian": bool,
                "veryHealthy": bool,
                "veryPopular": bool
                "lowFodmap": bool,
                "sustainable": bool,
                "taste": (scale of 0-100) {
                    "bitterness": float,
                    "fattiness": float,
                    "saltiness": float,
                    "savoriness": float,
                    "sourness": float,
                    "spiciness": float,
                    "sweetness": float
                }
                "creditsText": str,
                "license": str,
                "spoonacularScore": float,
                "spoonacularSourceUrl": url,
                "cuisines": [],
                "diets": [str] (e.g.,"lacto ovo vegetarian" ),
                "dishTypes": [str] (e.g., "dessert"),
                "occasions": list[str],
                "cheap": bool,
                "aggregateLikes": int,
                "gaps": "yes" | "no",
                "healthScore": int,
                "id": int
            }
        ]
        "totalResults": int (All matched recipes)
    }
    '''

    try: 
        query = request.form.get("query")
    except Exception:
        return "Please enter search query", 400
    
    try: 
        api_result = api.search_recipes_complex(query, number=10).json()
        # not working for some reason, do individually
        # bulk_info = api.get_recipe_information_bulk( [recipe["id"] for recipe in api_result["results"]] ).json()
        for i in range(len(api_result["results"])):
            api_result["results"][i] = api.get_recipe_information(api_result["results"][i]["id"]).json() 
        return api_result
    except Exception as e:
        print(e)
        return "Error fetching query", 400
    

@main_views.route("/api/nutrition")
def get_nutrition():
    '''Takes a recipe id and gets nutritional info
    
    @params
    formdata with key "recipe_id"

    @return
    - HTTP 400 error 
    OR
    - {
        "nutrients": [
            {
                "name": str (e.g., "Calories"),
                "amount": float,
                "unit": str (e.g., "kcal"),
                "percentOfDailyNeeds": float (0-100)
            }
        ],
        "properties": [
            {
                "name": str (e.g., "Glycemic Index"),
                "amount": float,
                "unit": str (e.g., %, nothing etc.)
            }
        ],
        "flavonoids": [
            {
                "name": str (e.g., "Cyanidin"),
                "amount": float,
                "unit": str
            }
        ],
        "ingredients": [
            {
                "id": int,
                "name": str,
                "amount": float,
                "unit": str,
                "nutrients": [
                    # see above for structure
                ],
                ... see above for exact same structure, but without ingredients
            }
        ],
        "caloricBreakdown": {
            "percentProtein": float,
            "percentFat": float,
            "percentCarbs": float
        },
        "weightPerServing": {
            "amount": int,
            "unit": str (e.g., "g")
        }
    }

    '''
    try: 
        recipe_id = request.form.get("recipe_id")
    except Exception:
        return "Please select a recipe", 400
    
    try: 
        api_result = api.visualize_recipe_nutrition_by_id(recipe_id).json()
        return api_result
    except Exception as e:
        print(e)
        return "Error fetching query", 400