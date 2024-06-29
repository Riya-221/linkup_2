import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <span>Riya</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <span>Riya</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <p>
                <span>Riya</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <p>
                <span>Riya</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <p>
                <span>Riya</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <p>
                <span>Riya</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <div className="online"></div>
              <span>Riya</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <div className="online"></div>
              <span>Riya</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <div className="online"></div>
              <span>Riya</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg" alt="User Image" />
              <div className="online"></div>
              <span>Riya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
