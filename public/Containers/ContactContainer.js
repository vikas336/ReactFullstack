import {connect} from 'react-redux';
import Actions from '../Actions/ContactAction';
import Contact from '../Components/Contact';

const mapStatesToProps = (state) => ({
 
     name : state.ContactReducer.name,

})


const mapDispatchToProps = (dispatch) => {
    return {
        onclick: () => {
            dispatch(Actions.onclick());
    },
}
}

export default connect(mapStatesToProps,mapDispatchToProps)(Contact);