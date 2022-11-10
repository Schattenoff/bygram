export const GET_PHOTOS = {
  SUCCESS: 'GET_PHOTOS_SUCCESS',
  FAILED: 'GET_PHOTOS_FAILED',
  STARTED: 'GET_PHOTOS_STARTED',
}

export const SET_PHOTOS = {
  TOTAL: 'SET_PHOTOS_TOTAL',
}

export const getPhotosSuccess = (photos) => ({
  type: GET_PHOTOS.SUCCESS,
  payload: photos,
});

export const getPhotosFailed = (error) => ({
  type: GET_PHOTOS.FAILED,
  payload: error,
});

export const getPhotosStarted = () => ({
  type: GET_PHOTOS.STARTED,
});

export const setPhotosTotal = (total) => ({
  type: SET_PHOTOS.TOTAL,
  payload: total
});