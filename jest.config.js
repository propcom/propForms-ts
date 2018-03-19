const path = require("path");

module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    modulePaths: ["node_modules"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "<rootDir>/coverage/jest",
    setupTestFrameworkScriptFile: path.resolve(__dirname, "jasmine-env.js"),
    collectCoverageFrom: ["**/*.ts", "!**/*.d.ts", "!<rootDir>/src/app.ts"],
    unmockedModulePathPatterns: [
        path.resolve(__dirname, "node_modules", "jasmine-reporters")
    ]
};
