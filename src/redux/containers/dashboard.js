import {
    getInstructions,
    getAsyncResult,
    setActiveButtonGroupButton
} from '../actions/dashboard';
import {connect} from 'react-redux';
import scene from '../../scenes/Dashboard';

const mapStateToProps = (state) => {
    return {
        text: state.dashboard.text,
        data: state.dashboard.data,
        selectedButtonGroupButton: state.dashboard.selectedButtonGroupButton
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInstructions: () => dispatch(getInstructions()),
        getAsyncResult: () => dispatch(getAsyncResult()),
        setActiveButtonGroupButton: (value) => dispatch(setActiveButtonGroupButton(value))
    };
};

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(scene);

export default Dashboard;