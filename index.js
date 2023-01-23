import { cyrToLat } from "./main/js/converters/cyrToLat.js";
import { latToCyr } from "./main/js/converters/latToCyr.js";
import { runTests, tests } from "./test/js/testcases/runTests.js";

const klatinoid = {
    cyrToLat,
    latToCyr,
    runTests,
    tests,
}

export { klatinoid }