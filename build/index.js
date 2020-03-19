"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = __importDefault(require("./Summary"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var HtmlReport_1 = __importDefault(require("./reporters/HtmlReport"));
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var ConsoleReport_1 = __importDefault(require("./reporters/ConsoleReport"));
/* const reader = new CsvFileReader('football.csv');
const matchesFile = new MatchReader(reader); */
//! initialized match reader with static method
var matchesFile = MatchReader_1.default.fromCsv('football.csv');
matchesFile.load();
var summary = new Summary_1.default(new WinsAnalysis_1.default('Man United'), new ConsoleReport_1.default());
summary.buildAndPrintReport(matchesFile.matches);
var htmlSummary = new Summary_1.default(new WinsAnalysis_1.default('Man United'), new HtmlReport_1.default('report.html'));
htmlSummary.buildAndPrintReport(matchesFile.matches);
//! called with static method implementation
Summary_1.default.winsAnalysisHTML('Man United', matchesFile.matches, 'report2.html');
