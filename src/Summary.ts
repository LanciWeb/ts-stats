import MatchDataTuple from './MatchData';
export interface IAnalyzer {
  run: (matches: MatchDataTuple[]) => string;
}

export interface IOutputTarget {
  print: (report: string) => void;
}

export default class Summary {
  constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}
  public buildAndPrintReport(matches: MatchDataTuple[]): void {
    const analysis = this.analyzer.run(matches);
    this.outputTarget.print(analysis);
  }
}
