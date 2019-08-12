## Playlist - Heigher Order Container or Container Factory pattern

### Architecture

- route/Application holds the routers
- components/VideoList is the video list page and the "Container" component
- components/presentational folder holds all the stateless components

#### Details.

- When you application needs to pass the state all over and we want to avoid to passdown as props drill.
- Create the HOC (a function) that takes the presentational component as argument and returns an anonimous class which automates the props drill process of the "Container pattern" approach.
- The project can have multiple HOCs and the presentational component will be passed into all the HOCs it needs the state from.
- The usual naming patter for creating the HOC is:
  - The function name starts with the word "With" followed by the type of state, and the parameter as "WrappedComponent".
  - WithFetchMovies = fn(WrappedComponent) => class with state and methods and render & returns the <WrappedComponent with-the-props>
  - The use: const MoviesContainer = WithFetchMovies(MovieList);

#### Process
