class ArtworksMainPage {       
    
    checkArtworksCount() {
        cy.xpath('//*[@data-aid="artwork-count"]').should(($lis) => {
            expect($lis).to.have.not.text('0 Items')
          }); 
          cy.contains('Filtered Artworks');          
    }

    submitFilter() {
        cy.xpath('//*[@data-aid="filter-button"]', { timeout: 1000 }).
        click({ force: true });               
    }

    submitAddArtwork() {
        cy.xpath('//*[@data-aid="button-add-artwork"]').should('be.visible').
        click();               
    }

    submitAssign() {
        cy.xpath('//*[@data-auto-test="assign-button"]').
        click({ force: true });               
    }

    checAssignFormOpened() {
        cy.contains('Assign tasks');       
    }

    checkExBomTitle() {
        cy.get('.external-indicator').first().    
        contains('EX.BOM');        
    }

    checkArtworksName() {
        cy.xpath('//*[@data-aid="artwork-name"]/h6').should('be.not.empty');        
    }

    checkArtworksBrand() {
        cy.xpath('//*[@data-aid="artwork-brand"]').should('be.not.empty');        
    }

    checkArtworksSubBrand() {
        cy.xpath('//*[@data-aid="artwork-sub-brand"]').should('be.not.empty');        
    }

    checkArtworksSystemArtworkId() {
        cy.xpath('//*[@data-aid="artwork-system-artwork-id"]').should('be.not.empty');        
    }

    checkArtworkArtworkId() {
        cy.xpath('//*[@data-aid="artwork-artwork-id"]').should('be.not.empty');        
    }

    checkArtworkArtworkDate() {
        cy.xpath('//*[@data-aid="artwork-date"]').should('be.not.empty');        
    }

    checkCreateMockupsDisabled() {
        cy.xpath('//*[@data-aid="button-create-mockups"]').should('be.disabled');        
    }

    checkCreateMockupsVisible() {
        cy.xpath('//*[@data-aid="button-create-mockups"]').should('be.visible');        
    }

    checkSelectAll() {
        cy.xpath('//*[@data-aid="check-select-all"]/input').check({ force: true });
    }

    checkArtworksCheckedSelectAll() {        
        for (let i = 0; i < cy.xpath('//*[@data-aid="artwork-element"]').its('length'); i++) {
            cy.xpath('//*[@data-aid="artwork-check-element"]').eq(i).
            should('be.checked');
        }    
    }

    checkApproveRejectButtonDisable() {
        cy.xpath('//*[@data-aid="button-approve-reject"]').should('be.disabled');
        cy.contains('Approve / Reject');        
    }

    checkArtworkFirst() {
        cy.xpath('//*[@data-aid="artwork-check-element-Default"]').eq(0).
        check({ force: true });               
    }

    checkArtworkItemForInfoPage() {
        cy.xpath('//*[@data-aid="artwork-element"]').first().
        dblclick();        
    }

    checkArtworkSecond() {
        cy.xpath('//*[@data-aid="artwork-check-element-Default"]').eq(1).
        check({ force: true });               
    } 
    
    checkApprovedArtwork() {        
        cy.xpath('//*[@data-aid="artwork-check-element-Approved"]').first().
        check({ force: true });      
    }    

    checkRejectedArtwork() {        
        cy.xpath('//*[@data-aid="artwork-check-element-Disapproved"]').first().
        check({ force: true });      
    }
    
    checkApproveRejectButtonEnable() {
        cy.xpath('//*[@data-aid="button-approve-reject"]').should('be.not.disabled');
        cy.contains('Approve / Reject');        
    }

    checkCreateMockupButtonEnable() {
        cy.xpath('//*[@data-aid="button-create-mockups"]').should('be.not.disabled');                
    }

    checkAssignButtonEnable() {
        cy.get('.js-action-assigntask').should('be.not.disabled').
        contains('Assign');
    }

    
    checkApprovalStatus() {
        cy.get('.fa-file-signature').first().
        contains('Approval');
    }
    
    submitApproveRejectButton() {
        cy.xpath('//*[@data-aid="button-approve-reject"]').
        click({ force: true });
    }

    submitCreateMockupButton() {
        cy.xpath('//*[@data-aid="button-create-mockups"]').
        click({ force: true });
    }

    submitRejectOkConfirmForm() {
        cy.get('.bootbox-accept').contains('OK').
        click({ force: true });
    }

    submitContextMenu() {
        cy.xpath('//*[@data-aid="artwork-context-menu"]/button').first().
        click({ force: true });
    }

    submitEditArtwork() {
        cy.xpath('//*[@data-aid="artwork-context-edit"]').first().
        click({ force: true });
    }

}
export default ArtworksMainPage;