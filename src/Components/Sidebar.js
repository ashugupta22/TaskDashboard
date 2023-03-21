import {Link} from 'react-router-dom';
import './Sidebar.css';
function Sidebar(){
    return(
        <>
        <div className='s-wrapper'>
        <ul>
        <Link to ="/"><li>Home</li></Link>
            <Link to ="/dashboard"><li>Dashboard</li></Link>
            <Link to ="/pages"><li>Pages</li></Link>
            <Link to ="/form"><li>Form</li></Link>
        </ul>
        
        </div>
       
        </>
    )
};
export default Sidebar;