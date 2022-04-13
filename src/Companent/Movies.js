import Movie from "./Movie";

export default function Movies(props){
  const {movies=[]} = props;

  return(
      <div className="movies">
        {movies.length ? movies.map(movie =>(
        <Movie key={movie.imdbID}{...movie}/>)):
        <div>
          <a>
        <header class="top-header">
      </header>
      
      
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      
      
      
      <div class="lamp__wrap">
        <div class="lamp">
          <div class="cable"></div>
          <div class="cover"></div>
          <div class="in-cover">
            <div class="bulb"></div>
          </div>
          <div class="light"></div>
        </div>
      </div>
      
      <div className="znewnot">
        <h3>Page Not Found</h3>
      </div>

      <section class="error">
        
        <div class="error__content">

        </div>
       
      
      </section>
      
        </a></div>}
      </div>
  )
}