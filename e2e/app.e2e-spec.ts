import { NgCoolPage } from './app.po';

describe('ng-cool App', () => {
  let page: NgCoolPage;

  beforeEach(() => {
    page = new NgCoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
