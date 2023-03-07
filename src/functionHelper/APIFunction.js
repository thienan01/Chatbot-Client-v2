import $ from "jquery";
import { getCookie } from "./GetSetCookie";
const GET = async (_url) => {
  let res = await $.get({
    url: _url,
    dataType: "json",
    headers: {
      Authorization:
        "Token eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiMTIzNDU2Iiwic2VjcmV0S2V5IjoiNDMyRTBBQTMtNTk4MC00MjlBLUI5RkItQjE4MzE0MzUwREE0IiwiaHR0cFN0YXR1cyI6Ik9LIiwiaWQiOm51bGwsImZ1bGxuYW1lIjoiVXNlcjEiLCJleGNlcHRpb25Db2RlIjpudWxsLCJ1c2VybmFtZSI6InVzZXIxIiwidG9rZW4iOiIxNjY4NzY3MjAxMzA2In19.HTerp0c1EfsjLlK7fuXZCEB7b5XUbHZYwiMnAJu9CYU",
    },
    contentType: "application/json",
  });
  return res;
};

const POST = async (_url, _body) => {
  let res = await $.ajax({
    type: "POST",
    url: _url,
    data: _body,
    dataType: "json",
    headers: {
      Authorization:
        "Token eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiMTIzNDU2Iiwic2VjcmV0S2V5IjoiNDMyRTBBQTMtNTk4MC00MjlBLUI5RkItQjE4MzE0MzUwREE0IiwiaHR0cFN0YXR1cyI6Ik9LIiwiaWQiOm51bGwsImZ1bGxuYW1lIjoiVXNlcjEiLCJleGNlcHRpb25Db2RlIjpudWxsLCJ1c2VybmFtZSI6InVzZXIxIiwidG9rZW4iOiIxNjY4NzY3MjAxMzA2In19.HTerp0c1EfsjLlK7fuXZCEB7b5XUbHZYwiMnAJu9CYU",
    },
    contentType: "application/json; charset=utf-8",
  });
  return res;
};

const DELETE = async (_url, _body) => {
  let res = await $.ajax({
    type: "DELETE",
    url: _url,
    data: _body,
    dataType: "json",
    headers: {
      Authorization: "Token " + getCookie("token"),
    },
    contentType: "application/json; charset=utf-8",
  });
  return res;
};

export { GET, POST, DELETE };
