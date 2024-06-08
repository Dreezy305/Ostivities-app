import { AxiosResponse } from "axios";
import { HttpMethod } from "./enums";
import { instance } from "./instance";
import { ILogin, IUser } from "./interface";

export class API_SERVICE {
  static async _registerUser(data: IUser) {
    const { confirmPassword, remember, ...rest } = data;
    return await instance({
      url: `/auth/register`,
      method: HttpMethod.POST,
      data: { ...rest },
    });
  }

  static async _loginUser(data: ILogin): Promise<AxiosResponse> {
    return await instance({
      url: `/auth/login`,
      method: HttpMethod.POST,
      data,
    });
  }
}
