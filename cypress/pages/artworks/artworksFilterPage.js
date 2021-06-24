class ArtworksFilterPage {

    fillArtworkName() {
        const value = "artwork";
        cy.get('[data-target="#backside-filter-collapse-Title"]').click();
        cy.get('[name="Title"]').type(value, {force: true});
    }

    checkArtworkName() {
        cy.get('[data-group="Title"]').first().
        check({ force: true });
    }
    
    fillBrand() {
        const value = "brand";
        cy.get('[data-target="#backside-filter-collapse-Brand"]').click();
        cy.get('[name="Brand"]').type(value, {force: true});
    }

    checkBrand() {
        cy.get('[data-group="Brand"]').first().
        check({ force: true });
    }

    fillSubBrand() {
        const value = "brand";
        cy.get('[data-target="#backside-filter-collapse-Subbrand"]').click();
        cy.get('[name="Subbrand"]').type(value, {force: true});
    }

    checkSubBrand() {
        cy.get('[data-group="Subbrand"]').first().
        check({ force: true });
    }

    fillSystemArtworkId() {
        const value = "bar";
        cy.get('[data-target="#backside-filter-collapse-StandartId"]').click();
        cy.get('[name="StandartId"]').type(value, {force: true});
    }

    checkSystemArtworkId() {
        cy.get('[data-group="StandartId"]').first().
        check({ force: true });
    }

    fillArtworkId() {
        const value = "artwork";
        cy.get('[data-target="#backside-filter-collapse-ExternalId"]').click();
        cy.get('[name="ExternalId"]').type(value, {force: true});
    }

    checkArtworkId() {
        cy.get('[data-group="ExternalId"]').first().
        check({ force: true });
    }

    fillMetaTags() {
        const value = "tag";
        cy.get('[data-target="#backside-filter-collapse-Tags"]').click();
        cy.get('[name="Tags"]').type(value, {force: true});
    }

    checkTag() {
        cy.get('[data-group="Tags"]').first().
        check({ force: true });
    }

    fillCollections() {
        const value = "col";
        cy.get('[data-target="#backside-filter-collapse-Collections"]').click();
        cy.get('[name="Collections"]').type(value, {force: true});
    }

    checkCollections() {
        cy.get('[data-group="Collections"]').first().
        check({ force: true });
    }

    checkApprovalStatusApproved() {        
        cy.get('[data-target="#backside-filter-collapse-ApproveItemState"]').click();
        cy.get('[data-group="ApproveItemState"]').first().
        check({ force: true });        
    }

    checkApprovalStatusRejected() {        
        cy.get('[data-target="#backside-filter-collapse-ApproveItemState"]').click();
        cy.get('[data-group="ApproveItemState"]').eq(1).
        check({ force: true });        
    }

    checkApprovalStatusUnspecified() {        
        cy.get('[data-target="#backside-filter-collapse-ApproveItemState"]').click();
        cy.get('[data-group="ApproveItemState"]').eq(2).
        check({ force: true });        
    }

    submitClearAllFilters() {
        cy.contains('Clear All Filters').click();
    }

}
export default ArtworksFilterPage;