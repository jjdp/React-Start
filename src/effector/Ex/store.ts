import { ExDomain } from './domain';
import { someEvent, anotherEvent } from './events';
import { Ex } from './types';

const initialState: Ex = {};

export const ExStore = ExDomain.store<Ex>(initialState)
  .on(someEvent.done, (state, { result }) => state)
  .on(anotherEvent.done, (state, { result }) => state);
