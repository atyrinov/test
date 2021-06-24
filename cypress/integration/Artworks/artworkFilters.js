import SignIn from '../../pages/login/SignIn';
import MainPage from '../../pages/main/mainPage';
import ArtworksMainPage from '../../pages/artworks/artworksMainPage';
import ArtworksFilterPage from '../../pages/artworks/artworksFilterPage';

const signIn = new SignIn();
const mainPage = new MainPage();
const artwork = new ArtworksMainPage();
const filters = new ArtworksFilterPage();

describe('Artworks filters', () => {
  
  beforeEach(() => {
    signIn.signIn();
  });
    
    it('Artwork name', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillArtworkName();
        cy.wait(2000);
        filters.checkArtworkName();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();            
    })
    
    it('Artwork Brand', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillBrand();
        cy.wait(2000);
        filters.checkBrand();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Sub brand', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillSubBrand();
        cy.wait(2000);
        filters.checkSubBrand();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork System Artwork ID', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillSystemArtworkId();
        cy.wait(2000);
        filters.checkSystemArtworkId();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Artwork ID', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillArtworkId();
        cy.wait(2000);
        filters.checkArtworkId();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Meta Tags', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillMetaTags();
        cy.wait(2000);
        filters.checkTag();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Collections', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.fillCollections();
        cy.wait(2000);
        filters.checkCollections();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Approval status Approved', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.checkApprovalStatusApproved();
        cy.wait(2000);        
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Approval status Rejected', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.checkApprovalStatusRejected();
        cy.wait(2000);        
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })

    it('Artwork Approval status Unspecified', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        cy.wait(2000);
        artwork.submitFilter();
        filters.checkApprovalStatusUnspecified();
        cy.wait(2000);        
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.checkArtworksCount();    
    })
    
  })