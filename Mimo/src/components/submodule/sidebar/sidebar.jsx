import {useState} from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';
import bulgass from '../../../assets/icons/bulgass.png';

const Sidebar = () =>{
    const [open, setOpen] = useState(true);

    const Menus = [
      { title: 'Log in', path:'/login'},
      { title: 'Sign up', path:'/signup' },
    ];
    return (
        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
            <img
                src={bulgass} 
                className={`toggle-btn ${!open ? 'rotate-180' : ''}`}
                onClick={() => setOpen(!open)}
                alt="Toggle"
            />
        <ul className="menu-list">
        {Menus.map((Menu, index) => (
          <Link to={Menu.path} className="menu-link"> 
          <li
            key={index}
            className={`menu-item ${Menu.gap ? 'gap' : ''} ${index === 0 ? 'active' : ''}`}
          >
            <span className={`menu-title ${!open ? 'hidden' : ''}`}>{Menu.title}</span>
          </li>
            </Link>
        ))}
      </ul>
        </div>
    );
};
export default Sidebar;