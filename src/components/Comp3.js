import React from 'react';
import { useContext } from 'react';
import UserContext from '../store/store.context';

function Comp3() {
  const ctx = useContext(UserContext);
  console.log(ctx);
  const myClick = () => {
    ctx.changeNameFn({ name: 'Rajesh' });
  };

  return (
    <div>
      <h1>I am comp 3 {ctx.user.name}</h1>
      <button onClick={myClick}>Change</button>
    </div>
  );
}
export default Comp3;
