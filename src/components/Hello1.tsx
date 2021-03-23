import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CountState, increment, decrement } from "../redux/count/count.redux";
import { ReducerState } from "../redux/reducer";

interface Props {
	name: String;
	increment: () => void;
	decrement: () => void;
}

const Hello1: React.FC<Props & CountState> = React.memo(props => {
	const { name, increment, decrement } = props;
	return (
		<div>
			<div>Hello1函数式组件：传入{name}</div>
			<p>{props.count}</p>
			<button onClick={increment}>增加</button>
			<button onClick={decrement}>减少</button>
		</div>
	);
});

const mapStateToProps = (state: ReducerState) => state.count;

// 将对应action插入到组件的props中
const mapDispatchToProps = (dispatch: Dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello1);
