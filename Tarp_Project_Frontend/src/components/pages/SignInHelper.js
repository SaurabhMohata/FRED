import { Link } from "react-router-dom";

function SignInHelper() {
    return (
    <div className="jumbotron jumbotron-fluid" style = {{'font-family': 'montserrat'}}>
      <div className="container">
      <h1 className="display-4 text-left">
      <i className="fas fa-exclamation-triangle"></i>
      &nbsp;
      UNDER CONSTRUCTION!
      </h1>
      <p className="lead">Check back after some time, the site is under construction :(</p>
      <br />
      <Link className="btn btn-lg btn-warning" to='/'>Back to Fred</Link>
      </div>
    </div>
    );
}

export default SignInHelper;