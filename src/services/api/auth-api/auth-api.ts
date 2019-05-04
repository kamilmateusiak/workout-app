
// export const test = 'test';
import ApiClient, { IRequestResult } from '../api-client';

export interface ILoginRequestBody {
  username: string;
  password: string;
}

export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}

export interface IUserData {
  username: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  role?: UserRole;
}

export interface ILoginResponse {
  result: {
    token: string;
    user: IUserData;
  }
}


export default class ExercisesApi extends ApiClient {
  static $instance: ExercisesApi;

  static get instance(): ExercisesApi {
    if (!ExercisesApi.$instance) {
      ExercisesApi.$instance = new ExercisesApi(`${process.env.REACT_APP_WORKOUT_APP_API_URI}/users` as string);
    }

    return ExercisesApi.$instance;
  }
  
  login(data: ILoginRequestBody): Promise<IRequestResult<ILoginResponse>> {
    return this.post('/login', JSON.stringify(data));
  }
}
