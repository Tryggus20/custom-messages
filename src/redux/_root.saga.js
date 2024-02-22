import {takeEvery, put} from "redux-saga/effects"
import axios from "axios"


function* watcherSaga() {
    yield takeEvery("FETCH_GUESTS", fetchAllGuests);
    yield takeEvery("FETCH_HOTELS", fetchAllHotels);
}

function* fetchAllGuests() {
    try{
        const guests = yield axios.get("/guests");
        console.log("get all guests", guests);
        yield put({ type: "SET_GUESTS", payload: guests.data});
    } catch { 
        console.log("error in fetchAllGuests function");
    }
}

function* fetchAllHotels() {
    try{
        const hotels = yield axios.get("/hotels");
        console.log("get all hotels", hotels);
        yield put({ type: "SET_HOTELS", payload: hotels.data});
    } catch { 
        console.log("error in fetchAllHotels function");
    }
}
export default watcherSaga