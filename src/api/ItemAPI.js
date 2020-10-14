import request from "./Fetch";

export function getAllItems(itemCategory) {
  return request("/items", { category: itemCategory });
}
