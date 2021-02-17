import React, { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Form from './Form/Form'
import './Modal.css'
import {closeModal, getImage} from '../../store/actions/main';
import Loader from './Loader/Loader';
import Comment from './Comment/Comment';
import { RootStateType } from '../../store/reducers/rootReducer';

interface ModalProps {
  id:number,
}

const Modal:React.FC<ModalProps> = ({id}) => {
     
    const dispatch = useDispatch()
    const isLoading = useSelector((state:RootStateType)=>state.main.isLoading)
    const imgDetails = useSelector((state:RootStateType)=>state.main.imgDetail)

    useEffect(()=>{
        dispatch(getImage(id))
    },[dispatch, id])
        return (
                <div className="modal__wrapper">
                    <div className="modal__container">
                        <div className="modal__close">
                            <i className="fas fa-times" onClick={()=>dispatch(closeModal())}></i>
                        </div>

                        {
                            isLoading ?
                            <div className="loader">
                                <Loader />
                            </div>
                            :
                            <div>
                                <div className="image__info">
                                    <div className="image">
                                        <img src={imgDetails?.url} alt=""/>
                                    </div>
                                    <div className="image__comments">
                                        {imgDetails?.comments.map((comment)=>(
                                            <Comment 
                                            key={comment.id}
                                            date={comment.date}
                                            text={comment.text}
                                        />
                                        ))}
                                    </div>
                                </div>
                                <div className="modal__form">
                                    <Form id={id}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
        )
    }

export default Modal


