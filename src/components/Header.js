import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, showForm, onToggle}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showForm ? 'red' :'green'} 
                text={showForm ? 'Cancel' : 'Add'} 
                onClick={onToggle}/>
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