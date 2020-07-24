import { ExDomain } from './domain';
import { Ex } from './types';

export const someEvent = ExDomain.effect<Ex, Ex, Error>();

export const anotherEvent = ExDomain.effect<Ex, Ex, Error>();
