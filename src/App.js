import React, { useEffect, useState } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {
  Table, Tag, Input, Space, Button, Spin, Modal, Typography,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import createPokeStoreContext, { createPokeStore } from './mobx/pokeStore';
import getColor from './color';
import Pokemon from './components/Pokemon';

const App = observer(() => {
  const pokeStore = useLocalObservable(createPokeStore);
  const { pokemons } = pokeStore;
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [search, setSearch] = useState({
    searchText: '',
    searchedColumn: '',
  });
  useEffect(() => {
    pokeStore.fetchPokemons();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearch({ searchText: '' });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    render: (text) => (search.searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[search.searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
      render: (record) => <h4>{record.toUpperCase()}</h4>,
    },
    {
      title: 'Image',
      key: 'img',
      render: (record) => <img src={`${record.sprites.front_default}`} alt="poke" />,
    },
    {
      title: 'Type',
      key: 'type',
      render: (record) => (
        <span>
          {record.types.map((type) => {
            const color = getColor(type.type.name);
            return (
              <Tag
                color={color}
                key={uuidv4()}
              >
                {type.type.name.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      filters: [
        {
          text: 'Poison',
          value: 'poison',
        },
        {
          text: 'Fire',
          value: 'fire',
        },
        {
          text: 'Water',
          value: 'water',
        },
        {
          text: 'Electric',
          value: 'electric',
        },
        {
          text: 'Fighting',
          value: 'Fighting',
        },
        {
          text: 'Ground',
          value: 'ground',
        },
        {
          text: 'Psychic',
          value: 'psychic',
        },
        {
          text: 'Dark',
          value: 'dark',
        },
        {
          text: 'Rock',
          value: 'rock',
        },
        {
          text: 'Steel',
          value: 'steel',
        },
        {
          text: 'Grass',
          value: 'grass',
        },
        {
          text: 'Ice',
          value: 'ice',
        },
        {
          text: 'Flying',
          value: 'flying',
        },
        {
          text: 'Fairy',
          value: 'fairy',
        },
      ],
      onFilter: (value, record) => {
        if (record.types.filter((e) => e.type.name.includes(value)).length > 0) {
          return true;
        }
        return false;
      },
    },
    {
      title: 'Weight',
      key: 'weight',
      render: (record) => <h5>{record.weight}</h5>,
    },
    {
      title: 'Experience',
      key: 'exp',
      render: (record) => <h5>{record.base_experience}</h5>,
    },
  ];

  return (
    <createPokeStoreContext.Provider value={pokeStore}>
      <Title className="text-center">Pokedex</Title>
      <Modal
        title="Pokemon Detail"
        centered
        onCancel={() => {
          setVisible(false);
        }}
        visible={visible}
        footer={false}
        width={1000}
      >
        <Pokemon data={modalData} />
      </Modal>
      {pokemons.length === 0 ? (<Spin style={{ paddingLeft: '50%' }} />) : (
        <Table
          hideDefaultSelections
          className="border m-4 p-3"
          onRow={(record) => ({
            onClick: () => {
              setModalData(record);
              setVisible(true);
            },
          })}
          columns={columns}
          dataSource={pokemons}
          pagination={{ defaultPageSize: 4 }}
        />
      )}
    </createPokeStoreContext.Provider>
  );
});

export default App;
