// import Table from './components/Table/Table';

// export { Table };

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table/Table';

const columns = [
  { headerFor: 'name', title: 'Név' },
  { headerFor: 'amount', title: 'Szám' },
];

const data = [
  { id: '1', name: 'Béla', amount: '1' },
  { id: '2', name: 'Géza', amount: '2' },
  { id: '3', name: 'Béla', amount: '3' },
  { id: '4', name: 'Géza', amount: '4' },
  { id: '5', name: 'Béla', amount: '5' },
  { id: '6', name: 'Géza', amount: '6' },
  { id: '7', name: 'Béla', amount: '7' },
  { id: '8', name: 'Géza', amount: '8' },
  { id: '9', name: 'Béla', amount: '9' },
  { id: '10', name: 'Géza', amount: '10' },
  { id: '11', name: 'Béla', amount: '11' },
  { id: '12', name: 'Géza', amount: '12' },
];

ReactDOM.render(
  <React.StrictMode>
    <Table
      width="500px"
      height="400px"
      columns={columns}
      data={data}
      paginator={true}
      totalCount={data.length}
      perPageCount={5}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
