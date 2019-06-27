import Puppeteer, { Browser, Page, Response } from 'puppeteer';

// const ERRORS = {
//   PAGE_NULL: '[BasePage] page property is null',
//   BROWSER_NULL: '[BasePage] browser property is null'
// };

export const openPath = async (page: Page, path: string): Promise<Response> =>
  await page.goto(path);

export const openBrowser = async (runHeadless: boolean = false): Promise<Browser> =>
  await Puppeteer.launch({ headless: runHeadless });

export const openPage = async (browser: Browser): Promise<Page> => 
  await browser.newPage();

export const closePage = async (browser: Browser): Promise<void> =>
  await browser.close();
