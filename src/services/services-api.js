const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDVhMmVmOTBkZWY1YzMzZDRhMzFkMGRhMDViMDE1MCIsInN1YiI6IjY0ZjBiYjU5Y2FhNTA4MDEwYWU2YWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68fXrEUL_FZnMg6SyMTGJwfTB01TSdh9bAAu1u2Pz14',
      },
};
    
export const SearchMovie = async (film, type) => {
  try {
    let url;
    switch (type) {
      case 'movie':
        url = `https://api.themoviedb.org/3/movie/${film}?language=en-US`;
        break;
      case 'search_movies':
        url = `https://api.themoviedb.org/3/search/movie?query=${film}&include_adult=false&language=en-US&page=1`;
        break;
      case 'trending_movies':
        url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
        break;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }

    const response = await fetch(url,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // if (type === 'trending_movies') {
    //   return response;
    // }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при отриманні даних про фільм:', error);
    throw error; 
  }
};