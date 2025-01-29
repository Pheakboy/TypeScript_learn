import {Props} from '../types/NameType'


export const Name = (props: Props) => {
  return (
    <div>
        <p>Name: {props.name} </p>
        <p>Age: {props.age}</p>
        <div>
            <p>Sum: {props.num1 + props.num2}</p>
        </div>
        <div>
            <p>Multiply : {props.num3 * props.num4} </p>
        </div>
        <div>
            <p>Divide : {props.num3 / props.num4} </p>
        </div>
        <div>
            <p>Subtract : {props.num3 - props.num4} </p>
        </div>
        <div>
            <p>Student: {`${props.isStudent}`} </p>
        </div>
    </div>
  )
}