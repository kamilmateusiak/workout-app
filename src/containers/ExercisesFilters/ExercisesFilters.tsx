/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { SelectFilter } from '../../components/Filters.tsx';
import {
  getExerciseCategoriesIds,
  getExerciseCategory,
  IWithExerciseCategoriesState
} from '../../store/entities/exercise-categories';
import { connect, MapDispatchToProps } from 'react-redux';
import * as exercisesViewActionsCreators from '../../store/views/exercises/actionsCreators';
import { IExerciseCategory } from '../../services/api/exercise-category-api';
import { IWithViewExercisesState, getFilters, IExerciesFilters } from '../../store/views/exercises';

const filtersContainer = css`
  display: flex;
`;

function mapCategoriesToFilterOptions(categories: IExerciseCategory[]) {
  return categories.map(category => ({
    id: category.id,
    label: category.name
  }));
}

interface IStateProps {
  categories: IExerciseCategory[];
  filters: IExerciesFilters;
}

interface IDispatchProps {
  onFilterUpdate: (filters: Partial<IExerciesFilters>) => void;
}

export const Filters: React.FC<IStateProps & IDispatchProps> = props => {
  return (
    <div css={filtersContainer}>
      <SelectFilter
        title="Category"
        options={mapCategoriesToFilterOptions(props.categories)}
        onChange={value => props.onFilterUpdate({ category: value })}
        value={props.filters.category || undefined}
      />
    </div>
  );
};

const mapStateToProps = (state: IWithExerciseCategoriesState & IWithViewExercisesState): IStateProps => ({
  categories: getExerciseCategoriesIds(state).map(id => getExerciseCategory(state, String(id))),
  filters: getFilters(state)
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = dispatch => ({
  onFilterUpdate: filters => {
    dispatch(exercisesViewActionsCreators.updateFilters(filters));
  }
});

export const ExercisesFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
