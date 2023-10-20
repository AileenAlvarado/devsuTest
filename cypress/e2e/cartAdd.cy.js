
describe('Agregar 2 productos al carrito', function () {
    beforeEach(function () {
      cy.visit('https://www.demoblaze.com/')
    })
  
    it('Verificar si pagina carga correctamente', function () {
      cy.get('#nava').contains('PRODUCT STORE')

      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click();
      cy.get('#tbodyid > h2').contains('Samsung galaxy s6')
      cy.get('#tbodyid > div.row > div > a').should('be.visible').click()
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('Product added');
     })

     cy.get('#navbarExample > ul > li.nav-item.active > a').click()

     cy.get('#tbodyid > div:nth-child(2) > div > div > h4 > a').click();
     cy.get('#tbodyid > h2').contains('Nokia lumia 1520')
     cy.get('#tbodyid > div.row > div > a').should('be.visible').click()
     cy.on('window:alert',(t)=>{
       expect(t).to.contains('Product added');
    })

      cy.get('#navbarExample > ul > li:nth-child(4) > a').click()
      cy.get('#page-wrapper > div > div.col-lg-8 > h2').contains('Products')
      cy.get('#tbodyid >  .success').should('have.length', 2)
      cy.get('#page-wrapper > div > div.col-lg-1 > button').should('be.visible').click()

      cy.get('#name').should('be.visible').type('Aileen Alvarado');
      cy.get('#country').should('be.visible').type('Argentina');
      cy.get('#city').should('be.visible').type('Buenos Aires');
      cy.get('#card').should('be.visible').type('5555 5555 5555 5555');
      cy.get('#month').should('be.visible').type('10');
      cy.get('#year').should('be.visible').type('28');

      cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').should('be.visible').click()

      cy.get('div.sweet-alert.showSweetAlert.visible > h2').contains('Thank you for your purchase!');


    })
    })
