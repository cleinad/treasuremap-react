import React from 'react'

interface Props {
    colour: string;
}

const SmallDivider = ({colour}:Props) => {
  return (
    <div className="small-divider" style={{backgroundColor: colour}}></div>
  )
}

export default SmallDivider