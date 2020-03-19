import { IOutputTarget } from '../Summary';

export default class ConsoleReport implements IOutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}
