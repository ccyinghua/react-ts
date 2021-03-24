import React, { Component } from "react";
// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CountState, increment, decrement } from "../../redux/count/count.redux";
import { ReducerState } from "../../redux/reducer";

interface Props {
	name?: String;
	increment: () => void;
	decrement: () => void;
}

class Dashboard extends Component<Props & CountState> {
	render() {
		const { name, increment, decrement } = this.props;
		return (
			<div>
				<div>我是首页</div>
				{/* <p>{this.props.count}</p>
				<button onClick={increment}>增加</button>
				<button onClick={decrement}>减少</button> */}
			</div>
		);
	}
}

const mapStateToProps = (state: ReducerState) => state.count;

// 将对应action插入到组件的props中
// const mapDispatchToProps = (dispatch: Dispatch) => ({
// 	increment: () => dispatch(increment()),
// 	decrement: () => dispatch(decrement())
// });

export default connect(mapStateToProps, { increment, decrement })(Dashboard);
