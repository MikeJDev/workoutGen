import { ADD_TODO } from "../action-types/index";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}
