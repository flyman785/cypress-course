describe('Assertion', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it('explicit subject', () => {
    cy.get('h1').then(($h1) => {
      expect($h1).be.visible;
      expect($h1).to.contain('Home');
    });
  });

  it('implicit subject', () => {
    cy.get('h1').should('be.visible').and('contain', 'Home');
  });
});

describe('Assertion jQuery', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it ('h1', () => {
    cy.get('main h1').then(($h1) => {
      expect($h1).to.contain('Chai jQuery');
    });

    cy.get('main p').then(($p) => {
      expect($p).be.visible;
    });

    cy.get('main em').then(($em) => {
      expect($em).not.be.visible;
    });

    cy.get('main a').then(($a) => {
      expect($a).to.have.class('active');
      expect($a).to.have.attr('href', '/posts');
    });
  });
});

describe('chai explicit subject', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it ('contain text', () => {
    cy.get('main h1').should('contain', 'Chai jQuery');
  });
  it ('p visible', () => {
    cy.get('main p').should('be.visible');
  });
  it ('em not visible', () => {
    cy.get('main em').should('not.be.visible');
  });
    // cy.get('main a').should('have.class', 'active');
    // cy.get('main a').should('have.attr', 'href', '/posts');
    // cy.get('main a').should('contain', 'Visit');
  it ('a check', () => {
    cy.get('main a')
      .should('have.class', 'active')
      .and('have.attr', 'href', '/posts')
      .and('contain', 'Visit');
  });
});

describe.only('home page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it('title', () => {
    cy.get('main h1')
      .should('exist')
      .and('be.visible')
      .and('contain', 'Chai jQuery')
      .and('have.class', 'title')
      .and('have.css', 'fontSize', '20px')
      .and('have.data', 'testid', 'chai');
  });
});
