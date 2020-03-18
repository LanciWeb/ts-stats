import MatchResult from './MatchResult';
import { dateStringToDate } from './utils';
import CsvFileReader from './CsvFileReader';
//! tuple definition
type MatchDataTuple = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export default class MatchReader extends CsvFileReader<MatchDataTuple> {
  public mapRow = (row: string[]): MatchDataTuple => [
    dateStringToDate(row[0]), //date
    row[1], //home team
    row[2], //away team
    parseInt(row[3]), //home goals
    parseInt(row[4]), //away goals
    row[5] as MatchResult, //match result //!type assertion
    row[6] //refree
  ];
}
