module.exports = {
  src_folders: ['specs'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'page-objects/',
  globals_path: '',

  selenium: {
    start_process: false,
    server_path: '',
    log_path: 'reports/',
    host: '192.168.99.100',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver' : 'node_modules/.bin/chromedriver',
      'webdriver.gecko.driver' : 'node_modules/.bin/geckodriver',
      'webdriver.edge.driver' : ''
    }
  },

  test_workers: {
    enabled: true,
    workers: 20
  },

  test_settings: {
    default: {
      launch_url: 'http://172.17.0.1:3000',
      selenium_port: 4444,
      selenium_host: '192.168.99.100',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        version: '65.0'
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
