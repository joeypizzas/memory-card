# Memory card game planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- Three main sections:
  - Header
  - Game
  - Footer
- Header has title and static.
- Game:
  - Top small section split with instructions and then score/reset game button. Score includes current and best.
  - Main game section has a container component containing all the card components. Cards are clickable.
- Footer is static.

## What will the project react components be?

- App
  - Header
  - Game
    - GameInstructions
      - ResetGameButton
    - GameArea
      - GameCard
  - Footer

## How do you plan to design the application state?

- State lives at Game level as that's closest common parent to where score and the cards will live.
- Three useState calls, one for currentScore, one for bestScore, and one for cards.
- currentScore: primitive, initially set to 0.
- bestScore: primitive, initially set to 0.
  - Will be stored in local storage.
- cards:
  - array of card objects. Each card object has the following keys:
    - randomized unique ID.
    - name
    - giphyUrl (from API)
    - isClicked (boolean)
- One usage of useEffect inside of component to fetch gif URLs from giphy API.
  - Save them in local storage to get around the giphy 100 API calls per hour free tier limit.
- Async fetchToppingGifs function inside of effect that handles the try, catch, etc. of getting the actual gifs.
- Effect uses AbortController as clean up function for unmount. Also checjs local storage to prevent calling giphy API again if cards already stored.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- No user inputs.
- Score increments or decrements based on card selections.
- Reset game button resets game.

## How will you design your UI and link it to application state

- Build app component by component in JSX. Initially with entirely hardcoded values.
- Once component is built with hardcoded values, then pass down hardcoded props (including hardcoded giphy URLs).
- Once all components are built with hardcoded props, then refactor to add in state.
- Add in effect of dynamically pulling giphy URLs from the API.
