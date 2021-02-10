import { Public_Opinion_CollectionTemplatePage } from './app.po';

describe('Public_Opinion_Collection App', function() {
  let page: Public_Opinion_CollectionTemplatePage;

  beforeEach(() => {
    page = new Public_Opinion_CollectionTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
