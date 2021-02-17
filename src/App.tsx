
import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './App.css'; 
import Modal from './containers/Modal/Modal';
import { getImages, openPhoto} from './store/actions/main';
import { RootStateType } from './store/reducers/rootReducer';


const App =()=>{

  const dispatch = useDispatch()
  const isModal = useSelector((state:RootStateType)=>state.main.isModal)
  const id = useSelector((state:RootStateType) => state.main.idModal)
  const images = useSelector((state:RootStateType)=>state.main.images)

   useEffect(()=>{
     dispatch(getImages())     
  },[dispatch])
    return (
      <div className="app">
        {
          isModal ?
          <Modal id={id} />
          :
          null
        }
        <div className="container"> 
          <h1 className="app__title">Test App</h1>
          <div className="gallery">
            {
              images.map((image)=>(
                <div className="gallery__item" onClick={() => dispatch(openPhoto(image.id))} key={image.id}>
                   <img src={image.url} alt=""/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }

export default App