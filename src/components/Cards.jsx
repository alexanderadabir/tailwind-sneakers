import sneakers from '../data/sneakers'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {sneakers.map((sneaker) => (
        <Card {...sneaker} key={uuidv4()} />
      ))}
    </div>
  )
}

export default Cards
