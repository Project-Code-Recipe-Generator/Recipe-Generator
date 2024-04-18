export const CategoryCard = ({src, category}) => {
  return (
    <div className="flex flex-col items-center">

      <img 
        src={src}
        alt="category"
        className="rounded-full w-28 h-28 object-cover"
      />
      <p className="my-2">
        {category}
      </p>

    </div>
  )
}

