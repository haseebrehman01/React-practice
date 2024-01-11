import React from 'react'
import Products from './products'

 function App() {
//   // return sirf ik hi div  hoga  do yah zada div return karna ka 2 tareeka hain 1
//   return (
//     <div>
//   <div className='haseeb'>haseeb</div>
//   <h1></h1>
//   <h2></h2>
// {/* and more */}
//     </div>
  
//   )

// method 2
return(
<div>
  <h1 className='p-4 bg-black text-white'>hello</h1>
<Products/>
</div>
)

}
export default App










































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
