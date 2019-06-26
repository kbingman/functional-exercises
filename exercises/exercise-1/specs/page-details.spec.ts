import { LoginPage } from '../../../common-test/pages/LoginPage';
import { Credentials } from '../testdata/LoginData';
import { PageDetails } from '../pages/PageDetails';

jest.setTimeout(60000);
const TEST_ENV = 'https://app-test.unbounce.com/login';
// Todo: const WEBHOOK_URL = 'https://anywebsiteWillDo.com';

describe('Page Details E2E tests', () => {
  const loginPage: LoginPage = new LoginPage();

  describe('Page details with no lead', () => {
    let pageDetails: PageDetails = new PageDetails();

    beforeAll(async () => {
      await loginPage.goToLoginPage(TEST_ENV);
      const pageList = await loginPage.loginWithCredentials(
        Credentials.USERNAME,
        Credentials.PASSWORD
      );
      pageDetails = await pageList.clickPageByName('Page with no Lead'); // TODO
    });

    it('should display "Overview" by default', async () => {
      expect(await pageDetails.isOverviewTabDisplayed()).toBe(true);
    });

    it('should display no lead message in the Leads tab', async () => {
      await pageDetails.clickLeadsTab();

      // expect(await pageDetails.isNoLeadMessageDisplayed()).toBe(true);
    });

    it('should not display export lead button in the Leads tab', async () => {
      await pageDetails.clickLeadsTab();

      // expect(await pageDetails.isLeadExportButtonDisplayed()).toBe(false);
    });

    it('should display "Native Integrations" by default', async () => {
      await pageDetails.clickIntegrationsTab();

      // expect(await pageDetails.isIntegrationTabDisplayed()).toBe(true);
    });
  });

  describe('Page details with leads in the Leads tab', () => {
    let pageDetails: PageDetails = new PageDetails();

    beforeAll(async () => {
      await loginPage.goToLoginPage(TEST_ENV);
      const pageList = await loginPage.loginWithCredentials(
        Credentials.USERNAME,
        Credentials.PASSWORD
      );
      pageDetails = await pageList.clickPageByName('Page with Leads'); // TODO
      await pageDetails.clickLeadsTab();
    });

    it('should display "Lead"', async () => {
      // expect(await pageDetails.isLeadTabDisplayed()).toBe(true);
    });

    it('should download leads in a csv file when user clicks the export button ', async () => {
      // await pageDetails.exportLeads();
      // expect(await pageDetails.isDownloadLeadSuccess()).toBe(true);
    });
  });

  describe('Page details in the Integration tab - Powered by Zapier', () => {
    let pageDetails: PageDetails = new PageDetails();

    beforeAll(async () => {
      await loginPage.goToLoginPage(TEST_ENV);
      const pageList = await loginPage.loginWithCredentials(
        Credentials.USERNAME,
        Credentials.PASSWORD
      );
      pageDetails = await pageList.clickPageByName('Any pages');
      await pageDetails.clickIntegrationsTab();
      // pageDetails = await pageList.clickZapperTab();
    });

    it('should display "Zapier" information', async () => {
      // expect(await pageDetails.isZapierTabDisplayed()).toBe(true);
    });

    it('should display a login dialog box', async () => {
      // expect(await pageDetails.isZapierLoginDisplayed()).toBe(true);
    });
  });

  describe('Page details with Webhooks error in the Integration tab - Webhooks', () => {
    let pageDetails: PageDetails = new PageDetails();

    beforeAll(async () => {
      await loginPage.goToLoginPage(TEST_ENV);
      const pageList = await loginPage.loginWithCredentials(
        Credentials.USERNAME,
        Credentials.PASSWORD
      );
      pageDetails = await pageList.clickPageByName('Page with webhooks error');
      await pageDetails.clickIntegrationsTab();
      // pageDetails = await pageList.clickWebhooksTab();
    });

    it('should display "Webhooks" information', async () => {
      // expect(await pageDetails.isWebhooksTabDisplayed()).toBe(true);
    });

    it('should display webhooks error in page details', async () => {
      // expect(await pageDetails.isWebhooksErrorDisplayed()).toBe(true);
    });

    it('should display webhooks error user click on the View Details link in the error section', async () => {
      // await pageList.clickWebhooksErrorLink();
      // expect(await pageDetails.isWebhooksErrorDetailsDisplayed()).toBe(true);
    });

    it('should display the new webhook after user created a new one', async () => {
      // await pageList.createWebHook(WEBHOOK_URL);
      // expect(await pageDetails.isWebhooksDisplayed(WEBHOOK_URL)).toBe(true);
    });

    afterAll(async () => {
      // await pageList.deleteWebHook(WEBHOOK_URL);
    });
  });

  afterEach(async () => {
    await loginPage.close();
  });
});
