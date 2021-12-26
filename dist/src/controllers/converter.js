"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var referenceCurrency_1 = __importDefault(require("../settings/referenceCurrency"));
var Converter = /** @class */ (function () {
    function Converter() {
        this.currentExchangeRate = [];
        this.currentExchangeDate = null;
        this.setCurrentExchangeRate();
    }
    ;
    Converter.prototype.setCurrentExchangeRate = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        apiUrl = process.env.API_URL || '';
                        _b = this;
                        return [4 /*yield*/, axios_1.default.get(apiUrl, { timeout: 10000 })
                                .then(function (res) { return res.data; })
                                .catch(function (err) {
                                throw { message: err.message, code: 500 };
                            })];
                    case 1:
                        _b.currentExchangeRate = _c.sent();
                        this.currentExchangeRate.push(referenceCurrency_1.default);
                        this.currentExchangeDate = new Date(((_a = this.currentExchangeRate[0]) === null || _a === void 0 ? void 0 : _a.Date) || Date.now());
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Converter.prototype.convert = function (changedCurrency) {
        return __awaiter(this, void 0, void 0, function () {
            var changedCurrencyRate, referenсeAmount_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(this.currentExchangeDate.toISOString().slice(0, 10) < new Date().toISOString().slice(0, 10))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setCurrentExchangeRate()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ;
                        changedCurrencyRate = this.currentExchangeRate.filter(function (rate) { return rate.Cur_Abbreviation === changedCurrency.abbreviation; })[0];
                        referenсeAmount_1 = changedCurrency.amount * changedCurrencyRate.Cur_OfficialRate / changedCurrencyRate.Cur_Scale;
                        return [2 /*return*/, this.currentExchangeRate.reduce(function (acc, currency) {
                                acc.push({
                                    abbreviation: currency.Cur_Abbreviation,
                                    amount: referenсeAmount_1 / currency.Cur_OfficialRate * currency.Cur_Scale,
                                    name: currency.Cur_Name,
                                });
                                return acc;
                            }, [])];
                    case 3:
                        err_1 = _a.sent();
                        throw this.errorHandler(changedCurrency, err_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Converter.prototype.errorHandler = function (currency, err) {
        if ((currency === null || currency === void 0 ? void 0 : currency.abbreviation) === undefined || (currency === null || currency === void 0 ? void 0 : currency.amount) === undefined) {
            return { message: 'Bad request', code: 400 };
        }
        return { message: err.message, code: 500 };
    };
    ;
    return Converter;
}());
;
var converter = new Converter();
exports.default = converter;
//# sourceMappingURL=converter.js.map