import axios from "axios";
import { imageDetailType } from "../reducers/main";
import { RENDER_PHOTO, SEND__COMMENT, SET_DETAIL_IMAGE, SET_IMAGES, CLOSE_MODAL} from "./actionTypes";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootStateType } from "../reducers/rootReducer";

export type mainTypes = openPhotoType | sendCommentType |setImagesType | closeModalType | setImageDetailType

 interface openPhotoType  {
    type:typeof RENDER_PHOTO
    payload:number
}

 interface sendCommentType {
    type: typeof SEND__COMMENT
}
 interface setImagesType {
    type: typeof SET_IMAGES
    payload:Array<imageDetailType>
}

interface closeModalType {
    type: typeof CLOSE_MODAL
}

interface setImageDetailType {
    type: typeof SET_DETAIL_IMAGE
    payload:imageDetailType
}



 export const openPhoto = (id:number):openPhotoType =>({
    type:RENDER_PHOTO,
    payload:id
})

export const sendComment = ():sendCommentType =>({
    type:SEND__COMMENT
})

export const setImages = (images:Array<imageDetailType>):setImagesType =>({

    type:SET_IMAGES, 
    payload:images
})

export const closeModal =():closeModalType=>({
    type:CLOSE_MODAL
})

export const setImageDetail = (image:imageDetailType):setImageDetailType=>({
    type:SET_DETAIL_IMAGE,
    payload:image
})




export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>




export const getImages = ():AppThunk => async(dispatch)=>{
    const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
    dispatch(setImages(response.data));
}

export const getImage = (id:number):AppThunk => async(dispatch)=>{
     const response = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`); 
    dispatch(setImageDetail(response.data))
}

export const sendHandler = async(id:number, name:string, comment:string) => {
    const data = {
        comment:comment,
        name: name,
        date:Date.now()
    }
    await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, data);
}