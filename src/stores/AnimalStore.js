import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _animals = [];

class AnimalStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ANIMALS':
          _animals = action.animals;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_ANIMAL':
          var { animal } = action;
          _animals.push(animal);
          this.emit('CHANGE');
          break;
        case 'CREATE_ANIMAL':
          var { animal } = action;

          animal._id = uuid();
          animal.createdAt = Date.now();
          _animals.push(animal);
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _animals;
  }
}

export default new AnimalStore();
