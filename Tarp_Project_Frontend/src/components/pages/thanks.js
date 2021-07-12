import { Link } from "react-router-dom";

function Thanks() {
    return (
    <div className="jumbotron jumbotron-fluid" style = {{'font-family': 'montserrat'}}>
      <div className="container">
      <h1 className="display-4 text-left">Thank You!</h1>
      <p className="lead">Your contribution is invaluable to us and the millions you are helping :)</p>
      <Link className="btn btn-lg btn-danger" to='/'>Back to Fred</Link>
      </div>
    </div>
    );
}

export default Thanks;