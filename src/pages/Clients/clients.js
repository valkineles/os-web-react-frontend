import './clients.css';

import React from 'react';

import { createTabulator } from '../../assets/js/tabulator';

async function deleteClient(e, cell) {
  return true;
}
function editClientOnClick(event, cell) {
  return true;
}
function handleTabulator() {
  const table = createTabulator('/clients', deleteClient, editClientOnClick, [
    { title: 'ID', field: '_id', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'Nome do Cliente', field: 'nome', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'email', field: 'email', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'Apelido', field: 'apelido', headerFilter: 'input', headerFilterLiveFilter: false },
    { title: 'Telefone', field: 'telefone' },
    { title: 'Data Cadastro', field: 'createdAt' },
    { title: 'Última Atualização', field: 'updatedAt' }
  ]);
  return table;
}
export default function Client() {
  return (
    <div id="listagem">
      <div id="datatable"></div>

      <div className="fixed-action-btn">
        <button onClick={handleTabulator}>tabulator</button>
      </div>
    </div>
  );
}
