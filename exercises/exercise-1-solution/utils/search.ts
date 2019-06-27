import { Page } from 'puppeteer';
import { blurElement } from './element';

const SELECTORS = {
  SEARCH_FIELD: '[name="q"]',
  SEARCH_BTN: '[name="btnK"]',
  SEARCH_CONTAINER: '#search',
  SEARCH_RESULT: '#search .g',
  RESULT_TITLE: '.LC20lb',
  RESULT_LINK: '.r a',
};

interface SearchResult {
  title: string;
  url: string;
}

export const searchByTerm = async (page: Page, query: string): Promise<void> => {
  await page.type(SELECTORS.SEARCH_FIELD, query);
  await blurElement(page, SELECTORS.SEARCH_FIELD);
  await page.waitFor(SELECTORS.SEARCH_BTN);
  await page.click(SELECTORS.SEARCH_BTN);
};

export const getSearchResults = async (page: Page): Promise<SearchResult[]> => {
  const { SEARCH_RESULT } = SELECTORS;

  await page.waitFor(2000);

  return await page.$$eval(SEARCH_RESULT, elements => {
    return elements.map(el => {
      const title: HTMLElement = el.querySelector('.LC20lb');
      const link: HTMLAnchorElement = el.querySelector('.r a');

      return {
        title: title.textContent,
        url: link.href
      }
    });
  });
};
