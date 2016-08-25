import API from '../API'

const AnimalActions = {
  getAllAnimals: API.getAllAnimals,
  createAnimal(todo) {
    API.createAnimal(todo);
  }
}

export default AnimalActions
