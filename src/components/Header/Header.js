import {Link} from 'react-router-dom';

function Header() {
    return (
      <div className="header">
       <div className="bg-dark p-2">
            <h3 className="text-info pl-md-5">My Cloud</h3>            
       </div>
       <div className="container text-info mt-5">
            <Link to="/galary"><span className="p-md-5 pr-2">Galary</span></Link>
            <Link to="/upload"><span className="p-md-5 pl-2">Uploads</span></Link>
       </div>
      </div>
    );
  }
  
  export default Header;
  