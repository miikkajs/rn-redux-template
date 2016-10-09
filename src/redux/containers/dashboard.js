import {
    getInstructions,
    getAsyncResult
} from '../actions/dashboard';
import {connect} from 'react-redux';
import scene from '../../scenes/Dashboard';

const mapStateToProps = (state) => {
    return {
        text: state.dashboard.text,
        data: state.dashboard.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInstructions: () => dispatch(getInstructions()),
        getAsyncResult: () => dispatch(getAsyncResult()),
    };
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(scene);

export default Dashboard;