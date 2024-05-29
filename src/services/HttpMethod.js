/* eslint-disable import/no-anonymous-default-export */
import Request from "./Request";

async function _post(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.post(url, params);
}

async function _get(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.get(url, params);
}

async function _put(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.put(url, params);
}

async function _delete(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.delete(url, params);
}

export default { _post, _get, _put, _delete };