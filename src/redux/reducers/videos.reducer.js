import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

export const homeVideosReducer = (state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory : "all"
}, action) => {
    const { type, payload } = action
    switch (type) {
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: state.activeCategory===payload.category?[...state.videos,...payload.video]:payload.video,
                loading: false,
                nextPageToken:payload.nextPageToken,
                activeCategory:payload.category,
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case HOME_VIDEOS_REQUEST:
            return{
                ...state,
                loading:true,
                error:payload,
            }
        default:
            return state
    }
}