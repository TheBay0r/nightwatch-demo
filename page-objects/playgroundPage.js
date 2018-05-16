(function playgroundPage() {

  playgroundSections = {
    toastNotification: {
      selector: '#nukleus-playground > div > div.index---container---3DTJD.index---visible---2hzq7.false',
      elements: {
        message: {
          selector: 'p'
        },
        icon: {
          selector: 'p > span > i'
        },
        closeButton: {
          selector: 'p > button'
        }
      }
    },
    modalDialog: {
      selector: '#react-aria-modal-dialog',
      elements: {
        okButton: {
          selector: 'section > footer > button.index---button---2FlMD.index---primary---1Uw9F'
        },
        cancelButton: {
          selector: 'section > footer > button.index---button---2FlMD.index---secondary---1CL4a'
        },
        closeButton: {
          selector: '#nukleus-modal-close'
        }
      }
    }
  };

  playgroundElements = {
    openModalDialogButton: {
      selector: '#nukleus-playground > div > div.panel > div > div:nth-child(66) > div > div > button'
    }
  };

  playgroundCommands = {
    closeNotification() {
      const notificationSection = this.section.toastNotification;
      notificationSection.click('@closeButton');
      this.expect.section('@toastNotification').to.not.be.present.before(500);
      return this;
    },
    openModalDialog() {
      this.click('@openModalDialogButton');
      this.expect.section('@modalDialog').to.be.visible.before(500);
      return this;
    },
    closeModalDialog() {
      const modalDialog = this.section.modalDialog;
      modalDialog.click('@closeButton');
      modalDialog.expect.element('okButton').to.not.be.present.before(500);
      modalDialog.expect.element('cancelButton').to.not.be.present.before(500);
      this.expect.section('@modalDialog').to.not.be.present.before(500);
      return this;
    }
  }

  module.exports = {
    url() {
      return `${this.api.launchUrl}/playground`
    },
    commands: [playgroundCommands],
    sections: playgroundSections,
    elements: playgroundElements
  }
}())
