
import './App.css';
const TestComponent = (props) =>{
  return(

<div>
<h1 >name: {props.name}</h1>
    <h2>Last name: {props.lastname}</h2>
    <h2>Age: {props.age}</h2>
</div>

  )
}
const App = () =>  {


  return (
    <div className="App">

 
<TestComponent name={'ata'} />
<TestComponent lastname={"Sahin"}/>
<TestComponent age={23}/>


    </div>
  );
}

export default App;
