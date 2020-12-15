
import {MdHome} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {FaUserLock} from 'react-icons/fa';
import {BsCardChecklist} from 'react-icons/bs';
import './Footer.css'

import { useStateContext } from '../../utlts/Context';

const Footer = () =>{
    const [{auth}, ] = useStateContext();
    
    let nav =(
      
    <ul>
        <li><NavLink to="/"><MdHome size="1.5em"/> </NavLink></li>
        <li><NavLink to ="/login"><FaUserLock size="1.5em"/></NavLink></li>
        <li><NavLink to ="/signin"><BsFillPersonPlusFill size="1.5em"/></NavLink></li>
    </ul>

    );
    
    if (auth.logged ){
    
        nav =(
        <ul>
            <li><NavLink to="/"><MdHome size="1.5em"/> </NavLink></li>
            <li><NavLink to ="/servicios"><BsCardChecklist size="1.5em"/></NavLink></li>
           
        </ul>
        )
    
    }  
    
    return (
        <footer>
          <nav>
            {nav}
          </nav>
        </footer>
      )
    
}

export default Footer;