import spoonacular as sp

from .config import create_blueprint, render_template, request

api = sp.API("649f8d900ea145c0b8404e5cb01c1251")

main_views = create_blueprint("main")

@main_views.route("/")
def do_main_home():
    return render_template("hello.html")

@main_views.route("/api/nlp-query")
def search_nlp():
    '''Takes a query and parses it into dishes, ingredients, cuisines, modifiers
    
    @params
    formdata with key "query"
    
    @return
    - HTTP 400 error 
    OR
    - {
        "dishes": list[
            {
                "image": str    (file name)
                "name":          (Name of dish)
            }
        ],
        "ingredients": list[
            {
                "image": str,    (file name)
                "include": bool  (JS style false/true)
                "name":          (Name of ingredient)
            }
        ],
        "cuisines": [str],
        "modifiers": list[str]
    }
    '''

    try: 
        query = request.form.get("query")
    except Exception:
        return "Please enter search query", 400
    
    try: 
        result = api.analyze_a_recipe_search_query(query).json()
        print(result)
        return result
    except Exception:
        return "Error fetching query", 400