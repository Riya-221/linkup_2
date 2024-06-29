import "./stories.scss";
   //TEMPORARY
   const stories = [
    {
      id: 1,
      name: "Riya",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Riya",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Riya",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Riya",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
const Stories = () => {
  return (
    <div className="stories">
        <div className="story">
        <img
            src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg"
            alt="User Image"
          />
          <span>Riya</span>
          <button>+</button>
        </div> 
        { stories.map(story=>(
        
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
<span>{story.name}</span>

        </div>
        ))}

        
    </div>
  )
}

export default Stories
