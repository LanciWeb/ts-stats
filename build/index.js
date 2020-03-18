"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var matchesFile = new CsvFileReader_1.default('football.csv');
matchesFile.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["Draw"] = "D";
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = matchesFile.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        manUnitedWins++;
}
console.log("Manchester United won " + manUnitedWins + " matches");
