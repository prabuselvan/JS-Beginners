const movies = [

    {title: 'a', year : 2018,rating :4.5},
    {title: 'b', year : 2018,rating :4.7},
    {title: 'b', year : 2018,rating :3},
    {title: 'd', year : 2017,rating :4.5},
];

const filteredMovies = getFilterMovies(movies);
const sortedMovies =  getSorting(filteredMovies);
// console.log(sortedMovies);

getTitles(sortedMovies);



function getTitles(sortedMovies) {

    for (let key of sortedMovies) 
        for (let val in key)
        //    console.log(val);
        if (val==='title') 
            console.log(key[val]);
}

function getFilterMovies (movies  ) {
    const newobj= [];
    for(let key of movies) {
        // console.log(key.year)
        if (key.year >= 2018 && key.rating > 4) {
            // console.log(key);
            newobj.push(key);
        }
    }
    return newobj;
}   

function getSorting(filterMovies) {
   return filterMovies.sort((a,b)=> {
        
        // if (a.rating < b.rating ) return -1;
        // if (a.rating > b.rating ) return 1;

        if (b.rating < a.rating) return -1;
        if (b.rating < a.rating) return 1;
 
        return 0;
    });

}