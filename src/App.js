import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "./store/store";


function App() {

  const dispatch = useDispatch()

  const songs = useSelector((state)=>{return state.songs})

  console.log(songs)

  const [inputValue,setInputValue] = useState('')

  const handleClick = ()=>{
        dispatch(addSong(inputValue))
        setInputValue('')
  }


  return (
    <div className="App">
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
