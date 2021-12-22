import React,{useState,useEffect} from 'react'
import axios from 'axios';

const API="https://hoblist.com/api/movieList";

const Movie = () => {
    const [movie,setMovie]=useState({
        category:"",
        language:"",
        genre:"",
        sort:""
    })
    const [data,setData]=useState({})

    const postMovies=async ()=>{

        const newMovie=setMovie({...movie,category:"movies",language:"kannada",genre:"all",sort:"voting"})
        const res=await axios.post(API,newMovie)
        
        console.log(res)
        setData(res.data)
    }
    
    useEffect(() => {
        console.log("effect")
        postMovies()
        
    }, [])
    return (
        <div>
            Movie Page
            <p>{data.message}</p>
        </div>
    )
}

export default Movie
