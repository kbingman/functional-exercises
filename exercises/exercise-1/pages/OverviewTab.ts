import { BasePage } from '../../../common-test/pages/BasePage';
import { PageUtilsFunc } from '../../../common-test/utils/PageUtilsFunctional';
import { PageUtils } from '../../../common-test/utils/PageUtils';

export class OverviewTab extends BasePage {
  private readonly SELECTORS = {
    OVERVIEWTAB: '.page-dashboard'
  };

  public async isOverviewTabDisplayed_UsingFunc(): Promise<boolean> {
    const { isElementVisible } = PageUtilsFunc(this.page);

    return isElementVisible(this.SELECTORS.OVERVIEWTAB);
  }

  public async isOverviewTabDisplayed(): Promise<boolean> {
    return PageUtils.isElementVisible(this.page, this.SELECTORS.OVERVIEWTAB);
  }
}
