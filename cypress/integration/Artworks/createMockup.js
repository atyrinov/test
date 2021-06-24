import SignIn from '../../pages/login/SignIn';
import MainPage from '../../pages/main/mainPage';
import ArtworksMainPage from '../../pages/artworks/artworksMainPage';
import ArtworksAddPage from '../../pages/artworks/artworksAddPage';
import MockupsMainPage from '../../pages/mockups/mockupsMainPage';
import faker from 'faker';

const signIn = new SignIn();
const mainPage = new MainPage();
const artwork = new ArtworksMainPage();
const artworkAdd = new ArtworksAddPage();
const mockups = new MockupsMainPage();
const name = faker.random.uuid();

describe('Create mockups', () => {
  
  beforeEach(() => {
    signIn.signIn();
  });
    
    it('Create mockup with png file', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.submitAddArtwork();
        cy.location('pathname').should('match', /\/add$/);
        artworkAdd.fillArtworkNamePNG(name);
        artworkAdd.submitAddFile();
        cy.wait(2000);        
        artworkAdd.selectFileTypePng();
        artworkAdd.fileUploadPNG();
        cy.wait(3000);
        artworkAdd.submitSaveFileUpload();
        cy.wait(15000);
        artworkAdd.submitSaveArtwork();
        cy.wait(5000);
        artwork.checkArtworkFirst();
        artwork.submitCreateMockupButton();
        cy.wait(57000);
        mainPage.submitMockups();
        cy.wait(3000);
        mockups.checkMockupNamePNGAfterCreate();                
    })
    
    it('Create mockup with ai file', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.submitAddArtwork();
        cy.location('pathname').should('match', /\/add$/);
        artworkAdd.fillArtworkNameAi(name);      
        artworkAdd.submitAddFile();
        cy.wait(2000);        
        artworkAdd.selectFileTypeAIPSD();
        artworkAdd.fileUploadAI();
        cy.wait(3000);
        artworkAdd.submitSaveFileUpload();
        cy.wait(25000);  
        artworkAdd.submitSaveArtwork();
        cy.wait(5000);
        artwork.checkArtworkFirst();
        artwork.submitCreateMockupButton();
        cy.wait(57000);
        mainPage.submitMockups();
        cy.wait(3000);
        mockups.checkMockupNameAIAfterCreate();                 
    })

    it('Create mockup with pdf file', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.submitAddArtwork();
        cy.location('pathname').should('match', /\/add$/);
        artworkAdd.fillArtworkNamePDF(name);      
        artworkAdd.submitAddFile();
        cy.wait(2000);        
        artworkAdd.selectFileTypePdf();
        artworkAdd.fileUploadPDF();
        cy.wait(3000);
        artworkAdd.submitSaveFileUpload();
        cy.wait(25000);
        artworkAdd.checkContainsMultipleBoards();  
        artworkAdd.submitSaveArtwork();
        cy.wait(5000);
        artwork.checkArtworkFirst();
        artwork.submitCreateMockupButton();
        cy.wait(57000);
        mainPage.submitMockups();
        cy.wait(3000);
        mockups.checkMockupNamePDFAfterCreate();                
    })

    it('Create mockup with tiff file', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.submitAddArtwork();
        cy.location('pathname').should('match', /\/add$/);
        artworkAdd.fillArtworkNameTiff(name);      
        artworkAdd.submitAddFile();
        cy.wait(2000);        
        artworkAdd.selectFileTypeTiff();
        artworkAdd.fileUploadTiff();
        cy.wait(3000);
        artworkAdd.submitSaveFileUpload();
        cy.wait(25000);     
        artworkAdd.submitSaveArtwork();
        cy.wait(5000);
        artwork.checkArtworkFirst();
        artwork.submitCreateMockupButton();
        cy.wait(57000);
        mainPage.submitMockups();
        cy.wait(3000);
        mockups.checkMockupNameTiffAfterCreate();               
    })

    it('Create mockup with png large file', () => {
      mainPage.submitArtworks();
      cy.location('pathname').should('match', /\/artworks$/);
      artwork.submitAddArtwork();
      cy.location('pathname').should('match', /\/add$/);
      artworkAdd.fillArtworkNamePNG(name);
      artworkAdd.submitAddFile();
      cy.wait(2000);        
      artworkAdd.selectFileTypePng();
      artworkAdd.fileUploadPNGLarge();
      cy.wait(3000);
      artworkAdd.submitGoITLargeFile();
      artworkAdd.submitSaveFileUpload();
      cy.wait(25000);
      artworkAdd.submitSaveArtwork();
      cy.wait(5000);
      artwork.checkArtworkFirst();
      artwork.submitCreateMockupButton();
      cy.wait(57000);
      mainPage.submitMockups();
      cy.wait(3000);
      mockups.checkMockupNamePNGAfterCreate();                
   })    
   })