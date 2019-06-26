import { Page } from 'puppeteer';

export class List {
  private readonly ERRORS = {
    PAGENAME_NOTFOUND: '[List] Unable to find page with specified name'
  };

  public async getAllListItems(page: Page, selector: string): Promise<string[]> {
    const listItemElements = await page.$$(selector);
    const listItemNames = [];

    for (const listItemElement of listItemElements) {
      const text = await page.evaluate(el => el.innerText, listItemElement);
      listItemNames.push(text);
    }

    return listItemNames;
  }

  public async clickListItemByName(page: Page, selector: string, name: string): Promise<void> {
    const listItemElements = await page.$$(selector);

    for (const listItemElement of listItemElements) {
      const pageName = await page.evaluate(el => el.innerText, listItemElement);

      if (pageName === name) {
        await listItemElement.click();
        return;
      }
    }

    throw Error(this.ERRORS.PAGENAME_NOTFOUND + ': ' + name);
  }
}
