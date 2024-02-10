import React from 'react'
import Tool from './Tool';

interface Props {
    items: String[]
}

const Tools = ({items}: Props) => {
  return (
    <>
    {items.map((item) => {
        <Tool iconName={item}></Tool>;
      })}
    </>
  )
}

export default Tools