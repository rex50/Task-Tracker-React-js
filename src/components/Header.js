import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom'

const Header = ({title, showForm, onToggle}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && 
                <Button 
                    color={showForm ? 'red' :'green'} 
                    text={showForm ? 'Cancel' : 'Add'} 
                    onClick={onToggle}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headerStyles = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header