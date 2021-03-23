import { DECREMENT, DECREMENT_TYPE, INCREMENT, INCREMENT_TYPE } from "./count";

export interface CountState {
	count: number;
}

export interface CountAction {
	type: INCREMENT_TYPE | DECREMENT_TYPE;
}

const initState: CountState = {
	count: 0
};

// 这就是reducer处理函数，参数是state和新的action
export function count(state = initState, action: CountAction): CountState {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
}

// 增加 state 次数的方法
export const increment = (): CountAction => ({
	type: INCREMENT
});

// 减少 state 次数的方法
export const decrement = (): CountAction => ({
	type: DECREMENT
});
