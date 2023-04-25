import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}
function About({ image, about }) {
  return (
    <aside>
      <img alt="blog" src={image || "https://via.placeholder.com/215"} />
      {/* {image ? <img alt="blog" src={image }  /> :} <img alt="blog" src={"https://via.placeholder.com/215"}  />*/}
      <p>{about}</p>
    </aside>
  );
}
function ArticleList({ posts }) {
  // map through and show componetnts.
  // return only one componet
  //for{}
  //react array.map(()=>{return <></>})
  // {}
  return (
    <main>
      {posts.map((post, index) => {
        return <Article key={post.id} post={post} />;
      })}
      {/* {posts.map((post, index) => (
        <Article key={post.id} post={post} />
      ))} */}
    </main>
  );
}
function Article({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <small>{post.date || "January 1, 1970"}</small>
      <p>{post.preview}</p>
    </article>
  );
}
export default App;
