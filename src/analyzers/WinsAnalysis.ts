import { IAnalyzer } from './../Summary';
import MatchResult from '../MatchResult';
import MatchDataTuple from './../MatchData';

export default class WinsAnalysis implements IAnalyzer {
  constructor(public team: string) {}
  public run(matches: MatchDataTuple[]): string {
    let teamWins = 0;
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
        teamWins++;
      else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        teamWins++;
    }
    return `${this.team} won ${teamWins} matches`;
  }
}
