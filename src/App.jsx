import { useEffect, useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import './App.css';

const App = () => {
	const types = ['paragraph', 'sentence', 'word', 'list'];
	const [type, setType] = useState(0);
	const [number, setNumber] = useState(4);
	const [text, setText] = useState('');
	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	const generate = () => {
		if (type === 0) {
			setText(lorem.generateParagraphs(number));
		}
		else if (type === 1) {
			setText(lorem.generateSentences(number));
		}
		else if (type === 2) {
			setText(lorem.generateWords(number));
		}
		else if (type === 3) {
			setText(lorem.generateSentences(number));
		}
	}

	const changeNumber = (e) => {
		setNumber(parseInt(e.target.value));
	};

	const changeType = (e) => {
		setType(parseInt(e.target.value));
	};

	useEffect(() => {
		setText(lorem.generateParagraphs(number));
	}, []);

	return (
		<>
			<header id='top-bar'>
				<div>
					<input type='number' name='number' id='number' min='1' value={number} onChange={changeNumber} />
					<select name='generate-options' id='generate-options' value={type} onChange={changeType} >
						{
							types.map((type, index) => {
								return (
									<option key={index} value={index}>{type}</option>
								)
							})
						}
					</select>
					<button id='generate-btn' className='btn' onClick={generate}>Generate!</button>
				</div>
				<button id='copy-btn' className='btn'>Copy</button>
			</header>

			<main id='text-container'>
				{text}
			</main>
		</>
	);
};

export default App;
