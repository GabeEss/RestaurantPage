import { createHomePage, createMenuPage, createContactsPage } from './createMain';
import clearMainElement from './clearMainElement'

export default function createHeader() {
    const header = document.createElement('header');
    const home = document.createElement('home');
    home.classList.add('tabs');
    const menu = document.createElement('food-menu');
    menu.classList.add('tabs');
    const contact = document.createElement('contact');
    contact.classList.add('tabs');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.innerText = "Home";
    menuButton.innerText = "Menu";
    contactButton.innerText = "Contact";

    homeButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      clearMainElement();
      const main = createHomePage();
      content.appendChild(main); } );
    menuButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      clearMainElement();
      const main = createMenuPage();
      content.appendChild(main); } );
    contactButton.addEventListener('click', () => {
      const content = document.getElementById('content');
      clearMainElement();
      const main = createContactsPage();
      content.appendChild(main); } );

    home.appendChild(homeButton);
    menu.appendChild(menuButton);
    contact.appendChild(contactButton);

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    return header;
  }