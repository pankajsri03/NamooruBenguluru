import { NammmoruBenguluruPage } from './app.po';

describe('nammmoru-benguluru App', () => {
  let page: NammmoruBenguluruPage;

  beforeEach(() => {
    page = new NammmoruBenguluruPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
