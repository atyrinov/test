import SignIn from '../../pages/login/SignIn';
import MainPage from '../../pages/main/mainPage';
import ArtworksMainPage from '../../pages/artworks/artworksMainPage';
import ArtworkDetailPage from '../../pages/artworks/artworkDetailPage';

const signIn = new SignIn();
const mainPage = new MainPage();
const artwork = new ArtworksMainPage();
const detail = new ArtworkDetailPage();

describe('Artworks check info page', () => {
  
  beforeEach(() => {
    signIn.signIn();
  });
    
    it('Check info page', () => {
       mainPage.submitArtworks();
       cy.location('pathname').should('match', /\/artworks$/);
       artwork.checkArtworkItemForInfoPage();
       cy.wait(2000);
       detail.checkArtworkDetailEdit();
       detail.checkArtworkDetailApproveReject();
       detail.checkArtworkDetailDownloadFiles();
       detail.checkArtworkDetailDelete();
       detail.checkArtworkDetailCreated();
       detail.checkArtworkDetailArtworkId();
       detail.checkArtworkFilesTable();
       detail.checkBlanksTable();                   
    })
   
  })