import { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Field from '../cmms/Field';
import Page from '../cmms/Page';


import {naxios as axios} from '../../utlts/Axios';
import './Signin.css'


const Signin = () =>{
    
    const [form,setForm] = useState({
        email: '',
        password:''
    });

    
    const routeHistory = useHistory();
    

    const onChange = (e) =>{

        const {name,value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
     
    }

    
  
    const onSignin= (e) =>{
        const {email,password} = form;

            axios.post(
                '/api/seguridad/signin',
                {email,password}
                
            ).then(() =>{
                
               routeHistory.replace("/");  
               
            }).catch((err)=>{
                alert('Ups! Hubo un problema');
                console.log(err);
               
            })

    }

    return(
   
        <Page headding="Registrar">
            <section className="Signsection">
            <Field id="email" caption="Correo" type="text" value={form.email} onChange={onChange}/>
            <Field id="password"  caption="Contraseña"type="password" value={form.password} onChange={onChange}/>
            <button onClick={onSignin}>Registrar</button>
            <br/>
            <Link to ="/">Regresar</Link>
            </section>
        </Page>
        
    )

}

export default  Signin;