import { openBrowser, openPage, openPath } from './utils/base';
import { getText, blurElement } from './utils/element';
import { getSearchResults, searchByTerm } from './utils/search';

const SEARCH_TERM = 'number six battlestar galactica'; // Murder Robot

const main = async () => {
  const browser = await openBrowser();
  const searchPage = await openPage(browser);
  await openPath(searchPage, 'https://www.google.com/');
  await searchByTerm(searchPage, SEARCH_TERM);
  const results = await getSearchResults(searchPage);
  await browser.close();
  console.log(results);
};

main();
