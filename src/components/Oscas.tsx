import React from "react"

type OscasProps = {
    children: React.ReactNode;
}

const Oscas = (props:OscasProps) => {
  return (
    <div>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Oscas