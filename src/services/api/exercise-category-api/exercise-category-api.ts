
// export const test = 'test';
import ApiClient, { IRequestResult } from '../api-client';

export default class ExerciseCategoriesApi extends ApiClient {
  static $instance: ExerciseCategoriesApi;

  static get instance(): ExerciseCategoriesApi {
    if (!ExerciseCategoriesApi.$instance) {
      ExerciseCategoriesApi.$instance = new ExerciseCategoriesApi('https://wger.de/api/v2/exercisecategory');
    }

    return ExerciseCategoriesApi.$instance;
  }
  
  fetchAll(): Promise<IRequestResult<{results: any[]}>> {
    return this.get('');
  }
}
