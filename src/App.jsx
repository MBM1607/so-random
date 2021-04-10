import { LoremIpsum } from 'lorem-ipsum';

import './App.css';

const App = () => {
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

	return (
		<>
			<header id='top-bar'>
				<div>
					<input type='number' name='number' id='number' min='1' />
					<select name='generate-options' id='generate-options'>
						<option value='paragraph'>Paragraph</option>
						<option value='sentences'>Sentences</option>
						<option value='words'>Words</option>
						<option value='lists'>Lists</option>
					</select>
					<button id='generate-btn' className='btn'>Generate!</button>
				</div>
				<button id='copy-btn' className='btn'>Copy</button>
			</header>

			<main id='text-container'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat
					nisl. Tortor dignissim convallis aenean et. Maecenas volutpat blandit aliquam
					etiam erat. Arcu risus quis varius quam quisque id diam vel. At ultrices mi
					tempus imperdiet nulla malesuada. Condimentum lacinia quis vel eros donec ac
					odio tempor. Non nisi est sit amet facilisis magna. Eros donec ac odio tempor.
					Id eu nisl nunc mi ipsum. Feugiat scelerisque varius morbi enim nunc. Interdum
					varius sit amet mattis vulputate enim nulla aliquet porttitor. Nullam vehicula
					ipsum a arcu cursus vitae congue mauris rhoncus. Scelerisque viverra mauris in
					aliquam sem fringilla ut morbi. Neque viverra justo nec ultrices dui sapien
					eget. Non sodales neque sodales ut etiam. Turpis nunc eget lorem dolor sed
					viverra ipsum.
				</p>

				<ul>
					<li>Non sodales neque sodales ut etiam. Turpis nunc eget lorem dolor sed
					viverra ipsum.</li>
					<li>Non sodales neque sodales ut etiam. Turpis nunc eget lorem dolor sed
					viverra ipsum.</li>
					<li>Non sodales neque sodales ut etiam. Turpis nunc eget lorem dolor sed
					viverra ipsum.</li>
					<li>Non sodales neque sodales ut etiam. Turpis nunc eget lorem dolor sed
					viverra ipsum.</li>
				</ul>
			</main>
		</>
	);
};

export default App;
