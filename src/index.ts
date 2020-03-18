import MatchResult from './MatchResult';
import MatchReader from './MatchReader';
import CsvFileReader from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
const matchesFile = new MatchReader(reader);
matchesFile.load();

let manUnitedWins = 0;
for (let match of matchesFile.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(`Manchester United won ${manUnitedWins} matches`);
