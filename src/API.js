import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllAnimals() {
    axios.get('/api/animals')
      .then(res => res.data)
      .then(ServerActions.receiveAnimals)
      .catch(console.error);
  },
  createAnimal(animal) {
    axios.post('/api/animals', animal)
      .then(res => res.data)
      .then(ServerActions.receiveOneAnimal)
      .catch(console.error);
  }
}

export default API;