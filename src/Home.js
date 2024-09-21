import { useState } from "react";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  })

  return (
    <div className="home">
      <div className="blog-preview" key={blog.id} >      <p>{ name } is { age } years old</p>
      <h2>{ blog.title }</h2>
      
        </div>
  );
}
 
export default Home;