import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import { Menu, Dropdown} from 'antd';
import { useNavigate } from "react-router-dom";
import { Avatar } from 'antd';
import { userInfo } from "../hooks/user";

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate()


  const logOut = () => {
    localStorage.removeItem('uswms-login');
    navigate('/signin');
  };


  const menuDropdown = (
    <Menu>
      <Menu.Item onClick={logOut}>Logout</Menu.Item>
    </Menu>
  );




  const toggleNav = () =>{
    if(showNav === true){
      setShowNav(false)
    }
    else{
      setShowNav(true);
    }
  }
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("scroll", ()=>{
      setShowNav(false)
    })
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);



  return (
    <>
      <header className="mobile-sticky">
        <div className="container">
          <nav className="navbar navbar-expand-lg Topnav justify-content-between"
            id="myTopnav"
          >
            <Link to="/" className="navbar-brand logo">WHIPMODE</Link>
            {/* menu design */}
            <MenuOutlined className="mobile-nav-toggle" onClick={toggleNav} />
            
          <div className={width < 992 ? `Topnav top-menu mobile-menu-link mobile-nav ${showNav ? 'active' : ''}` : `Topnav top-menu mobile-menu-link`} id="myTopnav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/howItWork" className="nav-link ">How It Works</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link to="/helping" className="nav-link">Helping</Link>
                </li>
                {
                userInfo('avatar') ? 
                  <Dropdown overlay={menuDropdown} placement='bottomRight'>
                  <Avatar
                    size={40}
                    icon={<span className="menu-icon">{userInfo('avatar')}</span>}
                    className='cursor-pointer menu-avatar'
                  />
                </Dropdown>
                  :
                  <>
                    <li className="nav-item">
                    <Link to="/signin" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link">Join</Link>
                    </li>
                  </>              
        

                }
                
              </ul>
            </div>
            {/* respo nav bar  */}
          </nav>
        </div>
      </header>


    </>
  );
};

export default Header;
