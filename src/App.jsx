import React, { useState, useEffect, useCallback } from 'react';
import { Nav } from './cmps/Nav';
import { getData } from './services/stockService';
import { StockChart } from './cmps/StockChart';
import { Tabs } from './tabs/Tabs';
import { getTabDetails } from './tabs/Tabs.config';

function App() {

  const [data, setData] = useState(null)
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)


  const handleDataResponse = useCallback((res) => {
    if (res && res.status === 200) {
      setData(res.data)
    }
  }, [])

  const stockData = useCallback((type, value) => {
    getData(type, value)
      .then(handleDataResponse)
      .catch(alert)
  }, [handleDataResponse]);

  useEffect(() => {
    const tab = getTabDetails(selectedTabIndex)
    const { type, value } = tab
    stockData(type, value)
  }, [selectedTabIndex, stockData])


  const handleTabChange = (tab) => {
    setSelectedTabIndex(tab)
  }


  return (
    <div className="App">
      <Nav />
      <Tabs value={selectedTabIndex}
        onChange={handleTabChange}
      />
      <StockChart data={data} />
    </div>
  );
}

export default App;
