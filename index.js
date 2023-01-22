import { cyrToLat } from "./main/js/converters/cyrToLat.js";
import { latToCyr } from "./main/js/converters/latToCyr.js";
import { runTests } from "./test/js/test.js";

const klatinoid = {
    cyrToLat,
    latToCyr,
    runTests
}

export { klatinoid }