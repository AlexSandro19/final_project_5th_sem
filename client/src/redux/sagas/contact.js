import { takeLatest, call, put } from "redux-saga/effects";
import { CONTACT_FORM_SENDING } from "../constants/contact";

import { contactFormSuccess } from "../actions/contact";

import { contactEmail } from  "../../services/contact.service";

function* loginFlow(action) {
    
    try {

      const {name, email, subject, message } = action.payload
      const responseMessage = yield call(contactEmail, name, email, subject, message);
  
      yield put(contactFormSuccess(responseMessage));
  
    } catch (error) {
    
    }
}

function* contactFormWatcher() {
    yield takeLatest(CONTACT_FORM_SENDING, loginFlow )
}

export default contactFormWatcher
