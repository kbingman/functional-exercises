import { BasePage } from '../../../common-test/pages/BasePage';
import { OverviewTab } from './OverviewTab';

export class PageDetails extends BasePage {
  private readonly SELECTORS = {
    OVERVIEWTABID: '[data-testid="overview-tab"]',
    LEADSTABID: '[data-testid="leads-tab"]',
    INTEGRATIONSTAB: '[data-testid="integrations-tab"]'
  };
  private overviewTab: OverviewTab;

  constructor(copyFrom?: BasePage) {
    super(copyFrom);
    this.overviewTab = new OverviewTab(copyFrom);
  }

  public async clickOverviewTab(): Promise<void> {
    return await this.page.click(this.SELECTORS.OVERVIEWTABID);
  }

  public async clickLeadsTab(): Promise<void> {
    return await this.page.click(this.SELECTORS.LEADSTABID);
  }

  public async clickIntegrationsTab(): Promise<void> {
    return await this.page.click(this.SELECTORS.INTEGRATIONSTAB);
  }

  public async isOverviewTabDisplayed(): Promise<boolean> {
    return await this.overviewTab.isOverviewTabDisplayed();
  }

  public async isOverviewTabDisplayedFunc(): Promise<boolean> {
    return await this.overviewTab.isOverviewTabDisplayed_UsingFunc();
  }
}
