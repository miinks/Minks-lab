import { useState } from "react";


const Home = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);


  const handleClick = (e) => {
    console.log('Hello,');
  }

  const handleClick = () => {
    console.log('hello ' + name, e.target);
  }
    return (
        <div className="home">
           <h2>Homepage</h2> 
           <button onClick={handleClick}>Click Me</button>
           <button onClick={()=> handleClickAgain('Minks', e)}>Click Me Again</button>
        </div>
      );
}
 
export default Home;