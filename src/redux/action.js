import axios from 'axios';
import { ADD_USER, DELETE_USER, GET_USER, GET_USERS, UPDATE_USER } from './actionTypes';

export const getUsers = () => async (dispatch) => {
	try {
		const res = await axios.get('/get');
		console.log(res);
		dispatch({
			type    : GET_USERS,
			payload : res.data
		});
	} catch (error) {
		alert('get error');
	}
};

export const getUser = () => async (dispatch) => {
	try {
		const { data } = await axios.get('/get/:id');
		dispatch({
			type    : GET_USER,
			payload : data
		});
	} catch (error) {
		alert('get one error');
	}
};

export const addUser = (newUser) => async (dispatch) => {
	try {
		const { data } = await axios.post('/', newUser);
		dispatch({
			type    : ADD_USER,
			payload : data
		});
	} catch (error) {
		alert('post error');
	}
};

export const delUser = (_id) => async (dispatch) => {
	try {
		await axios.delete(`/${_id}`);
		dispatch({
			type    : DELETE_USER,
			payload : _id
		});
	} catch (error) {
		alert('Delete Error');
	}
};

export const editUser = (updUser) => async (dispatch) => {
	try {
		const { data } = await axios.patch(`/${updUser._id}`, updUser);
		dispatch({
			type    : UPDATE_USER,
			payload : data
		});
	} catch (error) {
		alert('Update error');
	}
};
