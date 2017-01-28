import { DropShipPage } from './app.po';

describe('drop-ship App', function() {
  let page: DropShipPage;

  beforeEach(() => {
    page = new DropShipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
