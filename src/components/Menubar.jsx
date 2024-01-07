import '../styles/Menubar.scss';
import PropTypes from 'prop-types';
import close_icon from './../assets/close_icon.png';

const Menubar = (props) => {
  const { toggleMenu, settoggleMenu } = props;
  const menuItem = ['', '', '', '', '', 'SKILLS', 'CONTACT'];
  const menuItems = [{title:'ABOUT',id:""}, {title:'EXPERIENCE',id:""}, {title:'WORK',id:""}, {title:'AWARDS',id:""}, {title:'EDUCATION',id:""}, {title:'SKILLS',id:""}, {title:'CONTACT',id:"vertical-slider"}];

  const socialItem = ['linkedin', 'behance', 'instagram', 'dribble'];


  return (
    <div className='menu_container'>
      <div className='menu_sub_container'>
        <div className='icon_div'>
          <div className='icon' onClick={() => settoggleMenu(!toggleMenu)}>
            <img src={close_icon} style={{height:"17px",cursor:"pointer"}} alt="Close Menu" />
          </div>
        </div>
        <div className='item_container'>
          {menuItems.map((item, index) => (
            <div className='item_sub_container' key={index} >
              <a className='menu-title' href={"#"+item.id}> 
                {item.title}
                </a>
            </div>
          ))}
        </div>

        <div className='socail_container'>
          {socialItem.map((item, index) => (
            <div className='socail_sub_container' key={index} >
              <h3 className='menu-title-two'>{item}</h3>
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