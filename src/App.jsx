import {useEffect,axios,useState} from 'react'

const App = () => {
  /*const [name,setName]= useState({
    firstName :"",
    lastName :" "
  })
  return (
    <div>
      <input type="text" placeholder='firstname' value={name.firstName} onChange={(e)=>{
        setName({...name , 
          firstName : e.target.value})
      }} />
      <input type='text' placeholder='lastName' value={name.lastName}onChange={(e)=>{setName({...name , 
      lastName : e.target.value })}} />
      <h1>your firstname is {name.firstName}</h1>
      <h1> your lastName is {name.lastName}</h1>
    </div>
  )*/
  
  /*const [count,setCount]=useState (0)
  const [showText,setShowText]=useState(true)

  return(
    <div>
 <h1>{count}</h1>
 <button onClick={()=>{
  setCount(count+1);
  setShowText(!showText)
 }} >
  Submit
 </button>
 <h2> {showText && <p>this is a text </p> }</h2>
    </div>

  )*/
  /*useReducer : same target as useState , but more simplified because declare in one line and use state  and dispatch 
 const reducer =(state,action)=>{
  switch (action.type){
    case "INCREMENT" :
      return {count:state.count+1 ,showText :state.showText}
    
    case "ToggleShowText" :
      return {count:state.count , showText :! state.showText}
  }
 }
  const [state,dispatch]=useReducer(reducer,{count:0 ,showText:true})
  return(
    <div>
      <h1>{state.count}</h1>
      <button onClick={
        ()=>{
          dispatch({type:'INCREMENT'});
          dispatch({type:'ToggleShowText'})
        }
      }>Submit</button>
      <h1>{state.showText&&<p>this is a text </p>}</h1>

    </div>
  )*/
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API is called perfectly");
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Empty dependency array to run the effect once

  return (
    <div>
      <h1>{data ? <p>Email: {data}</p> : <p>Loading...</p>}</h1>
    </div>
  );
}

export default App;