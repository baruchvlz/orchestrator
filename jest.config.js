module.exports = {
  "moduleNameMapper": {
    "@orchestrator/core": "<rootDir>/libs/core/src/public_api.ts",
    "@orchestrator/layout": "<rootDir>/libs/layout/src/public_api.ts",
    "@orchestrator/core/testing": "<rootDir>/libs/core/src/lib/testing/src/public_api.ts"
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/dist"
  ]
};
