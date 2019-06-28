import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  private _url: string;

  private readonly SELECTORS = {
    SEARCH_FIELD: '[name="q"]',
    SEARCH_BTN: '[name="btnK"]',
    SEARCH_CONTAINER: "#search",
    SEARCH_RESULT: "#search .g",
    RESULT_TITLE: ".LC20lb",
    RESULT_LINK: ".r a"
  };

  constructor(url: string) {
    super();
    this._url = url;
  }

  public async goToSearchPage(): Promise<void> {
    await this.launch();
    await this.open(this._url);
  }

  public async search(query: string): Promise<void> {
    await this.page.type(this.SELECTORS.SEARCH_FIELD, query);
    await this.page.$eval(this.SELECTORS.SEARCH_FIELD, (e: any) => e.blur());
    await this.page.waitFor(this.SELECTORS.SEARCH_BTN);
    await this.page.waitFor(1000);
    await this.page.click(this.SELECTORS.SEARCH_BTN);
  }

  public async getSearchResults(): Promise<any[]> {
    await this.page.waitFor(1000);

    return await this.page.$$eval(this.SELECTORS.SEARCH_RESULT, (elements, selectors) => {
      return elements.map(el => {
        const title: HTMLElement = el.querySelector(selectors.RESULT_TITLE);
        const link: HTMLAnchorElement = el.querySelector(selectors.RESULT_LINK);
  
        return {
          title: title.textContent,
          url: link.href
        };
      });
    }, this.SELECTORS);
  }
}
