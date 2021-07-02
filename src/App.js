// 1. Create a component called "DeliveryTruck"
// 2. Have your component, when called in the app, display "I am delivering chocolate"

// IF YOU FINISH EARLY: Have five "trucks" display on the page, all delivering a differnt candy,
//to a differnt location

// CHALLENGE: Wonka has come up with a new candy idea! "Rando-Pop!"™ ...
// When you take a bite of this endless fun, a random candy ends up on your tongue!
// The candy is still in the development stages, so it's your job to, well... develop it!
// hint: how can we randomize items in JS?

// SUGAR RUSH CHALLENGE: Have 5 trucks carrying RandoPop, display on the page.
// Also, just for fun, no two trucks can be carrying the same candy.
// hint: how can for loops help here?

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Willy Wonka's Factory</h1>
      <h2>Today's deliveries:</h2>

      <img
        height="200px"
        src="https://media.giphy.com/media/26uf44OiZfrA3pPNK/giphy.gif"
        alt="Coco"
      />
    </div>
  );
}
