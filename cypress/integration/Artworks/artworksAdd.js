import SignIn from '../../pages/login/SignIn';
import MainPage from '../../pages/main/mainPage';
import ArtworksMainPage from '../../pages/artworks/artworksMainPage';
import ArtworksAddPage from '../../pages/artworks/artworksAddPage';
import faker from 'faker';

const signIn = new SignIn();
const mainPage = new MainPage();
const artwork = new ArtworksMainPage();
const artworkAdd = new ArtworksAddPage();
const name = faker.random.uuid();

describe('Add artworks', () => {
  
  beforeEach(() => {
    signIn.signIn();
  });
    
    it('Add artworks with png file', () => {
        mainPage.submitArtworks();
        cy.location('pathname').should('match', /\/artworks$/);
        artwork.submitAddArtwork();
        cy.location('pathname').should('match', /\/add$/);
        artworkAdd.fillArtworkNamePNG(name);
        artworkAdd.fillArtworkID();
        artworkAdd.fillArtworkVersion();
        artworkAdd.fillArArtworkDesigner();
        artworkAdd.fillBrand();
        artworkAdd.fillSubBrand();         
        artworkAdd.fillLicensor();
        artworkAdd.fillLicensee();
        artworkAdd.fillMetaTags();
        artworkAdd.fillCollections();
        artworkAdd.fillBulletPoints();        
        artworkAdd.fillArtworkDescription();        
        artworkAdd.fillPantoneName();
        artworkAdd.fillPantoneNumber();
        artworkAdd.fillPantoneHexadecimal();
        artworkAdd.submitAddPantone();        
        artworkAdd.submitAddFile();
        cy.wait(2000);        
        artworkAdd.selectFileTypePng();
        artworkAdd.fileUploadPNG();
        cy.wait(3000);
        artworkAdd.submitSaveFileUpload();
        cy.wait(25000);
        artworkAdd.checkArtworkFilesTable();        
        artworkAdd.fillTrimsComments();        
        artworkAdd.fillStampsComments();        
        artworkAdd.submitSaveArtwork();
    })

    it('Add artworks with ai file', () => {
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
      artworkAdd.checkArtworkFilesTable();  
      artworkAdd.submitSaveArtwork();
    })  

  it('Add artworks with pdf file', () => {
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
    artworkAdd.checkArtworkFilesTable(); 
    artworkAdd.submitSaveArtwork();
  })

  it('Add artworks with tiff file', () => {
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
    cy.wait(17000);
    // artworkAdd.checkContainsMultipleBoards();
    artworkAdd.checkArtworkFilesTable();  
    artworkAdd.submitSaveArtwork();
  })  

  it('Add artworks with font file', () => {
    mainPage.submitArtworks();
    cy.location('pathname').should('match', /\/artworks$/);
    artwork.submitAddArtwork();
    cy.location('pathname').should('match', /\/add$/);
    artworkAdd.fillArtworkNameFont(name);      
    artworkAdd.submitAddFile();
    cy.wait(2000);        
    artworkAdd.selectFileTypeFont();
    artworkAdd.fileUploadFont();
    cy.wait(3000);
    artworkAdd.submitSaveFileUpload();
    cy.wait(17000);
    artworkAdd.checkArtworkFilesTable();      
    artworkAdd.submitSaveArtwork();
    artworkAdd.checkFilesMissing();
  })

  it('Add artworks with other file', () => {
    mainPage.submitArtworks();
    cy.location('pathname').should('match', /\/artworks$/);
    artwork.submitAddArtwork();
    cy.location('pathname').should('match', /\/add$/);
    artworkAdd.fillArtworkNameOther(name);      
    artworkAdd.submitAddFile();
    cy.wait(2000);        
    artworkAdd.selectFileTypeOther();
    artworkAdd.fileUploadOther();
    cy.wait(3000);
    artworkAdd.submitSaveFileUpload();
    cy.wait(17000);
    artworkAdd.checkArtworkFilesTable();      
    artworkAdd.submitSaveArtwork();
    artworkAdd.checkFilesMissing();
  })

  it('Add artworks with PNG large file', () => {
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
    artworkAdd.checkArtworkFilesTable();
    artworkAdd.submitSaveArtwork();
  })

  it('Add artworks with ai large file', () => {
    mainPage.submitArtworks();
    cy.location('pathname').should('match', /\/artworks$/);
    artwork.submitAddArtwork();
    cy.location('pathname').should('match', /\/add$/);
    artworkAdd.fillArtworkNameAi(name);      
    artworkAdd.submitAddFile();
    cy.wait(2000);        
    artworkAdd.selectFileTypeAIPSD();
    artworkAdd.fileUploadAILarge();
    cy.wait(3000);
    artworkAdd.submitGoITLargeFile();
    artworkAdd.submitSaveFileUpload();
    cy.wait(65000);
    artworkAdd.checkArtworkFilesTable();  
    artworkAdd.submitSaveArtwork();
  })

  it('Add artworks with pdf large file', () => {
    mainPage.submitArtworks();
    cy.location('pathname').should('match', /\/artworks$/);
    artwork.submitAddArtwork();
    cy.location('pathname').should('match', /\/add$/);
    artworkAdd.fillArtworkNamePDF(name);      
    artworkAdd.submitAddFile();
    cy.wait(2000);        
    artworkAdd.selectFileTypePdf();
    artworkAdd.fileUploadPDFLarge();
    cy.wait(3000);
    artworkAdd.submitGoITLargeFile();
    artworkAdd.submitSaveFileUpload();
    cy.wait(85000);
    artworkAdd.checkArtworkFilesTable();  
    artworkAdd.submitSaveArtwork();
  })
   
  })