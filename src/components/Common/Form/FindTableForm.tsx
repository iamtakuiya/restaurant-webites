import React from 'react';
import DynamicForm from './DynamicForm';
import type { FieldConfig } from '../../../types/formType';

interface FindTableFormData {
  people: string;
  date: string;
  time: string;
  [key: string]: string;
};

const findTableFields: FieldConfig[] = [
  { label: 'Number of people', name: 'people', type: 'number', placeholder: 'Number of people' },
  { label: 'Date', name: 'date', type: 'date', placeholder: 'Date' },
  { label: 'Time', name: 'date', type: 'time', placeholder: 'Time' },
];

const FindTableForm: React.FC = () => {
  const handleFindTableSubmit = (data: FindTableFormData) => {
    console.log('Find table data:', data);
  };

  return (
    <DynamicForm<FindTableFormData> 
      fields={findTableFields}
      onSubmit={handleFindTableSubmit}
      buttonText='Find a table'
    />
  );
};

export default FindTableForm;