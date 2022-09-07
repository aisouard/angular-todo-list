import { createAction, props } from '@ngrx/store';

export const create = createAction('[Task] Create', props<{ name: string }>());
