import React from "react";

type ButtonProps = {
    handelClick: (event: React.MouseEvent<HTMLButtonElement>, id:number ) => void;
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={(event) => props.handelClick(event,1)}>Button</button>
  )
}

export default Button