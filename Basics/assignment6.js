const movies = [

    {title: 'a', year : 2018,rating :4.5},
    {title: 'b', year : 2018,rating :4.7},
    {title: 'b', year : 2018,rating :3},
    {title: 'd', year : 2017,rating :4.5},
];


const val =movies
    .filter((m)=> m.year === 2018 && m.rating > 4)
    .sort((a,b)=> b.rating -  a.rating)
    .map((m)=> m.title)

console.log(val);
