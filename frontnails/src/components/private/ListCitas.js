import { useStateContext } from '../../utlts/Context';
import Page from '../cmms/Page';
import { useHistory } from 'react-router-dom';
import {paxios} from '../../utlts/Axios';
import {  useRef } from 'react';
import './CitasList.css';
import {  PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_RESET , PRODUCT_LOADING} from '../../utlts/store/reducers/prods.reducer';
import InfiniteScroll from 'react-infinite-scroller';
import { IoIosSync } from 'react-icons/io';
import Field from '../cmms/Field';



  
const ListCitas =() =>{
    const [{ prods}, dispatch] = useStateContext();
    const history = useHistory();
    const listElements = prods.products.map((o)=>{
        return (<div key={o._id}>{o.nombre} 
        <br/>
        {o.telefono}
        <br/>
        {o.email}
        <br/>
        {o.fecha}
        <br/>
        {o.hora}  </div>);

       /* return (<div key={o._id}>{o.nombre} {o.duracion} <span onClick={() =>
        { dispatch({ type: PRODUCT_SET_CURRENT, payload:{_id:o._id}}); 
        history.push("/productos/one");}}>{o.precio}</span></div>);*/
      })
      const searchChange = (e)=>{
        //setSearchString(e.target.value);
        dispatch({ type: PRODUCT_RESET, payload: { searchFilter: e.target.value} });
      }


      const loadMore = function(page){
        if (!prods.fetching){
          dispatch({type:PRODUCT_LOADING});
        paxios.get(
          (!(/^\s*$/).test(prods.searchFilter))?
          `/api/citas/facetc/${prods.currentPage}/${prods.pageLimit}/${encodeURI(prods.searchFilter)}`
          : `/api/citas/facetc/${prods.currentPage}/${prods.pageLimit}`)
        .then(({data})=>{
          dispatch({
            type: PRODUCT_LOADED,
            payload: {
              products:data.rslt,
              total:data.total,
              currentPage:(prods.currentPage+1)
            }
          });
          
        })
        .catch((ex)=>{
          dispatch({ type: PRODUCT_ERROR });
          console.log(ex)
      });
      }
      };

      const scrollParentRef= useRef();
      return (
        <Page headding="Citas" footer={true}>
           <section className="CitasList" ref={scrollParentRef}>
           <div className="SearchField">
           <Field
           id="seachString"
           type="text"
           caption="Buscar:"
           value={prods.searchFilter}
           onChange={searchChange}></Field>
            </div>
            <InfiniteScroll
            pageStart={prods.currentPage}
            hasMore = {prods.hasMore}
            getScrollParent = {() => scrollParentRef.current}
            loader = {(<div key="loadingli" style={{flex:"2"}}><IoIosSync /></div>)}
            loadMore={loadMore}
            element="section"
            >
            {listElements}
 
          </InfiniteScroll>
         
          </section>
         
        </Page>
      );

}

export default ListCitas;