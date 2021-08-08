import PropTypes  from 'prop-types';
import Button from '../components/Button';
import { useLocation } from 'react-router-dom';

export const Header = ({title, setToggle, buttonView}) => {
    const location = useLocation(); 
    console.log(location.path)
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* <button className='btn'>Add</button> */}
            {location.pathname ==='/' && <Button onClick= {setToggle} text={buttonView ? 'Close' :'Add'} colour="white" bgColor={buttonView ? 'red': 'green'}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header; 
