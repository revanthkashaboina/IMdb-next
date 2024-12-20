import Results from '../components/Results';
import React from 'react'
const API_KEY = process.env.API_KEY;

const Home = async({searchParams}) => {
  const genreData = await searchParams;
  const genre = (genreData.genre || 'fetchTrending');
  
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated`: `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 60 } });

  if(!res.ok){
    throw new Error("Failed to fetch the data")
  }
  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  )
}

export default Home