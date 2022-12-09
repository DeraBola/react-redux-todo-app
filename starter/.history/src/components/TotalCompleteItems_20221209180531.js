import { createNextState } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux'

const TotalCompleteItems = () => {
	const completedTodos = useSelector((state))
	return <h4 className='mt-3'>Total Complete Items: 5</h4>;
};

export default TotalCompleteItems;
