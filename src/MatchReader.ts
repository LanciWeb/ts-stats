import MatchResult from './MatchResult';
import MatchDataTuple from './MatchData';
import { dateStringToDate } from './utils';
import CsvFileReader from './CsvFileReader';

interface DataReader {
  read: () => void;
  data: Array<string[]>;
}

export default class MatchReader {
  public matches: MatchDataTuple[] = [];
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  constructor(public reader: DataReader) {}
  public load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
