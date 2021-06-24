class ArtworksAddPage {

    fillArtworkNamePNG(value) {
        const png = "artworkPNG";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(png + value);
    }

    fillArtworkNameAi(value) {
        const ai = "artworkAI";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(ai + value);
    }

    fillArtworkNamePSD(value) {
        const psd = "artworkPSD";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(psd + value);
    }

    fillArtworkNamePDF(value) {
        const pdf = "artworkPDF";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(pdf + value);
    }

    fillArtworkNameTiff(value) {
        const tiff = "artworkTiff";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(tiff + value);
    }

    fillArtworkNameFont(value) {
        const font = "artworkFont";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(font + value);
    }

    fillArtworkNameOther(value) {
        const other = "artworkOther";
        cy.xpath('//*[@data-aid="artwork-edit-name"]').type(other + value);
    }
    
    fillArtworkID() {
        const value = "id";
        cy.xpath('//*[@data-aid="artwork-edit-id"]').type(value);
    }

    fillArtworkVersion() {
        const value = "version";
        cy.xpath('//*[@data-aid="artwork-edit-version"]').type(value);
    }

    fillArArtworkDesigner() {
        const value = "designer";
        cy.xpath('//*[@data-aid="artwork-edit-designer"]').type(value);
    }

    fillBrand() {
        const value = "brand";
        cy.xpath('//*[@data-aid="artwork-edit-brand"]').eq(1).
        type(value);
    }

    checkBrandField() {
        cy.xpath('//*[@data-aid="artwork-edit-brand"]').eq(1).
        should('have.value', 'Brand');
    }

    fillSubBrand() {
        const value = "subbrand";
        cy.xpath('//*[@data-aid="artwork-edit-sub-brand"]').eq(1).
        type(value);
    }

    checkSubBrandField() {
        cy.xpath('//*[@data-aid="artwork-edit-sub-brand"]').eq(1).
        should('have.value', 'Sub-brand');
    }

    selectBaselineBrief() {
        cy.xpath('//*[@data-aid="artwork-baseline-brief"]').select('design', { force: true });
    }

    fillLicensor() {
        const value = "licensor";
        cy.xpath('//*[@data-aid="artwork-licensor"]').type(value);
    }

    checkLicensorField() {
        cy.xpath('//*[@data-aid="artwork-licensor"]').
        should('have.value', 'Licensor');
    }

    fillLicensee() {
        const value = "licensee";
        cy.xpath('//*[@data-aid="artwork-licensee"]').type(value);
    }

    checkLicenseeField() {
        cy.xpath('//*[@data-aid="artwork-licensee"]').
        should('have.value', 'Licensee');
    }

    fillMetaTags() {
        const value = "tag";
        cy.xpath('//input[@class="select2-search__field"]').eq(0).
        type(value);
    }

    fillCollections() {
        const value = "collections";
        cy.xpath('//input[@class="select2-search__field"]').eq(1).
        type(value);
    }

    fillBulletPoints() {
        const value = "bullet";
        cy.xpath('//*[@data-aid="artwork-bullet-points"]').
        type(value);
    }

    checkBulletPointField() {
        cy.get('input[name="bullet"]').
        should('contain', 'Bullet points');
    }

    submitAddAnotherPoints() {        
        cy.xpath('//*[@data-aid="artwork-add-bullet-points"]').click();
    }

    submitDeleteBulletePoints() {        
        cy.xpath('//*[@data-aid="artwork-delete-bullet-points"]').last().
        click();
    }

    fillArtworkDescription() {
        const value = "some text";
        cy.xpath('//*[@data-aid="artwork-description"]').type(value);
    }

    checkDescriptionField() {
        cy.xpath('//*[@data-aid="artwork-description"]').
        should('contain', 'Stage description');
    }

    selectArtworkStyleGuide() {
        cy.xpath('//*[@data-aid="artwork-style-guide"]').select('style', { force: true });
    }

    fillPantoneName() {
        const value = "test";
        cy.xpath('//*[@data-aid="artwork-pantons-name"]').type(value);
    }

    fillPantoneNumber() {
        const value = "1111";
        cy.xpath('//*[@data-aid="artwork-pantons-number"]').type(value);
    }

    fillPantoneHexadecimal() {
        const value = "11FFF";
        cy.xpath('//*[@data-aid="artwork-pantons-hexadecimal"]').type(value);
    }

    submitAddPantone() {        
        cy.xpath('//*[@data-aid="artwork-add-pantons"]').click();
    }

    submitDeletePantone() {        
        cy.xpath('//*[@data-aid="artwork-delete-pantons"]').last().
        click();
    }

    submitAddFile() {        
        cy.xpath('//*[@data-aid="artwork-add-file"]').click();
    }

    selectFileTypePng() {
        cy.get('select[name="fileType"]').select('1', { force: true });
    }

    selectFileTypeAIPSD() {
        cy.get('select[name="fileType"]').select('12', { force: true });
    }

    selectFileTypePdf() {
        cy.get('select[name="fileType"]').select('3', { force: true });
    }

    selectFileTypeTiff() {
        cy.get('select[name="fileType"]').select('14', { force: true });
    }

    selectFileTypeFont() {
        cy.get('select[name="fileType"]').select('11', { force: true });
    }

    selectFileTypeOther() {
        cy.get('select[name="fileType"]').select('4', { force: true });
    }

    fileUploadPNG() {        
        const filePatch = 'upload/1.png';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadPNGLarge() {        
        const filePatch = 'large/7.png';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadAI() {        
        const filePatch = 'upload/1.ai';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadAILarge() {        
        const filePatch = 'large/3.ai';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadPSD() {        
        const filePatch = 'upload/inner.psd';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadPDF() {        
        const filePatch = 'upload/1.pdf';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadPDFLarge() {        
        const filePatch = 'large//5.pdf';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadTiff() {        
        const filePatch = 'upload/1.tiff';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadFont() {        
        const filePatch = 'upload/1.ttf';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    fileUploadOther() {        
        const filePatch = 'upload/2.docx';
        cy.xpath('//div[@class="fileuploader-thumbnails-input-inner"]/span/i').attachFile(filePatch, { subjectType: 'drag-n-drop' });        
    }

    submitSaveFileUpload() {
        cy.xpath('//div[@class="modal-footer"]/button').first().
        should('be.visible').
        click({ force: true });
    }

    submitGoITLargeFile() {
        cy.get('.bootbox-accept').last().    
        click({ force: true });
    }

    submitSaveArtwork() {        
        cy.xpath('//*[@data-aid="button-save"]').        
        click({ force: true });
    }

    checkContainsMultipleBoards() {
        cy.contains('Contains multiple boards');
        cy.get('.bootbox-accept').first().
        click({ force: true });
    }

    checkFilesMissing() {
        cy.contains('Files missing');
        cy.contains('Got it!');
    }

    selectTrims() {
        cy.xpath('//*[@data-aid="artwork-choose-trim"]').
        should('be.visible').
        select('test_trim', { force: true });
    }

    fillTrimsComments() {
        const value = "test";
        cy.xpath('//*[@data-aid="artwork-trim-comments"]').type(value);
    }

    submitAddAnotherTrims() {        
        cy.xpath('//*[@data-aid="artwork-add-another-trim"]').click();
    }

    submitDeleteTrim() {        
        cy.xpath('//*[@data-aid="artwork-delete-trim"]').last().
        click();
    }

    selectStamps() {
        cy.xpath('//*[@data-aid="artwork-choose-stamp"]').
        should('be.visible').
        select('test_stamps', { force: true });
    }

    fillStampsComments() {
        const value = "test";
        cy.xpath('//*[@data-aid="artwork-stamp-comments"]').type(value);
    }

    submitAddAnotherStamps() {        
        cy.xpath('//*[@data-aid="artwork-add-another-stamp"]').click();
    }

    submitDeleteStamps() {        
        cy.xpath('//*[@data-aid="artwork-delete-stamp"]').last().
        click();
    }

    submitEditDistribution() {        
        cy.xpath('//*[@data-aid="artwork-distribution-edit"]').last().
        click();
    }

    checkSpecificRegions() {
        cy.xpath('//*[@data-aid="distribution-specific-regions"]').last().
        click({ force: true });
    }

    checkEuropeRegions() {
        cy.xpath('//*[@name="Europe"]').check({ force: true });
    }

    submitSaveDistribution() {        
        cy.xpath('//div[@class="modal-footer"]/button').first().
        click();
    }

    checkArtworkFilesTable() {        
        cy.get('#dtgSourceTbl').getTable().should(tableData => {
            expect(tableData).to.be.not.empty
        })
    }

    submitEditBlanks() {
        cy.xpath('//*[@data-aid="artwork-blank-edit"]').
        click({ force: true });
    }
}
export default ArtworksAddPage;