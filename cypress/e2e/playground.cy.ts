//raggruppiamo i test
import {add} from '../../src/main';

describe('math exp', () => {
  it('add 2 numbers', () => {
    //asserzione
    expect(add(1, 2)).to.equal(3)
  })
})
