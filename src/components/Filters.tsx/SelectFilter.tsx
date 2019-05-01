/** @jsx jsx */
import * as React from 'react';
import memoizeOne from 'memoize-one';
import { jsx, css } from '@emotion/core'
import { Select } from 'antd';

const filter = css`
  padding: 5px 10px;
  box-sizing: border-box;
`;

const select = css`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
`;

interface IOption {
  id: string | number;
  label: string;
}

interface IProps {
  title: string;
  placeholder?: string;
  options: IOption[];
  value: string | undefined;
  onChange: (value: string) => void;
}

function buildFilteredOptions(options: IOption[], searchPhrase: string): IOption[] {
  if (!searchPhrase) {
    return options;
  }
  
  return options.filter(option => option.label.toLowerCase().includes(searchPhrase.toLowerCase()))
}

const getFilteredOptions = memoizeOne((options: IOption[], searchPhrase: string) => buildFilteredOptions(options, searchPhrase));

export const SelectFilter: React.FC<IProps> = props => {
  const [searchPhrase, handleSearchPhraseChange] = React.useState('');

  const filterOptions = getFilteredOptions(props.options, searchPhrase);

  return (
    <div css={filter}>
      <h5>{props.title}</h5>
      <Select
        css={select}
        mode="default"
        allowClear
        showSearch
        onChange={props.onChange}
        filterOption={false}
        onSearch={handleSearchPhraseChange}
        tokenSeparators={[',']}
        value={props.value || undefined}
        placeholder={props.placeholder || 'Select'}
      >
        {filterOptions.map(option => <Select.Option key={option.id}>{option.label}</Select.Option>)}
      </Select>
    </div>
  );
}
