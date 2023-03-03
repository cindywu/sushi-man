import React from 'react'

export default function Sushi({menu}: any) {
  return (
    <div className={'p-4 font-mono w-1/2'}>
      <div className={'pb-4'}>welcome to your shift at sushi man</div>
      {menu.map((item: any) => {
        return (
          <div
            key={item.name}
            className={"flex justify-between"}
          >
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}
