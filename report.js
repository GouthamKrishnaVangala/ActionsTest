var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/codetasty-test-feature.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "poc",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "local"
        }
    };
 
    reporter.generate(options);