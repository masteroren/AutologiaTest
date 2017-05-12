import { AutologiaTestPage } from './app.po';

describe('autologia-test App', function() {
  let page: AutologiaTestPage;

  beforeEach(() => {
    page = new AutologiaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
