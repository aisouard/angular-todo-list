import { selectTasks, selectIncompleteTasks } from './task.selectors';
import { AppState } from '../app.state';

describe('Task Selectors', () => {
  const initialState: AppState = {
    tasks: [
      {
        name: 'First task',
        done: false,
      },
      {
        name: 'Done task',
        done: true,
      },
    ],
  };

  it('selects every tasks', () => {
    const result = selectTasks.projector(initialState.tasks);
    expect(result.length).toEqual(2);
    expect(result).toEqual([
      {
        name: 'First task',
        done: false,
      },
      {
        name: 'Done task',
        done: true,
      },
    ]);
  });

  it('selects only incomplete tasks', () => {
    const result = selectIncompleteTasks.projector(initialState.tasks);
    expect(result.length).toEqual(1);
    expect(result).toEqual([
      {
        name: 'First task',
        done: false,
      },
    ]);
  });
});
