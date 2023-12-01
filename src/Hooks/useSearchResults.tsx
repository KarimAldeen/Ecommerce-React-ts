import { useEffect, useState } from 'react';

const useSearchResults = (data: any[] | undefined, query: string | null) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const filteredResults = data?.filter((item: any) =>
      item?.toLowerCase()?.includes(query?.toLowerCase())
    ) ?? [];

    setResults(filteredResults);
    console.log("results",results);
    console.log("query",query, query?.length);
    
    
    if(results?.length === 0 && query != null && query?.length > 1 ){
      console.log("HEllo");
        
    }
  }, [query]);

  return results;
};

export default useSearchResults;


