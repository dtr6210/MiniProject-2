import "../src/Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main-container">
      <div className="content-container">
        {/* Logo */}
        <div className="logo-container">
          <img
            src="../images/Cream and Black Simple Elegant Catering Food Logo.png"
            alt="Logo Image"
          />
        </div>

        {/* Login form */}
        <div className="login-container">
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="bold-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="bold-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            {/* Link to sign up page */}
            <p className="SignUp">
              Don't have an account? <a href="signup.html">Sign up</a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
