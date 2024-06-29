import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Taylor",
      userId: 1,
      profilePic:
        "https://c.stocksy.com/a/ca2200/z9/486614.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/5119595/pexels-photo-5119595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Era",
      userId: 2,
      profilePic:
        "https://wallpapercave.com/wp/wp7997000.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;