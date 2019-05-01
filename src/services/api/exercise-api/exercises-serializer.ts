import { IKeyMap } from "../../../interfaces";
import { stripHtmlTagsFromText } from "../../../helpers";

export interface IExercise {
  id: number;
  description: string;
  name: string;
  uuid: string;
  category: number;
  muscles: number[];
  secondaryMuscles: number[];
  equipment: number[];
}

export function deserializeAll(data: any[]): IExercise[] {
  return (data as IKeyMap<any>).map((item: any) => deserialize(item));
}

export function deserialize(data: IKeyMap<any>): IExercise {
  return {
    id: data.id,
    description: data.description ? stripHtmlTagsFromText(data.description) : '',
    name: data.name || '',
    uuid: data.uuid,
    category: data.category,
    muscles: data.muscles || [],
    secondaryMuscles: data.muscles_secondary || [],
    equipment: data.equipment || []
  };
}
