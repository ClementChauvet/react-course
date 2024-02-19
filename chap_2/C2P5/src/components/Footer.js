import { useState } from 'react'
import '../styles/Footer.css'

function checkEmail(email) {	
	if (email.includes('@')) {
		alert('Merci ! Nous vous tiendrons informé·e·s des différentes plantes 🌿🌱🌵')
	} else {
		alert('Attention, cette adresse mail n\'est pas valide')
	}
}

function Footer() {
	const [inputValue, setInputValue] = useState('Entrez votre mail')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
				<input 
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={() => checkEmail(inputValue)}
				/>
				
			</div>
		</footer>
	)
}

export default Footer
