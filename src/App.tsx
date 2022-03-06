import React from 'react';
import './App.css';
import { CustomerList } from './components/CustomerList';
import { Box, grommet, Grommet, Header } from 'grommet';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { CustomerDetail } from './components/CustomerDetail';

function App() {
  return (
    <Grommet full theme={grommet} themeMode="dark">
      <Box pad="large" background="accent-4">
        <Header>
          Jakub Kucecka - customer app
        </Header>
      </Box>
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/:id" element={<ShowDetail />} />
        </Routes>
      </Router>
    </Grommet >
  );
}

function ShowDetail() {
  let { id } = useParams();
  return (
    <CustomerDetail customerId={Number(id)} />
  );
}

export default App;
