const { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER } = require('./actionTypes');

const init = {
	loading : true,
	users   : []
};
const reducer = (state = init, { type, payload }) => {
	switch (type) {
		case GET_USERS:
			return { ...state, loading: false, users: payload };
		case ADD_USER:
			return { ...state, users: [ ...state.users, payload ] };
		case DELETE_USER:
			return { ...state, users: state.users.filter((el) => el._id !== payload) };
		case UPDATE_USER:
			return { ...state, users: state.users.map((el) => (el._id === payload._id ? payload : el)) };

		default:
			return state;
	}
};

export default reducer;
