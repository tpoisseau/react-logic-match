import Match from '../Match';
import Case from "../Case";
import Default from "../Default";
import Switch from "../Switch";

describe('all import working', () => {
  it('Match', () => {
    expect(Match).toBeTruthy()
  });
  it('Case', () => {
    expect(Case).toBeTruthy()
  });
  it('Default', () => {
    expect(Default).toBeTruthy()
  });
  it('Switch', () => {
    expect(Switch).toBeTruthy()
  });
});
