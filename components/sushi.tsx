import React from 'react'

export default function Sushi({menu}: any) {
  return (
    <div className={'p-4 font-mono w-1/2'}>
      <div className={'pb-4 flex justify-between'}>
        <div>welcome to your sushi shift</div>
        <div className={'text-orange-600 hover:text-orange-700 cursor-pointer'}>start work</div>
      </div>
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
