import fs from 'fs';

export default class CsvFileReader {
  data: Array<string[]> = [];
  constructor(public filename: string) {}
  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
