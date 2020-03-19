import Summary from './Summary';
import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
import HtmlReport from './reporters/HtmlReport';
import WinsAnalysis from './analyzers/WinsAnalysis';
import ConsoleReport from './reporters/ConsoleReport';

const reader = new CsvFileReader('football.csv');
const matchesFile = new MatchReader(reader);
matchesFile.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchesFile.matches);

const htmlSummary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
);

htmlSummary.buildAndPrintReport(matchesFile.matches);
