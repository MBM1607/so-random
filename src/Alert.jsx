import './Alert.css'

const Alert = ({ text, isVisible }) => {
	return (
		isVisible && <p className='alert'>{text}</p>
	)
}

export default Alert
