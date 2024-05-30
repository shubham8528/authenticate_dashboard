import HttpMethod from "./HttpMethod";

class HttpApis {
  async loginApi(params) {
    console.log("paramsparams");
    return await HttpMethod._post("api/login", params);
  }
  async SignInApi(params) {
    return await HttpMethod._post("api/register", params);
  }
}
export default new HttpApis();
