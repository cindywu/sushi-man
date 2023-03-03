import React from 'react'

export default function Sushi({menu}: any) {
  console.log({menu})
  return (
    <div>
      <div>welcome to your shift at sushi man</div>
      {menu.map((item: any) => {
        return (
          <div>{item.name}</div>
        )
      })}
    </div>
  )
}
