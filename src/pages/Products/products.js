import './products.css';

import React from 'react';

import { createTabulator } from '../../assets/js/tabulator';

async function deleteProduct(e, cell) {
  return true;
}
function editProductOnClick(event, cell) {
  return true;
}
function handleTabulator() {
  const table = createTabulator('/products', deleteProduct, editProductOnClick, [
    { title: 'ID', field: '_id', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'Nome Produto', field: 'descricao', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'Preço', field: 'preco' }
  ]);
  return table;
}
export default function Product() {
  return (
    <div id="listagem">
      <div id="datatable"></div>

      <div className="fixed-action-btn">
        <button onClick={handleTabulator}>tabulator</button>
      </div>
    </div>
  );
}
