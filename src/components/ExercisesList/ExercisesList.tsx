/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core'
import { List } from 'antd';
import { IExercise } from '../../services/api/exercise-api';
import { IKeyMap } from '../../interfaces';
import { IExerciseCategory } from '../../services/api/exercise-category-api';

const listContainer = css`
  overflow-y: auto;
  flex: 1;
`;

const listHeader = css`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  display: flex;
`;

const listItem = css`
  display: flex;
  cursor: pointer;
`;

const listColumnName = css`
  width: 30%;
  min-width: calc(250px);
  max-width: 30%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const listColumnDescription = css`
  width: 70%;
  max-width: calc(100% - 250px);
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

interface IProps {
  exercises: IExercise[];
  categories: IKeyMap<IExerciseCategory>;
  onItemClick: (id: number) => void;
}

function getCategoryName(categories: IKeyMap<IExerciseCategory>, categoryId: number) {
  if (!categoryId || !categories[categoryId]) {
    return '-'
  }
  return categories[categoryId].name;
}

export const ExercisesList: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <div css={listHeader}>
        <div css={listColumnName}>Name</div>
        <div css={listColumnDescription}>Category</div>
      </div>
      <div css={listContainer}>
        <List
          itemLayout="horizontal"
          dataSource={props.exercises}
          renderItem={(item: IExercise) => (
            <List.Item css={listItem} key={item.id} onClick={() => props.onItemClick(item.id)}>
              <div css={listColumnName}>{item.name}</div>
              <div css={listColumnDescription}>{getCategoryName(props.categories, item.category)}</div>
            </List.Item>
          )}
        />
      </div>
    </React.Fragment>
  );
}
