
import './App.css';
import IMG_TEST from'./images/image1.jpeg';
// import Header from "./Components/Header.jsx"
// import MyFooter from "./Components/Footer.jsx"

import{Header,Footer} from "./Components"
import Button from 'react-bootstrap/Button';




// const name="ayesha"



// function App() {
//   const myname="ayesha enayat"

//   const foo= ()=>{
//     console.log("my name is ayesha")
//   }

 
//   const student={
//     stname:"ahmad",
//     age:"20"
//   }

//   const  students=[
//     {
//       stname:"ahmad",
//       age:"20"
//     },
//     {
//       stname:"ahmad shah",
//       age:"22"
//     }
  
//   ]

//   const arr=["a","b","c"]

//   return (
//     <div>
//       <h1 style={{background:"grey",color:"red"}} className="">{myname}</h1>
//       {/* <h2>{student}</h2> */}
//       <h2>{student.stname}{student.age}</h2>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"></img>
//       <img src={IMG_TEST}></img>
//       <button onClick={foo}>click me</button>
//       <button onClick={()=> foo ()}>click me 2</button>
//       <p>map return in call value and index value mai object aye ga in this map ka function new array bana kr return krta hai har bar new array mai wo hota hai jo map se return hoa hota hai is return mai li hai or li le ander name</p>
//       <ul>
//         {
//           students.map((v,i)=><li key={i}>{v.stname}</li>)
//         }
//       </ul>
//     <p>{arr}</p>

   
 
//     </div>
//   );
// }

// export default App;

// function Header(){
//   return(
//     <h1>header</h1>
//   )
// }
// function Footer(){
//   return(
//     <h1>footer</h1>
//   )
// }
function App() {
return(
  <div>
    <Header></Header>
    <p>data</p>
    <Footer/><br/>
    <Button variant="primary">Primary</Button>
    <button type="button" className="btn btn-danger">Danger</button>
  </div>
   
  
)
}


export default App;