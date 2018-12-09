import { RxjsTutorialPage } from './app.po';

describe('rxjs-tutorial App', () => {
  let page: RxjsTutorialPage;

  beforeEach(() => {
    page = new RxjsTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
