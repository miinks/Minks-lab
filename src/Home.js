const Home = () => {

  const handleClick = () => {
    console.log('hello,');
  }

  const handleClickAgain = () => {
    console.log
  }
    return (
        <div className="home">
           <h2>Homepage</h2> 
           <button onClick={handleClick}>Click Me</button>
           <button>Click me again</button>
        </div>
      );
}
 
export default Home;