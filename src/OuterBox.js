import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong,addMovie } from "./store/store";

function OuterBox({boxname}) {
    
    const dispatch = useDispatch()

    const {songs,movies} = useSelector((state)=>{return state})

    const [inputValue,setInputValue] = useState('')

    const handleClick = ()=>{

        if(boxname === 'Movie'){
            dispatch(addMovie(inputValue))
        }else{
            dispatch(addSong(inputValue))
        }
        
        setInputValue('')
    }
    return (
        <div className='OuterBox'>
            <p>{boxname + ' Slice'}</p>
            <div className='InnerDiv'>
                <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
                <button onClick={handleClick}>{`Add ${boxname}`}</button>
            </div>

            <div className='showDiv'>

                {
                    boxname === 'Movie' && movies.map((movie,index)=>{
                        return <div key={index}>
                            {movie}
                        </div>
                    })
                }

                {
                    boxname === 'Song' && songs.map((song,index)=>{
                            return <div key={index}>
                                {song}
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default OuterBox