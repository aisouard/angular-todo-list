import * as fromReducer from './task.reducer';
import { create } from './task.actions';

describe('Tasks Reducer', () => {
  describe('unknown action', () => {
    it('returns the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.tasksReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('`create` action', () => {
    it('creates and adds a new and incomplete task', () => {
      const { initialState } = fromReducer;
      const action = create({ name: 'New task here!' });
      const state = fromReducer.tasksReducer(initialState, action);

      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual('New task here!');
      expect(state[0].done).toBeFalse();
      expect(state).not.toBe(initialState);
    });
  });
});
