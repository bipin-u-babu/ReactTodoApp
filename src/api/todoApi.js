import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/todos/";

export function getTodos() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourseBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found: " + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveTodo(todo) {
  return fetch(baseUrl + (todo.id || ""), {
    method: todo.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...todo // ,
      // Parse authorId to a number (in case it was sent as a string).
     // authorId: parseInt(course.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTodo(todoId) {
  return fetch(baseUrl + todoId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
