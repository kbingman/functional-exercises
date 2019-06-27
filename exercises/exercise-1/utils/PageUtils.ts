import { Page } from 'puppeteer';

export class PageUtils {
  public static async getText(page: Page, selector: string): Promise<string | null> {
    return page.$eval(selector, (el: Element) => el.textContent);
  }

  public static async isElementVisible(page: Page, selector: string): Promise<boolean> {
    const element = await page.waitForSelector(selector, { visible: true, timeout: 0 });

    return element ? true : false;
  }

  public static async blurElement(page: Page, selector: string): Promise<void> {
    await page.$eval(selector, (element: HTMLElement) => element.blur());
  }

  // Enforce that this class is not instantiated elsewhere
  private constructor() {}
}
