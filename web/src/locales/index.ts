import flatten from 'flat';
import label from './label.json';
import button from './button.json';
import menu from './menu.json';
import search from './search.json';
import media from './media.json';
import page from './page.json';
import table from './table.json';
import users from './users.json';
import banners from './banner.json';
import text from './text.json';

export default {
  label: flatten<Record<string, any>, typeof label>(label, {
    delimiter: '_',
  }),
  button: flatten<Record<string, any>, typeof label>(button, {
    delimiter: '_',
  }),
  menu: flatten<Record<string, any>, typeof label>(menu, {
    delimiter: '_',
  }),
  search: flatten<Record<string, any>, typeof label>(search, {
    delimiter: '_',
  }),
  media: flatten<Record<string, any>, typeof label>(media, {
    delimiter: '_',
  }),
  page: flatten<Record<string, any>, typeof label>(page, {
    delimiter: '_',
  }),
  table: flatten<Record<string, any>, typeof label>(table, {
    delimiter: '_',
  }),
  users: flatten<Record<string, any>, typeof label>(users, {
    delimiter: '_',
  }),
  banners: flatten<Record<string, any>, typeof label>(banners, {
    delimiter: '_',
  }),
  text: flatten<Record<string, any>, typeof label>(text, {
    delimiter: '_',
  }),
};
