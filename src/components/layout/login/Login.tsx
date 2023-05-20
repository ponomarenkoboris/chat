import { FormEvent, useContext } from 'react';
import { AuthProtectionContext } from '@context/AuthProtection';
import './Login.scss'

type FormElements = { idInstance?: HTMLInputElement, apiTokenInstance?: HTMLInputElement }

export const Login = () => {
	const { login } = useContext(AuthProtectionContext)

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const { idInstance, apiTokenInstance } = event.currentTarget.elements as FormElements

		if (idInstance?.value && apiTokenInstance?.value) {
			login({ idInstance: idInstance.value, apiTokenInstance: apiTokenInstance.value })
		}
	}

	return (
		<div className='login'>
			<form className='login__form' onSubmit={onSubmit}>
				<label className='form__label'>
					<p className='form__label-text'>Ваш idInstance:</p>
					<input type="text" className='form__input' name='idInstance' />
				</label>
				<label className='form__label'>
					<p className='form__label-text'>Ваш apiTokenInstance:</p>
					<input type="text" className='form__input' name='apiTokenInstance' />
				</label>
				<button type='submit' className="form__submit">Войти</button>
			</form>
		</div>
	)
}