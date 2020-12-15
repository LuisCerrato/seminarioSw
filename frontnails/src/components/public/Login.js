import { useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import Field from '../cmms/Field';
import Page from '../cmms/Page';

import {useStateContext} from '../../utlts/Context';
import {naxios as axios, setJWT} from '../../utlts/Axios';


import './Login.css'
import { LOGIN_FETCHING, LOGIN_FETCHING_FAILED, LOGIN_SUCCESS } from '../../utlts/store/reducers/auth.reducer';

const Login = () =>{
    
    const [form,setForm] = useState({
        email: '',
        password:''
    });

    const [, dispatch] = useStateContext();
    const routeHistory = useHistory();
    const location = useLocation();

    const onChange = (e) =>{

        const {name,value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
     
    }

    let { from } = location.state || { from: { pathname: "/" } };
  
    const onLogin= (e) =>{

            const {email,password} = form;
            dispatch({ type: LOGIN_FETCHING });
            axios.post(
                '/api/seguridad/login',
                {email,password}
            ).then(({data}) =>{
                dispatch({type:LOGIN_SUCCESS, payload:data});
                setJWT(data.jwt);
                routeHistory.replace(from);
            }).catch((err)=>{
                dispatch({ type: LOGIN_FETCHING_FAILED });
                alert('Credenciales Incorrectas');
                console.log(err);
            })

    }

    return(
   
        <Page headding="Iniciar Sesion">
            <section className="Loginsection">
            <Field id="email" caption="Correo" type="text" value={form.email} onChange={onChange}/>
            <Field id="password"  caption="Contraseña"type="password" value={form.password} onChange={onChange}/>
            <button onClick={onLogin}>Ingresar</button>
            <br/>
            <Link to ="/">Regresar</Link>
            </section>
        </Page>
        
    )

}

export default  Login;