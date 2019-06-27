import { Page } from 'puppeteer';

export const getText = async (page: Page, selector: string): Promise<string | null> => {
  return page.$eval(selector, (el: Element) => el.textContent);
};

export const isElementVisible = async (page: Page, selector: string): Promise<boolean> => {
  const element = await page.waitForSelector(selector, { visible: true, timeout: 0 });

  return element ? true : false;
};

export const  blurElement = async (page: Page, selector: string): Promise<void> => {
  await page.$eval(selector, (element: HTMLElement) => element.blur());
};
