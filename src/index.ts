import CsvFileReader from './CsvFileReader';
const matchesFile = new CsvFileReader('football.csv');
matchesFile.read();

enum MatchResult {
  Draw = 'D',
  HomeWin = 'H',
  AwayWin = 'A'
}

let manUnitedWins = 0;
for (let match of matchesFile.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(`Manchester United won ${manUnitedWins} matches`);
