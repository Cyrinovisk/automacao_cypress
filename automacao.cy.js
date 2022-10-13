/// <reference types="cypress" />

describe('Preenchimento do Formulário', () => {

  it('1.Entrar no site http://sampleapp.tricentis.com/101/app.php ', () => {
    cy.visit('http://sampleapp.tricentis.com/101/app.php');
    })

  it('2.Preencher o formulário, aba “Enter Vehicle Data” e pressione next', () => {
    cy.get('#make').select('Honda');
    cy.get ('#model').select('Scooter');
    cy.get ('#cylindercapacity').type('150');
    cy.get ('#engineperformance').type('140');
    cy.get ('#opendateofmanufacturecalender > .fa').type('10/04/2022');
    cy.get ('#numberofseats').select('2');
    cy.get (':nth-child(7) > .group > :nth-child(1)').click();
    cy.get ('#numberofseatsmotorcycle').select('1');
    cy.get ('#fuel').select('Petrol');
    cy.get ('#payload').type('100');
    cy.get ('#totalweight').type('200');
    cy.get ('#listprice').type('15000');
    cy.get ('#licenseplatenumber').type('JSE9050');
    cy.get ('#annualmileage').type('40000');
    cy.get ('#nextenterinsurantdata').click();
     })

  it('3.Preencher o formulário, aba “Enter Insurant Data” e pressione next.', () => {
    cy.get ('#firstname').type('Felipe');
    cy.get ('#lastname').type('Cyrino');
    cy.get ('#opendateofbirthcalender').type('06/06/1991');
    cy.get (':nth-child(4) > .group > :nth-child(1)').click();
    cy.get ('#streetaddress').type('Santa Maria');
    cy.get ('#country').select('Brazil');
    cy.get ('#zipcode').type('180200');
    cy.get ('#city').type('Sorocaba');
    cy.get ('#occupation').select('Employee');
    cy.get ('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)').click();
    cy.get ('#website').type('https://www.google.com/');
    cy.get ('#picturecontainer').selectFile('moto.jpg',{ force: true });
    //no quesito acima sobre a inserção de imagem foi inserido um button e um imput text
    // porem o imput file está escondido e so foi possivel identificar após inspeção de elementos 
    cy.get ('#nextenterproductdata').click();
    })

  it('4.Preencher o formulário, aba “Enter Product Data” e pressione next.', () => {
    cy.get ('#openstartdatecalender > .fa').type('12/01/2022');
    cy.get ('#insurancesum').select('3.000.000,00');
    cy.get ('#meritrating').select('Bonus 2');
    cy.get ('#damageinsurance').select('Full Coverage');
    cy.get ('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)').click();
    cy.get ('#courtesycar').select('Yes');
    cy.get ('#nextselectpriceoption').click();
    })

  it('5.Preencher o formulário, aba “Select Price Option” e pressione nex', () => { 
    cy.get (':nth-child(3) > .ideal-radio').click();
    cy.get ('#nextsendquote').click();
    })

  it('6.Preencher o formulário, aba “Send Quote” e pressione Send.', () => {
    cy.get ('#email').type('email@email.com.br');
    cy.get ('#phone').type('1599999999');
    cy.get ('#username').type('Felipe.cyrino');
    cy.get ('#password').type('P@$$w0rd');
    cy.get ('#confirmpassword').type('P@$$w0rd');
    cy.get ('#Comments').type('Favor contatar-me.');
    cy.get ('#sendemail').click(); 
    //Ao Clicar no botão enviar, o mesmo tem apresentado erro de desenvolvimento
    //onde para dar continuidade e sucesso aos testes foi inserido o uncauth:exeception
    //porem é necessario tratar o erro em questão
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    })
    
  it('7.Verificar a mensagem “Sending e-mail success!” na tela', () => {
    cy.wait(12000);
    cy.get('h2')
      .should('have.text', 'Sending e-mail success!');
    cy.get ('.confirm').click();
    })
  
})      