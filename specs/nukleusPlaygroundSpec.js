(function nukleusPlaygroundSpec() {

  function before(browser) {
    browser.url(`${browser.launchUrl}/playground`);
  }

  function after(browser) {
    browser.end();
  }

  function openModalDialog(browser) {
    browser.expect.element('#nukleus-playground > div > div.panel > div > div:nth-child(66) > div > div > button').to.be.visible.before(5000);
  }
  module.exports = {
    before,
    after,
    '@tags': ['nukleus'],
    'Open Modal Dialog': openModalDialog
  };
}());
