import { PipeExPage } from './app.po';

describe('pipe-ex App', function() {
  let page: PipeExPage;

  beforeEach(() => {
    page = new PipeExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
