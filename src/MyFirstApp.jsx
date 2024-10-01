// What about props -> Properties

// If this is not changing then I dont have to have it on the inside, meaning if it not depends on component leave it out.
// on that way REACT wont render it
const getWelcome = (firstName) => {
  return `Welcome ${firstName}, you got this!`;
};
// const newMessage = {
//     name: 'Jose',
//     lastName: 'Robles'
// };

// export const MyFirstApp = ({ title }) => {
//   console.log(title);
//   return (
//       <>
//       <h1>{ title }</h1>
//       <h1>{getWelcome('Jose')}</h1>
//       {/* <code>{JSON.stringify(newMessage)}</code> */}
//       <p>Soy un Subtitulo</p>
//     </>
//   );
// };

// When there are more than 2 elements on a component I can use FRAGMENT because DIV works but what if I dont need it?
// import { Fragment } from 'react';

// export const MyFirstApp = () => {
//   return (
//     <Fragment>
//       <h2>My fiirst App Jose</h2>
//       <p>Soy un Subtitulo</p>
//     </Fragment>
//   );
// };

export const MyFirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

// vamos en 42 yarn dev
