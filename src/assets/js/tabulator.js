//import 'react-tabulator/lib/styles.css';
import 'tabulator-tables/dist/css/semantic-ui/tabulator_semantic-ui.min.css';

import { authFirebase } from './auth';

/* tslint:disable-next-line */
// eslint-disable-next-line
const Tabulator = require('tabulator-tables');

export function createTabulator(endpoint, deleteFunc, editFunc, columns, dest = '#datatable') {
  function deleteIcon(cell, formatterParams, onRendered) {
    return '<i class="material-icons red-text text-darken-2">delete</i>';
  }

  function editIcon(cell, formatterParams, onRendered) {
    return '<i class="material-icons blue-text text-darken-3">edit</i>';
  }

  const table = new Tabulator(dest, {
    height: '75vh',
    layout: 'fitData',
    ajaxFiltering: true,
    pagination: /*endpoint ? 'remote' :*/ 'local',
    paginationSizeSelector: [5, 10, 25, 50, 100, 200],
    paginationSize: 25,
    ajaxURL: endpoint ? process.env.REACT_APP_API_URL_BASE + endpoint : '',
    ajaxConfig: {
      headers: {
        authorization: `bearer ${authFirebase.token}`
      }
    },
    paginationDataSent: {
      size: 'limit'
    },
    paginationDataReceived: {
      last_page: 'totalPages',
      data: 'docs'
    },
    columns: [
      { formatter: 'rownum', headerSort: false },
      {
        formatter: deleteIcon,
        headerSort: false,
        cellClick: deleteFunc
      },
      {
        formatter: editIcon,
        headerSort: false,
        cellClick: editFunc
      },
      ...columns
    ],

    ajaxResponse: function(url, params, resp) {
      return resp.docs;
    },
    locale: true,
    langs: {
      'pt-br': {
        ajax: {
          loading: 'Aguarde..'
        },
        pagination: {
          page_size: 'Tamanho da Página',
          first: 'Primeira',
          first_title: 'Primeira Página',
          last: 'Última',
          last_title: 'Última Página',
          prev: 'Anterior',
          prev_title: 'Página Anterior',
          next: 'Próxima',
          next_title: 'Próxima Página'
        }
      }
    }
  });

  return table;
}
