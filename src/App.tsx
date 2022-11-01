import { useCallback, useEffect, useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Options from './components/Options';
import Alert from './components/Alert';

import './App.css';

const lorem = new LoremIpsum(
	{
		sentencesPerParagraph: {
			max: 8,
			min: 4,
		},
		wordsPerSentence: {
			max: 16,
			min: 4,
		},
	}
);

const App = () => {
	const types = ['paragraph', 'sentence', 'word'];

	const [alertText, setAlertText] = useState('');
	const [isAlert, setIsAlert] = useState(false);

	const [type, setType] = useState(0);
	const [number, setNumber] = useState(4);

	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const toggleOptions = () => setIsOptionsOpen(prev => !prev);

	const [text, setText] = useState('');

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
		setTimeout(() => setIsAlert(false), 1000);
		setAlertText('Copied to Clipboard');
		setIsAlert(true);
	};

	const generate = useCallback(() => {
		if (type === 0) {
			setText(lorem.generateParagraphs(number));
		}
		else if (type === 1) {
			setText(lorem.generateSentences(number));
		}
		else if (type === 2) {
			setText(lorem.generateWords(number));
		}
	}, [type, number]);

	const changeType = (type: number) => {
		setType(type);
	};

	useEffect(() => {
		generate();
	}, [number, generate]);

	return (
		<>
			<header id='top-bar'>
				<div>
					<input
						type='number'
						name='number'
						id='number'
						min='1'
						value={number}
						onChange={e => setNumber(parseInt(e.target.value))}
					/>
					<select
						name='generate-options'
						id='generate-options'
						value={type}
						onChange={e => changeType(parseInt(e.target.value))}
					>
						{
							types.map((type, index) => {
								return (
									<option key={index} value={index}>{type}</option>
								);
							})
						}
					</select>
					<button
						id='options-btn'
						className='btn'
						onClick={toggleOptions}
					>
						Options
					</button>
					<button id='generate-btn' className='btn' onClick={generate}>Generate!</button>
				</div>
				<button id='copy-btn' className='btn' onClick={copyToClipboard}>Copy</button>
			</header>

			<main className='text-container'>
				{
					text.split('\n').map((line, index) => {
						return <p key={index} className='paragraph'>{line}</p>;
					})
				}
			</main>
			{ isAlert && <Alert text={alertText} /> }
			<Options
				isOpen={isOptionsOpen}
			/>
		</>
	);
};

export default App;
