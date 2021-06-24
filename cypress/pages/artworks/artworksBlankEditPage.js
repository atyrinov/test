class ArtworksBlankEditPage {       
    
    checkBlankEditPageOpened() {
      cy.contains('Filtered Blanks');        
    }

    submitFilter() {
      cy.xpath('//*[@data-aid="filter-button"]', { timeout: 1000 }).
      click({ force: true });               
    }
    
    checkBlankApprovalApproved() {
      cy.contains('Blank approval').click();
      cy.get('[data-group="ApproveItemState"]').first().
      check({ force: true });
    }

    checkBlankApprovalApprovedChecked() {
      cy.contains('Extended filters');
    }
}
export default ArtworksBlankEditPage;