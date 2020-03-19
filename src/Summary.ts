import MatchDataTuple from './MatchData';
import WinsAnalysis from './analyzers/WinsAnalysis';
import HtmlReport from './reporters/HtmlReport';
export interface IAnalyzer {
  run: (matches: MatchDataTuple[]) => string;
}

export interface IOutputTarget {
  print: (report: string) => void;
}

export default class Summary {
  //! static methods can be called without creating an instance of the class
  static winsAnalysisHTML(
    teamName: string,
    matches: MatchDataTuple[],
    fileName: string
  ) {
    const winsAnalysis = new WinsAnalysis(teamName);
    const outputReporter = new HtmlReport(fileName);
    const analysis = winsAnalysis.run(matches);
    outputReporter.print(analysis);
  }
  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}
  public buildAndPrintReport(matches: MatchDataTuple[]): void {
    const analysis = this.analyzer.run(matches);
    this.outputTarget.print(analysis);
  }
}
