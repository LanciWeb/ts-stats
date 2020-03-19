"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = __importDefault(require("./Summary"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var ConsoleReport_1 = __importDefault(require("./reporters/ConsoleReport"));
var reader = new CsvFileReader_1.default('football.csv');
var matchesFile = new MatchReader_1.default(reader);
matchesFile.load();
var summary = new Summary_1.default(new WinsAnalysis_1.default('Man United'), new ConsoleReport_1.default());
summary.buildAndPrintReport(matchesFile.matches);
