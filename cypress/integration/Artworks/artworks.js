import SignIn from '../../pages/login/SignIn';
import MainPage from '../../pages/main/mainPage';
import ArtworksMainPage from '../../pages/artworks/artworksMainPage';
import ApproveRejectPage from '../../pages/approveReject/approveRejectPage';
import ArtworksAddPage from '../../pages/artworks/artworksAddPage';
import ArtworksBlankEditPage from '../../pages/artworks/artworksBlankEditPage';

const signIn = new SignIn();
const mainPage = new MainPage();
const artwork = new ArtworksMainPage();
const appReject = new ApproveRejectPage();
const artworkAdd = new ArtworksAddPage();
const editBlanks = new ArtworksBlankEditPage();

describe('Artworks', () => {
  
  beforeEach(() => {
    signIn.signIn();
  });
    
    it('Check artworks element', () => {
       mainPage.submitArtworks();
       cy.location('pathname').should('match', /\/artworks$/);
       artwork.checkArtworksCount();
       artwork.checkArtworksName();
       artwork.checkArtworksBrand();
       artwork.checkArtworksSubBrand();
       artwork.checkArtworksSystemArtworkId();
       artwork.checkArtworkArtworkId();
       artwork.checkArtworkArtworkDate();            
    })
    
    it('Create mockup inactive when nothing selected', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkCreateMockupsDisabled();            
    })

    it('Create mockup active when selected 1 items', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkArtworkFirst();
      artwork.checkCreateMockupsVisible();            
    })

    it('Create mockup inactive when selected 2 items', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkArtworkFirst();
      artwork.checkArtworkSecond();
      artwork.checkCreateMockupsDisabled();            
    })

    it('Select all check', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkSelectAll();
      artwork.checkArtworksCheckedSelectAll();            
    })

    it('Appoval when load catalog', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkApproveRejectButtonDisable();                  
    })

    it('Check active buttons after check artwork', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkApprovedArtwork();
      artwork.checkApproveRejectButtonEnable();
      artwork.checkAssignButtonEnable();
      artwork.checkCreateMockupButtonEnable();
    })
    
    it('Appove artwork', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkArtworkFirst();
      artwork.submitApproveRejectButton();
      cy.wait(2000);
      appReject.selectDesignDepartment();
      appReject.submitApproveButton();
      // artwork.checkApprovalStatus();
    })

    it('Reject artwork', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkArtworkFirst();
      artwork.submitApproveRejectButton();
      cy.wait(2000);
      appReject.submitRejectButton();
      appReject.selectLicensor();
      appReject.fillCommentsForReject();
      appReject.submitApplyRejectionButton();
      // artwork.checkApprovalStatus();
    })

    it('Assign active when selected 1 items', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.checkArtworkFirst();
      artwork.submitAssign();
      cy.wait(2000);
      artwork.checAssignFormOpened();              
    })

    it('Open edit blank page', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.submitAddArtwork();
      cy.location('pathname').should('match', /\/add$/);
      artworkAdd.submitEditBlanks();
      cy.wait(2000);
      editBlanks.checkBlankEditPageOpened();              
    })

    it('Edit blank page chec filter', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.submitAddArtwork();
      cy.location('pathname').should('match', /\/add$/);
      artworkAdd.submitEditBlanks();
      cy.wait(2000);
      editBlanks.checkBlankEditPageOpened();
      editBlanks.submitFilter();
      cy.wait(2000);
      editBlanks.checkBlankApprovalApproved();
      editBlanks.checkBlankApprovalApprovedChecked();              
    })

  })