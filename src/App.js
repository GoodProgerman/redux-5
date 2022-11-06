import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)


	const addCash = () => {
		dispatch({ type: "ADD_CASH", payload: 5 })
	}
	const getCash = () => {
		dispatch({ type: "GET_CASH", payload: 5 })
	}

	const addCustomer = (name) => {
		const customer = {
			name: name,
			id: Date.now()
		}
		dispatch(addCustomerAction(customer))
	}
	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id))
	}

	return (
		<div className="App">
			<div className='wrapper'>
				<div className='content'>
					<div className='content__cash'>{cash}</div>
					<div className='content__plus-minus'>
						<button className='content__add' onClick={() => addCash()}>Пополнить счёт</button>
						<button className='content__create' onClick={() => addCustomer(prompt())}>Создать пользователя</button>
						<button className='content__create-many' onClick={() => dispatch(fetchCustomers())}>Download base</button>
						<button className='content__get' onClick={() => getCash()}>Убавить счёт</button>
					</div>
					<div>
						{customers.length ?
							<div>
								{customers.map(customer =>
									<div style={{ fontSize: 30, marginTop: 10, border: '1px solid black', padding: '10px 20px' }}
										onClick={() => removeCustomer(customer)} key={customer.id}
									>
										{customer.name}
									</div>
								)}
							</div>
							:
							<div style={{ fontSize: 30, marginTop: 10, textAlign: 'center' }}>
								There`s no clients!
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;











/* 

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash)


	const addCash = (value) => {
		dispatch({ type: "ADD_CASH", payload: value })
	}
	const getCash = (value) => {
		dispatch({ type: "GET_CASH", payload: value })
	}

	return (
		<div className="App">
			<div className='wrapper'>
				<div className='content'>
					<div className='content__cash'>{cash}</div>
					<div className='content__plus-minus'>
						<button className='content__add' onClick={() => addCash(Number(value))}>Пополнить счёт</button>
						<input type='text' className='content__input' value={value} onChange={(event) => setValue(event.target.value)} />
						<button className='content__get' onClick={() => getCash(Number(value))}>Убавить счёт</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

*/