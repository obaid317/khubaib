import PropTypes from 'prop-types'; // Import PropTypes
import "../styles/Navbar.scss"
import logo from '../assets/logo.png'
import breadcrumb from '../assets/breadcrumb.png'

const Navbar = (props) => {
  const { toggleMenu, settoggleMenu } = props

 // console.log(toggleMenu);
  return (
    <div className="navbar_container">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div onClick={() => settoggleMenu(!toggleMenu)}>
        <img src={breadcrumb}    alt="Breadcrumb" style={{cursor:"pointer",height:"17px"}}/>
      </div>
    </div>
  )
}

// Define PropTypes
Navbar.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  settoggleMenu: PropTypes.bool.isRequired
};

export default Navbar
