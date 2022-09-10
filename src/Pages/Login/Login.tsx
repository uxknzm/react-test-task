import React from 'react';
import s from './Login.module.css'
import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { userAuth } from '../../redux/slices/UserSlices';


const Login: React.FC = () => {
    const { register, handleSubmit, reset, formState} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data: {}) => {
        dispatch(userAuth(data))
    }
    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ login: '', password: '' });
        }
      }, [formState, reset]);
    
    const isError = useSelector((state: RootState) => state.user.error)
    return (
        <>
        {isError? <div className={s.error}><p>Неверный логин или пароль.</p>
    </div> : ''}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.login___conteiner}>
                <div className={s.title__conteiner}>
                    <div className={s.login__title}>
                        <h2 className={s.title}>Autorization</h2>
                    </div>
                </div>
                <div className={s.form__submit}>
                    <div className={s.login__input_conteiner}><p className={s.input__text}>Login</p> <input className={s.login__input} id="login" type='text' {...register('login', {
                        required: true
                    })} /></div>
                    <div className={s.login__input_conteiner}><p className={s.input__text}>Password</p> <input className={s.login__input} id="password" type='password' {...register('password', {
                        required: true,
                    })} /></div>
                    <div className={s.btn__conteiner}>
                    <button className={s.btn} type="submit" >Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
};

export default Login;