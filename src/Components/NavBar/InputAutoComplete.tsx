import React, {  useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { useGetDynamic } from '../../api/Route/Get';
import useSearchResults from '../../Hooks/useSearchResults'; // Assuming you place the hook in a separate file

const App: React.FC = () => {
  const { data } = useGetDynamic("users");
  const names = data?.map((item: any) => item?.name);
  console.log(names);

  const [query, setQuery] = useState<string | null>(null);
  const results = useSearchResults(names, query);
  const handleSearch = (value: string) => {
    setQuery(value || null);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  const options = results.map((name: any) => ({
    value: name,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>
          <a
            href={`https://s.taobao.com/search?q=${query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </span>
      </div>
    ),
  }));

  return (
    <AutoComplete
      className='InputAutoComplete'
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default App;

