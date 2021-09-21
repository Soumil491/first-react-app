import React from 'react';
import logo from './logo.svg';

//higher order component
import { connect } from 'react-redux';
//import actions
import { firstAction } from './actions/actionOne';
import { secondAction } from './actions/actionTwo';

import './rotatecss.css';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(firstAction),
    stopAction: () => dispatch(secondAction)
})


class RotateFunction extends React.Component {
    render() {
        return (
            <div className="RotateFunction">
                <img src={logo} alt="logo"
                  className={"App-logo" + (this.props.rotate ? "" : "App-logo-paused")}
                  onClick={
                    this.props.rotate ? this.props.stopAction : this.props.startAction
                  }
                />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RotateFunction);