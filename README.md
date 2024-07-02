# Rick and Morty Mobile App

## General information

This repository holds a **Rick and Morty** app.

It was developed with **React Native**, **Typescript**, **React Query** and **Emotion Styled**! 🚀

You can see the final result running `npm i` + `npx react-native run start` from the CLI!

## Coding details

- **Reusable components** were created. They are located in `src/components`.
- **Typographic reusable components** are located in `src/components/typography`.
- **A color palette and spacers** were created in `src/theme` and shared through a `<ThemeProvider />` to the whole app.
- To handle **vertical spaces**, a reusable `<Spacer />` component was created.
- `Unit tests` were created for `SearchBar` component inside a  `__tests__` folder.
- Cache was implemented in the two queries used in the project thanks to `React Query query keys`.
- `react-native-reanimated` was used to animate the `Character` screen.
- `Pagination` was implemented in the Home screen to be able to navigate through all possible elements that the API returns.
