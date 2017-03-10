import { BasicAngularSitePage } from './app.po';

describe('basic-angular-site App', () => {
  let page: BasicAngularSitePage;

  beforeEach(() => {
    page = new BasicAngularSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
