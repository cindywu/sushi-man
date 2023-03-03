import React from 'react'
import Sushi from '../components/sushi'

type menuItem = {
  name: string
  price: number
  minimumCount: number
}

const menu : menuItem[] = [
  {
    name: "red dragon maki",
    price: 8,
    minimumCount: 1
  },
  {
    name: "dynamite maki",
    price: 8,
    minimumCount: 1
  },
  {
    name: "dragon maki",
    price: 8,
    minimumCount: 1
  },
  {
    name: "shrimp tempura cal maki",
    price: 8,
    minimumCount: 1
  },
  {
    name: "plate lunch",
    price: 12,
    minimumCount: 1
  },
  {
    name: "gyoza (5pcs)",
    price: 5,
    minimumCount: 1
  },
  {
    name: "shrimp tempura",
    price: 2,
    minimumCount: 2
  },
  {
    name: "veggie tempura",
    price: 2,
    minimumCount: 2
  },
  {
    name: "inari (5pcs)",
    price: 4.5,
    minimumCount: 1
  },
  {
    name: "sesame ball (8pcs)",
    price: 5,
    minimumCount: 1
  },
  {
    name: "chicken beef bento",
    price: 8,
    minimumCount: 1
  },
  {
    name: "unagi bento",
    price: 8,
    minimumCount: 1
  },
  {
    name: "garlic miso mayo salmon",
    price: 9,
    minimumCount: 1
  },
  {
    name: "egg roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    name: "spicy crab roll",
    price: 3,
    minimumCount: 1
  },
  {
    name: "spicy ahi natto roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    name: "unagi roll",
    price: 3,
    minimumCount: 1
  },
  {
    name: "crab roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    name: "spam crab roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    name: "ahi roll",
    price: 3,
    minimumCount: 1
  },
  {
    name: "natto roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    name: "tuna mayo roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    name: "natto ahi roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    name: "spam egg roll",
    price: 3,
    minimumCount: 1
  },
  {
    name: "spicy ahi spam roll",
    price: 3.5,
    minimumCount: 1
  },
  {
    name: "ebiko roll",
    price: 4,
    minimumCount: 1
  },
  {
    name: "spam roll",
    price: 2.5,
    minimumCount: 1
  },
  {
    name: "spicy ahi ebiko roll",
    price: 5,
    minimumCount: 1
  },
  {
    name: "spicy ahi roll",
    price: 3,
    minimumCount: 1
  },
  {
    name: "spicy ahi inari",
    price: 6,
    minimumCount: 1
  },
  {
    name: "spicy crab inari",
    price: 6,
    minimumCount: 1
  },
  {
    name: "crunchy bowl",
    price: 9,
    minimumCount: 1
  },
  {
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
