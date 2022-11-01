import './Alert.css';

interface AlertProps {
	text: string,
}

const Alert = ({ text }: AlertProps) => {
	return (
		<p className='alert'>{text}</p>
	);
};

export default Alert;
