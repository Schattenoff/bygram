import { api } from "../../api";
import { getPhotosFailed, getPhotosStarted, getPhotosSuccess, setPhotosTotal } from "../actionCreators/photos"

export const getPhotos = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const store = getState();
      if(page === 1) {
        dispatch(getPhotosStarted());
      }
      const {data, headers} = await api.photos.getPhotos({
        params: {
          _page: page, 
          _limit: 5
        }
      });

      if(page === 1) {
        dispatch(setPhotosTotal(headers["x-total-count"]))
        dispatch(getPhotosSuccess([...store.photos.photos, ...data]))
      } else {
        dispatch(getPhotosSuccess([...store.photos.photos, ...data]))
      }

    } catch (error) {
      dispatch(getPhotosFailed(error));
    }
  }
}