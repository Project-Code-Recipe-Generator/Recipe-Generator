import {CategoryCard} from './CategoryCard'
import {ViewallButton} from './ViewallButton'
import cake from '../../assets/categories/cake.jpg'
import dessert from '../../assets/categories/dessert.jpg'
import drink from '../../assets/categories/drink.jpg'
import macaron from '../../assets/categories/macaron.jpg'
import wine from '../../assets/categories/wine.jpg'

const categories = [
  {
    src: `${drink}`,
    category:"Soda Drink"
  },
  {
    src: `${wine}`,
    category:"Wine"
  },
  {
    src: `${cake}`,
    category:"Cake"
  },
  {
    src: `${dessert}`,
    category:"Dessert"
  },
  {
    src: `${macaron}`,
    category:"Macaron"
  }
]

export const ExploreSection = () => {
  return (
    <section className="container flex flex-col pl-16">

      
      <div className="flex flex-col">

        <div className="flex flex-row justify-between xl:px-16 items-center ">
          <div className="py-2">
            <h1 className="text-black text-2xl font-bold mb-1">
              Explore
            </h1>
            <p className="text-slate-400 text-base">
              Checkout our most popular recipes this week
            </p>
          </div>
          <ViewallButton />
        </div>

        <div className="grid grid-cols-5 grid-rows-2 gap-4 mt-4 justify-center items-center">
          {categories.map((data, id) => (
            <div key={id}>
              <CategoryCard src={data.src} category={data.category}/>
            </div>
          ))}    
          {categories.map((data, id) => (
            <div key={id}>
              <CategoryCard src={data.src} category={data.category}/>
            </div>
          ))}      
        </div>

      </div>

    </section>
  )
}

