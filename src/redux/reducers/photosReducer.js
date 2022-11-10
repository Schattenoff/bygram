import { GET_PHOTOS, SET_PHOTOS } from "../actionCreators/photos"

const initialState = {
  photos: [],
  isPhotosLoading: false,
  totalPhotos: 0,
}

export const photosReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PHOTOS.STARTED: 
      return {
        ...state, 
        isPhotosLoading: true,
      };
    case GET_PHOTOS.FAILED: 
      return {
        ...state, 
        isPhotosLoading: false,
      };
    case GET_PHOTOS.SUCCESS: 
      return {
        ...state, 
      photos: action.payload,
      isPhotosLoading: false,
      };
    case SET_PHOTOS.TOTAL: 
      return {
        ...state, 
        totalPhotos: action.payload
      };
    default: {
      return {
        ...state
      }
    }
  }
}