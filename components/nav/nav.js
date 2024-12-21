import './nav.css';
export default()=>{

    return <div>
       <>
  {/* Navbar */}
  <nav className="navbar2 navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
      
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
     
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard/cases">
              Cases
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/dashboard/service">
              Services
            </a>
          </li>
  
          
        </ul>
        {/* Left links */}
      </div>
      
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>

}