import {RENDER_PHOTO, SET_DETAIL_IMAGE, SET_IMAGES,CLOSE_MODAL} from "../actions/actionTypes";
import { mainTypes } from "../actions/main";

export interface commentType {
    text:string,
    date:string,
    id:number
}

export interface imageDetailType {
    comments:Array<commentType>,
    url:string,
    id:number
}

interface StateType {
    isModal:Boolean,
    idModal:number,
    imgDetail: imageDetailType | null,
    isLoading:boolean,
    images:Array<imageDetailType>
}

const initialState:StateType = {
 isModal:false,
 idModal: 0,
 imgDetail:null,
 images:[],
 isLoading:false,
}

export function reducer(state = initialState, action:mainTypes):StateType {
    switch(action.type) {
        case SET_IMAGES:
            return{
                ...state,
                images:action.payload
            }
            case RENDER_PHOTO:
                return{
              ...state,
              isModal:!state.isModal,
              idModal:action.payload,
              isLoading:true
            }
            case SET_DETAIL_IMAGE:
                return{
                    ...state,
                    imgDetail:action.payload,
                    isLoading:false
                }
            case CLOSE_MODAL:
                return {
                    ...state,
                    isModal:false
                }
        default: 
        return state;
    }
}
