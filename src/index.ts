import MatchResult from './MatchResult';
import MatchReader from './MatchReader';

const matchesFile = new MatchReader('football.csv');
matchesFile.read();

let manUnitedWins = 0;
for (let match of matchesFile.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(`Manchester United won ${manUnitedWins} matches`);
