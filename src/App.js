import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './components/AddModal';

function App () {
	return (
		<div className="App">
			<AddModal />
			<UserList />
		</div>
	);
}

export default App;
