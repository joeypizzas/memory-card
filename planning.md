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

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- No user inputs.
- Score increments or decrements based on card selections.
- Reset game button resets game.

## How will you design your UI and link it to application state
