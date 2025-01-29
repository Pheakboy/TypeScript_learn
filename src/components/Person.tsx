import { PersonProps } from "../types/PersonType"

const Person = (props: PersonProps) => {
  return (
    <div>
        <div>{props.name.first}</div>
        <div>{props.name.last}</div>
    </div>
  )
}

export default Person