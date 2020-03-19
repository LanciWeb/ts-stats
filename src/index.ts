import Summary from './Summary';
import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';
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
