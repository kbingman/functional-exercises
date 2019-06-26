import { Page } from 'puppeteer';

// Utility class: not instantiated
export class PageUtils {
  public static async getText(page: Page, selector: string): Promise<string | null> {
    return page.$eval(selector, (el: Element) => el.textContent);
  }

  public static async isElementVisible(page: Page, selector: string): Promise<boolean> {
    const element = await page.waitForSelector(selector, { visible: true, timeout: 0 });

    return element ? true : false;
  }

  // Enforce that this class is not instantiated elsewhere
  private constructor() {}
}
