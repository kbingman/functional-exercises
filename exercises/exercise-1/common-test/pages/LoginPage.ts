import { BasePage } from './BasePage';
import { PageList } from '../../page-overview/e2e/pages/PageList';

export class LoginPage extends BasePage {
  private readonly SELECTORS = {
    USERNAMEID: '#js_auth_email',
    PASSWORDID: '#js_auth_password',
    LOGINBTNID: '#login_btn'
  };

  public async goToLoginPage(env: string): Promise<void> {
    await this.launch();
    await this.open(env);
  }

  public async setUsername(username: string): Promise<void> {
    await this.page.type(this.SELECTORS.USERNAMEID, username);
  }

  public async setPassword(pwd: string): Promise<void> {
    await this.page.type(this.SELECTORS.PASSWORDID, pwd);
  }

  public async clickLogin(): Promise<void> {
    await this.page.click(this.SELECTORS.LOGINBTNID);
  }

  public async loginWithCredentials(
    username: string = 'undefined',
    pwd: string = 'undefined'
  ): Promise<PageList> {
    await this.setUsername(username);
    await this.setPassword(pwd);
    await this.clickLogin();
    await this.page.waitForNavigation();

    return new PageList(this);
  }
}
