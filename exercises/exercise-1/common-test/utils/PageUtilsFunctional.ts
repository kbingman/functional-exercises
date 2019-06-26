import { Page } from 'puppeteer';

export const PageUtilsFunc = (page: Page) => {
  const _isElementVisible = async (selector: string): Promise<boolean> => {
    const element = await page.waitForSelector(selector, { visible: true, timeout: 0 });

    return element ? true : false;
  };

  const _getText = async (selector: string): Promise<string | null> => {
    return page.$eval(selector, (el: Element) => el.textContent);
  };

  return {
    isElementVisible: (selector: string) => _isElementVisible(selector),
    getText: (selector: string) => _getText(selector)
  };
};
