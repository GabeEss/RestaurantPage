import './style.css';
import createHeader from './createHeader';
import createFooter from './createFooter';
import { createHomePage, createMenuPage, createContactsPage } from './createMain';

const content = document.getElementById('content');

const header = createHeader();
content.appendChild(header);

const home = createHomePage();
content.appendChild(home);

const footer = createFooter();
content.appendChild(footer);