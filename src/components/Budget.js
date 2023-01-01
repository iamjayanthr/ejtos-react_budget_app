
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	let {shortSymbol,budget } = useContext(AppContext);
	const budgetchange=(event)=>{
		budget=event.target.value
		console.log(budget);
	}
	return (
		
			
			
			
			
			
		<div className='alert alert-secondary'>
			
			<span>Budget: {shortSymbol}<input
						required='required'
						type='number'
						value={budget}
						step="10"
						max="20000"
						
						onChange={budgetchange}
						style={{  size: 10}}>
						</input></span>
            
		</div>
	);
};

export default Budget;