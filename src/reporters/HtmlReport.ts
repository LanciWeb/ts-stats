import fs from 'fs';
import { IOutputTarget } from '../Summary';

export default class HtmlReport implements IOutputTarget {
  constructor(public fileName: string) {}
  public print(report: string): void {
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;

    fs.writeFileSync(this.fileName, html);
  }
}
