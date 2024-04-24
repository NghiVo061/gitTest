import React, { useState, useEffect } from 'react';
import { Space, Button, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

const Demo2103 = () => {
  const [searchData, setSearchData] = useState<DataType[]>([]);
  const [originalData, setOriginalData] = useState<DataType[]>([]);
  const [address, setAddress] = useState('');

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    isEditable: boolean;
  }

  useEffect(() => {
    setOriginalData(dataSource);
    setSearchData(dataSource); // Set initial searchData to display all data
  }, []);

  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      isEditable: false,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      isEditable: false,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 53,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      isEditable: false,
    },
  ];

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => {
        return (
          <>
            {!record.isEditable && address !== record.key ? (
              <a onClick={() => setAddress(record.key)}>{record.address}</a>
            ) : (
              <input
                value={record.address}
                onChange={(e) => {
                  const newValue = e.currentTarget.value;
                  const newData = [...searchData];
                  const index = newData.findIndex((item) => item.key === record.key);
                  newData[index].address = newValue;
                  setSearchData(newData);
                }}
                onBlur={() => setAddress('')}
              />
            )}
          </>
        );
      },
    },

    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (key, record, index) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              const newData = searchData.filter((x) => x.key !== record.key);
              setSearchData(newData);
            }}
          >
            Delete
          </Button>
        );
      },
    },

    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div>
      <select
        onChange={(e) => {
          const filteredData = originalData.filter((x) => x.age < Number(e.currentTarget.value));
          setSearchData(filteredData);
        }}
      >
        <option value={40}>Age less than 40</option>
        <option value={50}>Age less than 50</option>
        <option value={60}>Age less than 60</option>
      </select>
      <Table columns={columns} dataSource={searchData} />
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default Demo2103;
