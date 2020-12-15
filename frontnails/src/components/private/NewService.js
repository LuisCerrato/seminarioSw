import {useState} from 'react';
import Page from '../cmms/Page';
import Field from '../cmms/Field';
import {paxios} from "../../utlts/Axios";
import {useHistory} from "react-router-dom";
import {useStateContext } from "../../utlts/Context";

import { SecondaryButton, PrimaryButton } from '../cmms/Buttons';
import { PRODUCT_RESET} from '../../utlts/store/reducers/prods.reducer'
const NewService = ()=>{

    const [, dispatch] = useStateContext();
    const [form, setForm] = useState({nombre:'',precio:'',duracion:''});
    const history = useHistory();

    const onChange = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        const {name, value} = e.target;
        let newForm = { ...form, [name]:value };
        setForm(newForm);   
    }
    const addNewServicio = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        paxios.post('/api/servicios/nuevo', form)
          .then((data)=>{
            console.log(data);
            dispatch({ type: PRODUCT_RESET});
            history.push("/servicios");
          })
          .catch((ex)=>{
            console.log(ex);
            alert("Algo salio mál al ingresar");
          })
      }

    return (
        <Page headding="Nuevo Servicio">
            
            <Field 
            type="text" 
            id="nombre" 
            placeholder="Servicio" 
            onChange={onChange} 
            caption="Nombre"
            value={form.nombre}
            />

            <Field 
            type="text" 
            id="duracion" 
            placeholder="Tiempo" 
            onChange={onChange} 
            caption="Duracion"
            value={form.duracion}
            />  

            <Field 
            type="text" 
            id="precio" 
            placeholder="Lps." 
            onChange={onChange} 
            caption="Precio Servicio"
            value={form.precio}
            />

            
            
            <section>
            <PrimaryButton onClick={addNewServicio}>Agregar</PrimaryButton>
            <SecondaryButton onClick={() => { history.push("/servicios") }}>Cancelar</SecondaryButton></section>
           
        </Page>
    )
}

export default NewService;