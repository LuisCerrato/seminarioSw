import {useState , useEffect} from 'react'; 
import {Redirect} from 'react-router-dom';
import Page from '../cmms/Page';
import './Home.css'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const position = [ 14.062779332466054, -87.22045965271603] 
const Home = () =>{
    let [redirect, setRedirect] = useState("");
    if(redirect !==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page headding="Principal" footer={true}>
            
            <form >

                <h1>Ubicación</h1>

            <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    
                <Popup >
                    Segundo nivel, al par de tiendas MALIBU
                </Popup>
                </Marker>
            </MapContainer>,
            <table class="table">
     <thead>
     	 <th>Horarios</th>
     </thead>
     <tbody>
     	  <tr>
     	  	  <td data-label="Lunes :">8:00 AM - 7:00 PM</td>
     	  </tr>
     	  <tr>
     	  	  <td data-label="Martes :">8:00 AM - 7:00 PM</td>
     	  </tr>
     	  <tr>
     	  	  <td data-label="Miercoles :">8:00 AM - 7:00 PM</td>
     	  </tr>
     	  <tr>
     	  	  <td data-label="Jueves :">8:00 AM - 7:00 PM</td> 
		   </tr>
		   <tr>
		      <td data-label="Viernes :">8:00 AM - 7:00 PM</td> 
	      </tr>
	     <tr>
		      <td data-label="Sabado :">9:00 AM - 5:00 PM</td>
         </tr>
     </tbody>
   </table>

   <section>
   <button onClick={(e)=>{setRedirect("/citas/new")}}>Agendar</button>
   </section>

   </form>

        </Page>
    )
}

export default  Home;