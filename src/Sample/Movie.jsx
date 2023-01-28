let Movie=()=>{
    let movie_Name="furious"
    let rel_Date="Dec 25"
    let more_Details={
        dir_Name:"James",
        "actor":"Flame",
        "actress":"Kleno"
    }
    return<div>
        <h1>{movie_Name}</h1>
        <h2>Release Date:{rel_Date}</h2>
        <h3>Dir Name:{more_Details.dir_Name}</h3>
        <h3>Actor:{more_Details.actor}</h3>
        <h3>Actress:{more_Details.actress}</h3>

    </div>
}
export default Movie;