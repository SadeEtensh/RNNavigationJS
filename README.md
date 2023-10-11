# React Native Navigation

## Navigation

- is the mechanism that allow users to move accross diffrent screens, access features, and generally use your app effectivly
- A go-to solutions for handling navigation is React Navigation Library.
- Expo has its own built in routing feature exclusive to expo projects.
- React Navigation works for both expo and RN CLI Apps

## React Navigation

- provides a variety of navigators like Stack, Drawer and Tab navigators
- Installation(expo)
  - npm install @react-navigation/native
  - npx expo install react-native-screens react-native-safe-area-context

## Stack Navigation

![Alt text](<Screenshot 2023-10-11 at 4.24.07 in the afternoon.png>)

- Each screen is stacked on top of previous one like a deck of cards
- when you navigate to a new screen, a new card is placed on the top of the stack, and when you navigate back,the top card is removed, revealing the previous screen.
- Allows users to drill down into detailed views and retrace their steps when done
- It's Particularly useful in scenarios where a linear flow of screen is required.
  example: list view to detail view more details view

  Two Navigators: Stack Navigator and Native Stack Navigator

  ### Stack Navigator

- is a JavaScript based navigator which offers high degree of customization, making it a great choice for apps that require unique navigation experience.

- However, this comes at the cost of performace especially when its counterpart, the Native Stack Navigator

### Native Stack Navigator

- leverges the native navigation construcs of ios and Android, providing better performace and more native feel to the transitions and gestures.
- The caveat here is, it might not offer the same level of customization as Stack Navigator

## Drawer Navigation

## Bottom Tab Naviation
