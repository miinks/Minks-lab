const Home = () => {

  const handleClick = () => {
    console.log('Hello,');
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name);
  }
    return (
        <div className="home">
           <h2>Homepage</h2> 
           <button onClick={handleClick}>Click Me</button>
           <button onClick={()=>{
            handleClickAgain('Minks')
           }}>Click Me Again</button>
        </div>
      );
}
 
export default Home;