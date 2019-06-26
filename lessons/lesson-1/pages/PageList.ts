import { BasePage } from '../../../common-test/pages/BasePage';
import { PageDetails } from './PageDetails';
import { List } from '../../../common-test/components/List';

export class PageList extends BasePage {
  private pageList: List;
  private readonly SELECTORS = {
    PAGELISTITEM: '.comp_page-list-item h3.comp_title'
  };

  constructor(copyFrom?: BasePage) {
    super(copyFrom);
    this.pageList = new List();
  }

  public async clickPageByName(pagename: string): Promise<PageDetails> {
    await this.pageList.clickListItemByName(this.page, this.SELECTORS.PAGELISTITEM, pagename);
    await this.page.waitForNavigation();

    return new PageDetails(this);
  }

  public async getAllPageNames(): Promise<string[]> {
    return this.pageList.getAllListItems(this.page, this.SELECTORS.PAGELISTITEM);
  }
}
