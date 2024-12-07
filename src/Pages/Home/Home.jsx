import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FeaturedMovies from "../../components/FeaturedMovies/FeaturedMovies";
import { useEffect, useState } from "react";
import TrailersMovies from "../../components/TrailersMovies/TrailersMovies";

const Home = () => {
  const movieDate = useLoaderData();
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const movies = [...movieDate].sort((a, b) => b.rate - a.rate);
    setAllMovies(movies);
  }, []);

  return (
    <div className="pb-16">
      <Banner></Banner>
      <FeaturedMovies allMovies={allMovies}></FeaturedMovies>
      <TrailersMovies></TrailersMovies>
    </div>
  );
};

export default Home;
