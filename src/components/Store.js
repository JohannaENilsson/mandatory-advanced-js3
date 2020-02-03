import { BehaviorSubject } from 'rxjs';

export const token$ = new BehaviorSubject(localStorage.getItem('token')); // skapar en ny instans

export function updateToken(token) {
  if (token) {
    localStorage.setItem('token', token);
    console.log(token);
  } else {
    localStorage.removeItem('token');
  }
  token$.next(token);
}
