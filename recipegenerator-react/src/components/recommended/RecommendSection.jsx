import {useState, useEffect} from 'react'
import {ImageBox} from './ImageCard'
import {RightButton} from './RightButton'
import {LeftButton} from './LeftButton'
import japanese from '../../assets/food/chicken-katsu.jpg'
import indian from '../../assets/food/chicken-masala.jpg'
import chinese from '../../assets/food/peking-duck.jpg'
import italian from '../../assets/food/shrimp-alfredo.jpg'
import korean from '../../assets/food/tteokbokki.jpg'

const images = [
  {
    src: `${indian}`,
    category: "Indian",
    show: false 
  },
  {
    src: `${italian}`,
    category: "Italian",
    show: true
  },
  {
    src: `${chinese}`,
    category: "Chinese",
    show: true
  },
  {
    src: `${japanese}`,
    category: "Japanese",
    show: true
  },
  {
    src: `${korean}`,
    category: "Korean",
    show: false
  }
]

export const RecommendSection = () => {
  
  const [startIndex, setStartIndex] = useState(Math.floor(images.length/2) - 1)
  const [endIndex, setEndIndex] = useState(Math.floor(images.length/2) + 1)
  const [imag, setImages] = useState([{
    src: `${indian}`,
    category: "Indian",
    show: false 
  },
  {
    src: `${italian}`,
    category: "Italian",
    show: true
  },
  {
    src: `${chinese}`,
    category: "Chinese",
    show: true
  },
  {
    src: `${japanese}`,
    category: "Japanese",
    show: true
  },
  {
    src: `${korean}`,
    category: "Korean",
    show: false
  }])
  
  return (
    <section className="container">
        
      <div className="flex flex-row items-center justify-center border border-white gap-2">
        <LeftButton />
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold mb-4">Recommended</h1>
          <div className="flex flex-row gap-4">
            {images.map((data, id) => (
              <>
                {(data.show ? (
                  <ImageBox src={data.src} name={data.category}/>
                ): null)}
              </>
            ))}
          </div>
        </div>

        <RightButton start={startIndex} end={endIndex+1} setStart={setStartIndex} setEnd={setEndIndex} images={images} setImages={setImages}/>
      </div>

    </section>
  )
}
  