import Sushi from '../components/sushi'
import {nanoid} from 'nanoid'

type menuItem = {
  id: string
  name: string
  price: number
  minimumCount: number
}

const menu : menuItem[] = [
  {
    id: nanoid(),
    name: "red dragon maki",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "dynamite maki",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "dragon maki",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "shrimp tempura cal maki",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "plate lunch",
    price: 12,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "gyoza (5pcs)",
    price: 5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "shrimp tempura",
    price: 2,
    minimumCount: 2
  },
  {
    id: nanoid(),
    name: "veggie tempura",
    price: 2,
    minimumCount: 2
  },
  {
    id: nanoid(),
    name: "inari (5pcs)",
    price: 4.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "sesame ball (8pcs)",
    price: 5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "chicken beef bento",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "unagi bento",
    price: 8,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "garlic miso mayo salmon",
    price: 9,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "egg roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy crab roll",
    price: 3,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy ahi natto roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "unagi roll",
    price: 3,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "crab roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spam crab roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "ahi roll",
    price: 3,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "natto roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "tuna mayo roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "natto ahi roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spam egg roll",
    price: 3,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy ahi spam roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "ebiko roll",
    price: 4,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spam roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy ahi ebiko roll",
    price: 5,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy ahi roll",
    price: 3,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy ahi inari",
    price: 6,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "spicy crab inari",
    price: 6,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "crunchy bowl",
    price: 9,
    minimumCount: 1
  },
  {
    id: nanoid(),
    name: "tempura bowl",
    price: 9,
    minimumCount: 1
  }
]

export default function Home() {
  return (
    <Sushi menu={menu}/>
  )
}
