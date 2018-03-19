const jasmineReporters = require("jasmine-reporters");
const path = require("path");

jasmine.getEnv().addReporter(
    new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "reports/jest",
        filePrefix: "report"
    })
);
