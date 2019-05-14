import React from 'react';


const Actions = {

onclick: () => {
   return dispatch => {
        dispatch({
            type:"FETCH_POST",
            data:"g4ce"
        })
   }
}

}

export default Actions;