import React, { useState } from 'react';
import { IoMdGrid } from 'react-icons/io';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActiveTable } from '../../app/reducers/Tables.js';

function Side_TableName({db}) {

  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);

  const handleTableClick = (tableName) => {
    console.log("jD",tableName);
    dispatch(addActiveTable(tableName));
  };

  return (
    <div className='flex flex-col gap-2'>
      {tables?.tables.map((table, index) => (
        <div
          key={index}
          className={`flex items-center gap-x-2 ml-4 hover:cursor-pointer transition-all`}
          onClick={() => handleTableClick(table.TABLE_NAME)}
        >
          <IoMdGrid color='#4ADE80' />
          <span
            className={`text-white text-sm ${
              tables.selectedTable === table.TABLE_NAME ? 'bg-gray-500' : 'hover:bg-gray-500'
            } rounded-lg p-0.5`}
          >
            {table.TABLE_NAME}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Side_TableName;
