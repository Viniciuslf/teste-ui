///<referece types = "cypress" />

describe('Funcionalidade: Login', () =>{
    it('Deve fazer login com sucesso',() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('viniciusteste123@teste.com')
        cy.get('#password').type('123teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, viniciusteste123 (não é viniciusteste123? Sair)')
    })
})