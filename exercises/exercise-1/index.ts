import { SearchPage } from './pages/SearchPage';

const main = async () => {
  const searchPage = new SearchPage('https://www.google.com/');
  await searchPage.goToSearchPage();
  await searchPage.search('number six battlestar galactica');
  const results = await searchPage.getSearchResults();
  await searchPage.close();
  console.log(results);
};

main();