import React, { Component } from "react";
// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CountState, increment, decrement } from "../../redux/count/count.redux";
import { ReducerState } from "../../redux/reducer";
import { Button } from "antd";
import "./index.css";


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
				<div className="dash-div">
					<p>我是首页</p>
				</div>

				<Button type="primary" danger>Primary</Button>
				<Button danger>Default</Button>
				<Button type="dashed" danger>Dashed</Button>
				<Button type="text" danger>Text</Button>
				<Button type="link" danger>Link</Button>
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
