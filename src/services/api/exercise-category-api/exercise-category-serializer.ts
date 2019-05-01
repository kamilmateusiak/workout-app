import { IKeyMap } from "../../../interfaces";

export interface IExerciseCategory {
  id: number;
  name: string;
}

export function deserializeAll(data: any[]): IExerciseCategory[] {
  return (data as IKeyMap<any>).map((item: any) => deserialize(item));
}

export function deserialize(data: IKeyMap<any>): IExerciseCategory {
  return {
    id: data.id,
    name: data.name || ''
  };
}
