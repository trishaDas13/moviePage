import {useEffect, useLayoutEffect, useState} from  'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from "react-redux";
import {getApiConfiguration} from './store/homeSlice';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) =>  state.home);

  useEffect(() => {
    api()
  }, [])
  

  const api = () =>{
    fetchDataFromApi('/discover/movie')
    .then((res)=>{
      console.log('Res: ', res)
      dispatch(getApiConfiguration(res))
    })
  }
   return (
    <div className="App">
      {url?.total_pages}
    </div>
  );
}

export default App;
