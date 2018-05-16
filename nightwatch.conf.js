module.exports = {
  src_folders: ['specs'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path: 'bin/selenium-server-standalone-3.11.0.jar',
    log_path: 'reports/',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver' : 'node_modules/.bin/chromedriver',
      'webdriver.gecko.driver' : '',
      'webdriver.edge.driver' : ''
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        // setHeadless: true,
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true
      }
    }
  }
}
