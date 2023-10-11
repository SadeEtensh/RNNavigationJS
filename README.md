# React Native Navigation

## Stack Navigation

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
