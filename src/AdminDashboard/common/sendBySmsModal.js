import React, { useState, useEffect } from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import API from '../../utils/apiCalling';
import { config } from '../../utils/apiUrl';
import { toast } from 'react-toastify';
import { setLocalDataAsObject, getLocalDataAsObject } from '../../utils/CoustomStorage';

import Header from '../../Components/header'
import Footer from '../../Components/dashboard/footer'
import { Redirect, Link } from "react-router-dom";
import Moment from 'react-moment';
import Loader2 from '../../Components/common/loader2/loader'

const SendBySmsModal = (props) => {
    const api = new API()
    const {  } = props

    const [loader2, setLoader2] = useState(true)

    

    useEffect(() => {

    },[]);

 
  
    return (
        <div>
            <div className="modal fade" id="sendBySmsModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content" style={{ minHeight: "450px" }}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Survey Link Send by SMS</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default SendBySmsModal;