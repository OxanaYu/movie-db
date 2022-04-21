import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchMovies} from '../redux/MoviesSlice';

function MainPage(){
    const dispatch = useDispatch()
    const data = useSelector((state)=> state)
    useEffect(()=>{
        dispatch(fetchMovies())
    },[])
    console.log(data)
    return(
        <>
            <div>
                {data && data.map((movie) => <h2 key={movie.id}>{movie.title}</h2>)}
            </div>
        </>
    )
}
export {MainPage}