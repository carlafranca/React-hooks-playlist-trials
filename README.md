## Playlist - Container pattern

### Architecture

- route/Application holds the routers
- components/VideoList is the video list page and the "Container" component
- components/presentational folder holds all the stateless components

#### Data down. Events up.

It explicit shows how the data is flowing throughout the app.
It's a manual job and it will become harder as the application grows also makes difficult to identify what is affecting you code.

- State is stored in a component and passed down as props.
- Props can’t mutate (state is private to the component it belongs, if we need to change it, everything need to go back up as an action/event).

#### Process

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

- Start with a Mock
- Break UI into Componets
- Create a React state version
- DRY. Find the minimal representation of the state (find minimal mutable state and compute everything else you need on-demand)
- \*Keep in mind that some child components can have, sometimes a private state.
- Identify where the state should live (The lowest common owner/ancestor component that need the state. State flows down as props in the hierarchy)
- Add Inverse Data Flow (Support data flowing up. The components deep in the hierarchy need to update the state at the top component, where it lives, using event/actions)
- If there is no component that make sense to own the state, create a new component to hold the state and add above the common component (these components wont necessarily render anything, it can only holds the state).
