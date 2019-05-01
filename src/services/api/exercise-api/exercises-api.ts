
// export const test = 'test';
import ApiClient, { IRequestResult } from '../api-client';
import { SortOrder } from '../../../interfaces';

export interface IFetchAllExercisesParams {
  page?: number;
  limit?: number;
}


export default class ExercisesApi extends ApiClient {
  static $instance: ExercisesApi;

  static get instance(): ExercisesApi {
    if (!ExercisesApi.$instance) {
      ExercisesApi.$instance = new ExercisesApi('https://wger.de/api/v2/exercise');
    }

    return ExercisesApi.$instance;
  }
  
  fetchAll(params: IFetchAllExercisesParams): Promise<IRequestResult<{results: any[]}>> {
    return this.get('', { ...params, status: 2, language: 2 });
  }
}
