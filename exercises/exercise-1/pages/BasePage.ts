import Puppeteer, { Browser, Page } from 'puppeteer';

export abstract class BasePage {
  private readonly ERRORS = {
    PAGE_NULL: '[BasePage] page property is null',
    BROWSER_NULL: '[BasePage] browser property is null'
  };
  private _page: Page | null = null;
  private _browser: Browser | null = null;

  constructor(copyFrom?: BasePage) {
    if (copyFrom) {
      this._page = copyFrom.page;
      this._browser = copyFrom.browser;
    }
  }

  public get page(): Page {
    if (this._page === null) {
      throw Error(this.ERRORS.PAGE_NULL);
    } 
    return this._page;
  }

  public get browser(): Browser {
    if (this._browser === null) {
      throw Error(this.ERRORS.BROWSER_NULL);
    } 
    return this._browser;
  }

  public async open(path: string): Promise<void> {
    await this.page.goto(path);
  }

  public async close(): Promise<void> {
    await this.browser.close();
  }

  protected async launch(runHeadless: boolean = false): Promise<void> {
    this._browser = await Puppeteer.launch({ headless: runHeadless });
    this._page = await this.browser.newPage();
  }
}
