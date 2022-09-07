import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TaskService(httpClient);
  });

  it('returns tasks', (done: DoneFn) => {
    const expectedItems = [{ name: 'Hello there!', done: false }];

    httpClient.get.withArgs('/api/v1/tasks').and.returnValue(of(expectedItems));

    service.getTasks().subscribe({
      next: (tasks) => {
        expect(tasks).toEqual(expectedItems);
        done();
      },
      error: done.fail,
    });
    expect(httpClient.get).toHaveBeenCalled();
  });
});
