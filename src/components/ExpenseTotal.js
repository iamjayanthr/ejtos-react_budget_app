
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const totalExpenses=0;
const ExpenseTotal = () => {
	const { shortSymbol,expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<span>Spent so far: {shortSymbol}{totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;
export {totalExpenses} ;