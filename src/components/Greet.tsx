import {Total} from '../types/GreetType';

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const arr2Fomat = arr1.map((val, index) => {
  return {
    number: val,
    isEven: val % 2 === 0,
    index: index,
  };
});
console.log('arr2Fomat',arr2Fomat);
const Greet = (props: Total) => {
    const {messageCount = 0} = props;
  return (
    <div className="p-4">
      {props.isLoggedIn ? (
        <h1 className="text-2xl font-bold text-green-500">
            Welcome bro{ props.name}! You are {messageCount}
          {/* {`Welcome ${props.name} You have ${props.messageCount} Unread`} */}
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-red-500">Please login</h1>
      )}
      <div className="mt-4 p-4 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-blue-700">
          Happy birthday to you {props.name}! Now You are {props.age}.{" "}
          {props.message} and I have sent you the {props.gift}
        </h1>
      </div>
    </div>
  );
};

export default Greet;
