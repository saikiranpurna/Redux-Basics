import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { ordered, restocked} from "./icecreamSlice";

const IceCreamView = () => {
    const numberOfIcecreams = useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Ice creams - {numberOfIcecreams}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Ice cream</button>
      <button onClick={()=>dispatch(restocked(3))}>Restock Ice creams</button>
    </div>
  );
};

export default IceCreamView;
