import {useState} from 'react';
import {useStateContext } from "../../utlts/Context";
import {useHistory} from "react-router-dom";
import Page from '../cmms/Page';
import Field from '../cmms/Field';
import {paxios} from "../../utlts/Axios";
import '../cmms/Buttons.css'
import { SecondaryButton, PrimaryButton } from '../cmms/Buttons';
import { PRODUCT_RESET} from '../../utlts/store/reducers/prods.reducer'


const NewDate = ()=>{
    const [, dispatch] = useStateContext();
    const [form, setForm] = useState({nombre:'',telefono:'',email:'', fecha:'',hora:''});
    const history = useHistory();
 
    const onChange = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      const {name, value} = e.target;
      let newForm = { ...form, [name]:value };
      setForm(newForm);
    }

    const addNewDate = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        paxios.post('/api/citas/nuevacita', form)
          .then((data)=>{
            console.log(data);
            dispatch({ type: PRODUCT_RESET});
            history.push("/citas");
          })
          .catch((ex)=>{
            console.log(ex);
            alert("Algo salio mál al ingresar");
          })
      }
    return (
      <Page headding="Agendar Cita">
        <Field
          type="text"
          id="nombre"
          placeholder="Nombre Completo"
          onChange={onChange}
          caption="nombre"
          value={form.nombre}
        />
        <Field 
          type="text"
          id="telefono"
          placeholder="00-00-00-00"
          onChange={onChange}
          caption="telefono"
          value={form.telefono}
        />
        <Field
          type="email"
          id="email"
          placeholder="Correo@gmail.com"
          onChange={onChange}
          caption="email"
          value={form.email}
        />
        <Field
          type="date"
          id="fecha"
          placeholder="dd/mm/aaaa"
          onChange={onChange}
          caption="fecha"
          value={form.fecha}
        />

        <Field 
          type="time" 
          id="hora"
          placeholder=""
          onChange={onChange}
          caption="hora"
          value={form.hora}
        />
        <section>
        <PrimaryButton onClick={addNewDate}>Agregar</PrimaryButton>
        <SecondaryButton onClick={() => { history.push("/servicios") }}>Cancelar</SecondaryButton>
        </section>
      </Page>
    );
}

export default NewDate;