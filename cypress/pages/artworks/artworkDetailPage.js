class ArtworkDetailPage {       
    
    checkArtworkDetailEdit() {
      cy.xpath('//*[@data-aid="artwork-detail-edit"]')
      .should('be.visible');        
    }

    checkArtworkDetailApproveReject() {
      cy.xpath('//*[@data-aid="artwork-detail-approve-reject"]')
      .should('be.visible');        
    }    

    checkArtworkDetailDownloadFiles() {
      cy.xpath('//*[@data-aid="artwork-detail-download"]')
      .should('be.visible');        
    }

    checkArtworkDetailDelete() {
      cy.xpath('//*[@data-aid="artwork-detail-delete"]')
      .should('be.visible');        
    }

    checkArtworkDetailCreated() {
      cy.get('p[data-aid="artwork-detail-created"] > b')
      .should('be.not.empty');        
    }

    checkArtworkDetailStatus() {
      cy.xpath('//*[@data-aid="artwork-detail-status"]')
      .should('be.visible');        
    }

    checkArtworkDetailArtworkId() {
      cy.get('p[data-aid="artwork-detail-artwork-id"] > b')
      .should('be.not.empty');        
    }

    checkArtworkFilesTable() {        
      cy.get('#dtgSourceTbl').getTable().should(tableData => {
          expect(tableData).to.be.not.empty
      })
    }

    checkBlanksTable() {        
      cy.get('#artworkBlanksTbl').getTable().should(tableData => {
          expect(tableData).to.be.not.empty
      })
    }    
}
export default ArtworkDetailPage;