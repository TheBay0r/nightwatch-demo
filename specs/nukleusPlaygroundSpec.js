(function nukleusPlaygroundSpec() {

  function before(browser) {
    browser.url(`${browser.launchUrl}/playground`);
  }

  function after(browser) {
    browser.end();
  }

  function closeToast(browser) {
    // Use pause to explicitly wait for the notification animation to be done
    // TODO: Get rid of explicit pause. That's a horrible practice!
    browser.pause(1100);

    browser.expect.element('#nukleus-playground > div > div.index---container---3DTJD.index---visible---2hzq7.false').to.be.visible.before(500);
    browser.expect.element('#nukleus-playground > div > div.index---container---3DTJD.index---visible---2hzq7.false > p > button').to.be.visible.before(500);

    browser.click('#nukleus-playground > div > div.index---container---3DTJD.index---visible---2hzq7.false > p > button');

    browser.expect.element('#nukleus-playground > div > div.index---container---3DTJD.index---visible---2hzq7.false > p > button').to.not.be.present.before(5000);
  }

  function openModalDialog(browser) {
    // Assert Button to open Modal Window is visible
    browser.expect.element('#nukleus-playground > div > div.panel > div > div:nth-child(66) > div > div > button').to.be.visible.before(500);

    // Assert Modal Window doesn't exist
    browser.expect.element('#react-aria-modal-dialog').to.not.be.present;

    // Click Modal Window
    browser.click('#nukleus-playground > div > div.panel > div > div:nth-child(66) > div > div > button');
    // Assert Modal Window is visible
    browser.expect.element('#react-aria-modal-dialog').to.be.visible.before(500);
  }

  function closeModalDialog(browser) {
    browser.expect.element('#react-aria-modal-dialog > section > footer > button.index---button---2FlMD.index---primary---1Uw9F').to.be.visible.before(500);
    browser.expect.element('#react-aria-modal-dialog > section > footer > button.index---button---2FlMD.index---secondary---1CL4a').to.be.visible.before(500);

    browser.expect.element('#nukleus-modal-close').to.be.visible.before(500);
    browser.expect.element('#nukleus-modal-close').to.have.attribute('type').which.equals('button');
    browser.click('#nukleus-modal-close')

    browser.expect.element('#react-aria-modal-dialog > section > footer > button.index---button---2FlMD.index---primary---1Uw9F').to.not.be.present.before(5000);
    browser.expect.element('#react-aria-modal-dialog > section > footer > button.index---button---2FlMD.index---secondary---1CL4a').to.not.be.present;
    browser.expect.element('#nukleus-modal-close').to.not.be.present;
  }
  module.exports = {
    before,
    after,
    '@tags': ['nukleus'],
    'Close Toast Message': closeToast,
    'Open Modal Dialog': openModalDialog,
    'Close Modal Dialog': closeModalDialog
  };
}());
