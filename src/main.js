import * as math from "./classes/math.js";
import * as Decimal from "./decimal/decimal.js";
import "./core/events.js";
import "./extras/stepPrism.js";
import "./extras/polygon.js";
import "./extras/prism.js";
import "./extras/swirl.js";

globalThis.sqrt = Decimal.sqrt;
globalThis.Sqrt = Decimal.sqrt;
globalThis.sin = Decimal.sin;
globalThis.cos = Decimal.cos;
globalThis.sinF = math.sin;
globalThis.cosF = math.cos;
