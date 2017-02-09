import { SubscribblePage } from './app.po';

describe('subscribble App', function() {
  let page: SubscribblePage;

  beforeEach(() => {
    page = new SubscribblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
