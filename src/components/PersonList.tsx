import {PersonListProps} from '../types/PersonListType'


const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.name.map((name, index) => (
            <div key={index}>
                <div>{name.first}</div>
                <div>{name.last}</div>
                <div>{name.age}</div>
            </div>
        ))}
    </div>
  )
}

export default PersonList