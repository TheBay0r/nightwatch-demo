(function nukleusPlaygroundSpec() {
  let playgroundPage;

  function before(browser) {
    playgroundPage = browser.page.playgroundPage();
    playgroundPage.navigate();
  }

  function after(browser) {
    browser.end();
  }

  function closeToast() {
    playgroundPage.expect.section('@toastNotification').to.be.visible.before(500);
    playgroundPage.expect.section('@toastNotification').to.have.css('opacity').which.equals(1).before(1000); // Once animation is done, opacity is 1

    const toastNotification = playgroundPage.section.toastNotification;
    toastNotification.expect.element('@message').to.be.visible;
    toastNotification.expect.element('@message').to.contain.text('Hello, I am a notification box');
    toastNotification.expect.element('@closeButton').to.be.visible;

    playgroundPage.closeNotification();
  }

  function openModalDialog() {
    // Assert Button to open Modal Window is visible
    playgroundPage.expect.element('@openModalDialogButton').to.be.visible;

    // Assert Modal Window doesn't exist
    playgroundPage.expect.section('@modalDialog').to.not.be.present;

    // Click Modal Window and assert Modal Window is visible
    playgroundPage.openModalDialog();
  }

  function closeModalDialog() {
    const modalDialog = playgroundPage.section.modalDialog;
    modalDialog.expect.element('@okButton').to.be.visible;
    modalDialog.expect.element('@cancelButton').to.be.visible;
    modalDialog.expect.element('@closeButton').to.be.visible;

    playgroundPage.closeModalDialog();
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
