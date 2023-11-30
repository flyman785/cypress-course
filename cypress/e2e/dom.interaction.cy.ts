//i test si avviano solo se il precedente è andato a buon fine
describe('DOM Interaction', () => {

  //prima dell'avvio di tutti i test
  before(() => {
    console.log('before');
  });

  //prima di ogni test
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  //avviato al termine di ogni test
  afterEach(() => {
    console.log('after each');
  });

  //dopo l'esecuzione di tutti i test
  after(() => {
    console.log('after');
  });

  it ('display title', () => {
    cy.contains('Home');
  });

  it('selectors', function() {
    cy.get('h1');
    cy.get('p');
  });

  it('title check', () => {
    cy.title().should('include', 'Santirocchi');
    cy.title().should('eq', 'Stefano Santirocchi');
  });

  //skip del test
  it.skip('click', () => {
    cy.get('a').click();
  });

  //solo questo test viene eseguito
  // it.only('click', () => {
  //   cy.get('a').click();
  // });
});

//possiamo skippare o eseguire solo alcuni gruppi di test
describe.skip('Second Group', () => {

  //prima di ogni test
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it ('2 display title', () => {
    cy.contains('Home');
  });

  it('2 title check', () => {
    cy.title().should('include', 'Santirocchi');
    cy.title().should('eq', 'Stefano Santirocchi');
  });

});
