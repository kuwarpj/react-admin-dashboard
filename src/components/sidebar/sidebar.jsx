
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./sidebarMenu";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Sidebar.css";

const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <VpnKeyOutlinedIcon  />,
      exact: true,
    },
    {
      name: "Product",
      icon: <WidgetsOutlinedIcon />,
      exact: true,
      subRoutes: [
        {
          name: "Add Product",
          path: "/product/add",
          exact: true,
        },
        {
          name: "List Product",
          path: "/product/list",
          exact: true,
        },
      ],
    },
    {
      name: "Customers",
      icon: <AccountBoxOutlinedIcon />,
      exact: true,
      subRoutes: [
        {
          name: "Add Customer",
          path: "/customers/add",
          exact: true,
        },
        {
          name: "List Customer",
          path: "/customers/list",
          exact: true,
        },
      ],
    },
    {
      name: "Income",
      icon: <AccountBalanceWalletOutlinedIcon />,
      exact: true,
      subRoutes: [
        {
          name: "Add Income",
          path: "/income/add",
          exact: true,
        },
        {
          name: "List Income",
          path: "/income/list",
          exact: true,
        },
      ],
    },
    {
      name: "Promote",
      icon: <InsightsOutlinedIcon />,
      exact: true,
      subRoutes: [
        {
          name: "Add Promote",
          path: "/promote/add",
          exact: true,
        },
        {
          name: "List Promote",
          path: "/promote/list",
          exact: true,
        },
      ],
    },
    {
      name: "Help",
      icon: <ContactSupportOutlinedIcon />,
      exact: true,
      subRoutes: [
        {
          name: "Add Help",
          path: "/help/add",
          exact: true,
        },
        {
          name: "List Help",
          path: "/help/list",
          exact: true,
        },
      ],
    },
  ];

const SideBar = ({ children, isOpen, handleHeaderText }) => {
  const [prevMenuOpen, setPrevMenuOpen] = useState(null);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "150px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const onItemClick = (menuName, subMenuName) => {
    handleHeaderText(menuName, subMenuName);
  };

  const handleMenuToggle = (route) => {
    if (prevMenuOpen === route) {
      setPrevMenuOpen(null); // If clicked menu is the same as the open menu, close it
    } else {
      setPrevMenuOpen(route); // Otherwise, set the clicked menu as the new open menu
    }
  };

  // const getCurrentUser = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   return user;
  // };

  return (
    <div className="sidebar-main-container">
      <div className="main-container">
        
        <motion.div
          animate={{
            width: isOpen ? "100%" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <div className="hospital-logo">
                 <p><AddCircleOutlineIcon  /></p>   <p>Dashboard</p>
                    
                  </div>
                </motion>
              )}
            </AnimatePresence>
          </div>
         
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                    handleHeaderText={handleHeaderText}
                    isMenuOpened={prevMenuOpen === route}
                    onMenuToggle={() => handleMenuToggle(route)}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                  onClick={() => onItemClick(route.name, "Home")}
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}


          </section>

        <div className="profile-container" >
          <div className="profile-wrap">
        <div className="profile-pic">
                  <img
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="profile"
                  />
                  
                </div>

                <div className="profile-details">
                  <p>Kuwar Jha</p>
                  <p>Project Manager</p>
                </div>
                </div>
        </div>
        </motion.div>

        
       

        <main className="main-cls">{children}</main>

        
      </div>
    </div>
  );
};

export default SideBar;
