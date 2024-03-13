import Header from '../../components/Header';

export default class StartPage {
  private header: Header;

  constructor() {
    this.header = new Header();
  }

  public getHeaderElement(): HTMLElement {
    return this.header.getHeader();
  }
}
