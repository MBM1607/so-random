import ReactModal from 'react-modal';
import './Options.css';

const Options = ({ isOpen }: OptionsProps) => {
	return (
		<ReactModal
			isOpen={isOpen}
			contentLabel='Modal to set options'
			className='options'
			overlayClassName='overlay'
		>
			This is just an example
		</ReactModal>
	)
}

interface OptionsProps {
	isOpen: boolean
}

export default Options;
