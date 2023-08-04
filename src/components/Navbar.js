import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props){
  return (
    
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
    <Link className="navbar-brand" to="/Formtext">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navdata" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navdata">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Form">{props.Formtext}</Link>
        </li>
      </ul>
     
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.togalMode} id="sitchdata"/>
      <label className="form-check-label" htmlFor="sitchdata">DARK MODE</label>
      </div>
    
      <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'red':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.redMode} id="sitchdetal"/>
      <label className="form-check-label" htmlFor="sitchdetal">GREEN MODE</label>
      </div>
      <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'pink':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.pinkMode} id="sitchdetaldata"/>
      <label className="form-check-label" htmlFor="sitchdetaldata">PINK MODE</label>
      </div>
      
      
    </div>
  </div>
</nav> 
   
  )
}
Navbar.propTypes=
{
  title:PropTypes.string.isRequired,
  home:PropTypes.string
}
// Navbar.defaultProps =  
// {
//   title:'my site is best',
//   home:'my about page'
// }
