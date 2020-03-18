import fs from 'fs';
import MatchResult from './MatchResult';
import { dateStringToDate } from './utils';

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
export default class CsvFileReader {
  data: MatchDataTuple[] = [];
  constructor(public filename: string) {}
  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(
        (row: string[]): MatchDataTuple => {
          return [
            dateStringToDate(row[0]), //date
            row[1], //home team
            row[2], //away team
            parseInt(row[3]), //home goals
            parseInt(row[4]), //away goals
            row[5] as MatchResult, //match result //!type assertion
            row[6] //refree
          ];
        }
      );
  }
}
