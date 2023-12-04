import '../styles/Menubar.scss';
import PropTypes from 'prop-types';
import close_icon from './../assets/close_icon.png';

const Menubar = (props) => {
  const { toggleMenu, settoggleMenu } = props;
  const menuItem = ['About', 'Experience', 'Work', 'Awards', 'Education', 'Skills', 'Contact'];

  const socialItem = ['linkedin', 'behance', 'instagram', 'dribble'];


  return (
    <div className='menu_container'>
      <div className='menu_sub_container'>
        <div className='icon_div'>
          <div className='icon' onClick={() => settoggleMenu(!toggleMenu)}>
            <img src={close_icon} alt="Close Menu" />
          </div>
        </div>
        <div className='item_container'>
          {menuItem.map((item, index) => (
            <div className='item_sub_container' key={index} >
              <h2>{item}</h2>
            </div>
          ))}
        </div>

        <div className='socail_container'>
          {socialItem.map((item, index) => (
            <div className='socail_sub_container' key={index} >
              <h2>{item}</h2>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

// Define PropTypes
Menubar.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  settoggleMenu: PropTypes.func.isRequired, // Changed to func
};

export default Menubar;




// import '../styles/Menubar.scss'
// import PropTypes from 'prop-types';
// import close_icon from "./../assets/close_icon.png"

// const Menubar = (props) => {
//   const { toggleMenu, settoggleMenu } = props
//   const menuItem = ['About', 'Experience', 'Work', 'Awards', 'Education', 'Skills', 'Contact'];


//   return (
//     <div className='menu_container'>
//       <div className='menu_sub_container'>
//         <div className='icon_div'>
//           <div className='icon' onClick={() => settoggleMenu(!toggleMenu)}>
//             <img src={close_icon} alt="icon" />
//           </div>
//         </div>
//         {menuItem.map((item) => {
//           <div style={{ color: "#fff" }}>
//             <h2>{item}</h2>
//           </div>
//         })}

//         <div></div>
//       </div>
//     </div>
//   )
// }


// // Define PropTypes
// Menubar.propTypes = {
//   toggleMenu: PropTypes.bool.isRequired,
//   settoggleMenu: PropTypes.bool.isRequired
// };


// export default Menubar