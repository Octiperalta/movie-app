import axios from "axios";

export const getMostPopular = async type => {
  const mostPopularUrl = `https://api.themoviedb.org/3/${type}/popular?api_key=e721b7f5dc531655464907e7c8110ac2&language=en-US&page=1`;
  try {
    const response = await axios.get(mostPopularUrl);
    return response.data.results;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getTopRated = async type => {
  const topRatedUrl = `https://api.themoviedb.org/3/${type}/top_rated?api_key=e721b7f5dc531655464907e7c8110ac2&language=en-US&page=1`;
  try {
    const response = await axios.get(topRatedUrl);
    return response.data.results;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getMovie = async movieId => {
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e721b7f5dc531655464907e7c8110ac2`;
  const movieCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e721b7f5dc531655464907e7c8110ac2`;
  const movieDetailsResponse = await axios.get(movieDetailUrl);
  const movieCastResponse = await axios.get(movieCastUrl);
  const movieDetails = movieDetailsResponse.data;
  // const movieActors = await getActorsPhotos(
  //   movieCastResponse.data.cast.slice(0, 5)
  // );
  // const movieActors = movieCastResponse.data.cast.slice(0, 5);

  const movieActors = await getActorsPhotos(
    movieCastResponse.data.cast.slice(0, 5)
  );
  const movieDirectors = movieCastResponse.data.crew
    .filter(c => c.known_for_department === "Directing")
    .slice(0, 4);

  const movie = {
    title: movieDetails.title,
    backdrop: movieDetails.backdrop_path,
    genres: movieDetails.genres.map(g => g.name),
    overview: movieDetails.overview,
    releaseYear: movieDetails.release_date.slice(0, 4),
    duration: timeConvert(movieDetails.runtime),
    movieActors,
    movieDirectors,
  };
  // console.log("Movie details:", movieDetails);
  // console.log("Movie cast", movieActors);
  // console.log("Movie director", movieDirectors);
  return movie;
};

const timeConvert = mins => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  return `${hours}h ${minutes}min`;
};

const getActorsPhotos = async actors => {
  const photos = actors.map(actor => {
    return axios.get(
      `https://api.themoviedb.org/3/person/${actor.id}?api_key=e721b7f5dc531655464907e7c8110ac2&language=en-US`
    );
  });

  const response = await Promise.all(photos);
  return response.map(res => {
    return { name: res.data.name, photo: res.data.profile_path };
  });
};
