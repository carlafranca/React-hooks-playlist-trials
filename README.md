## Playlist - Flux Pattern

### Architecture

- route/Application holds the routers
- flux holds (dispatcher, store, actions)
- components/VideoList is the home component (route)
- components/presentational/video is the single video component (route)
- components/presentational folder holds all the stateless components

#### Flux.

I used the Container Patter branch to refactor to Flux. It is a good idea start with this pattern if the project is small and change to flux or redux if the the prop drill gets too deep.

#### Process

- The component/VideoList > action > VideoStore updates the video list.
- VideoList Get the initial data and componentDidMount listen to the fetch update emit
- Props are being passed to the single video via location.state in the router. (view components/presentational/videos-card/VideosCardDesc)
