import { Link } from "react-router-dom";
import "./register.scss"

const register = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1 className="linkup">Link up</h1>
          <p>
            A place where you can connect with people and make new freinds.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Log in</button>
          </Link>
         
        </div>
        <div className="right">
          <h1>Register Now!</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email id" />
            <input type="name" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
