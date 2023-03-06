# Hotel List demo app

This is a sample app to fetch and display a list of hotels and their detail page.

- Made with React Native + Typescript Starter Kit with Expo
- Uses React Navigation
- No exterrnal libraries to share the state, using Context

It features 2 screens:

- Home screen with the hotel list, you can sort by stars, price or rating and filter by name
- Hotel Detail screen with simple image carousel, hotel info and map to locate it

So far the tests include:

- Unit tests for basic presentational component (ErrorMessage)
- Unit tests for a screen using the Context data (SortScreen)

## Example of some functionalities

![alt text](https://github.com/samcampisi/HotelListDemo/raw/main/example.gif 'Example')

## How to install

- `git clone git@github.com:samcampisi/HotelListDemo.git`
- `cd HotelListDemo`
- `npm install`

## How to run

- Make sure you have no other packagers running. In the console:
- `npx expo start`
- Follow the expo instructions to run on iOS or Android if you like
- ! To test on your device, you need to have the Expo Go app installed and scan the QR Code on your terminal with the camera.

## Troubleshooting

- if things don't work, clean up all your build and node_modules folders, npm install and rebuild

## Third party libraries used so far

- **react-native-maps** to display a map with the hotel coordinates
- **react-native-pager-view** to display an image carousel for the hotel gallery

## Wishlist for the future

- Add a feature to zoom in on the images or a full image view
- Add tests for HomeScreen
- Add more detail to the search bar
