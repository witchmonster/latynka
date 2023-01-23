//------------------------- STABLE -------------------------

import { cyrToLatTestSuite as cyrToLat0_9TestSuite } from "./0.9/cyrToLatTestSuite.js";
import { latToCyrTestSuite as latToCyr0_9TestSuite } from "./0.9/latToCyrTestSuite.js";
import { cyrToLatTestSuite as cyrToLat1_0TestSuite } from "./1.0/cyrToLatTestSuite.js";
import { latToCyrTestSuite as latToCyr1_0TestSuite } from "./1.0/latToCyrTestSuite.js";

//------------------------- STABLE -------------------------



//------------------------- LATEST -------------------------

import { cyrToLatTestSuite as cyrToLatExperimentalSuite } from "./1.1/cyrToLatTestSuite.js";
import { latToCyrTestSuite as latToCyrExperimentalSuite } from "./1.1/latToCyrTestSuite.js";

//------------------------- LATEST -------------------------


//------------------------- FUTURE -------------------------

import { cyrToLatTestSuite as cyrToLatFutureSuite } from "./future/cyrToLatTestSuite.js";
import { latToCyrTestSuite as latToCyrFutureSuite } from "./future/latToCyrTestSuite.js";

//------------------------- FUTURE -------------------------


import { init, runAll } from "../utils/testUtils.js";

const supportedVersions = ['0.9', '1.0'];
const experimentalVersion = '1.1';
const futureVersion = 'future'

function runTests(loglevel = 'debug', experimental = false, future = false, name = "ALL TESTS") {

    init(loglevel ? loglevel : undefined);

    var tests = {
        cyrToLat0_9TestSuite,
        latToCyr0_9TestSuite,
        cyrToLat1_0TestSuite,
        latToCyr1_0TestSuite
    }

    var experimentalTests = {
        cyrToLatExperimentalSuite,
        latToCyrExperimentalSuite,
    }

    var futureTests = {
        cyrToLatFutureSuite,
        latToCyrFutureSuite
    }

    if (experimental) {
        tests = {
            ...tests,
            ...experimentalTests
        }
    }

    if (future) {
        tests = {
            ...tests,
            ...futureTests
        }
    }

    const allTests = typeof tests === 'object' ? Object.values(tests) : tests;

    return runAll(true, allTests, name);
}

const tests = {
    cyrToLatExperimentalSuite,
    latToCyrExperimentalSuite
}

export { runTests, tests }