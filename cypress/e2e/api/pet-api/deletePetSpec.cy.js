import { setRequestField } from "../../../utils/helper.js";

describe('DELETE /pet by ID - API Test', () => {
    before (() => {
        cy.fixture("createPetTemplate").then((userData) => {
            setRequestField(userData, 'id', 102);
            setRequestField(userData, 'category.id', 102); 
            setRequestField(userData, 'category.name', 'Pet Circle 102'); 
            setRequestField(userData, 'name', 'Pet Circle 103'); 
            cy.createNewPet(userData, 200);
        });
    });

    it('should delete a pet data by id and return a 200 status code', () => {
    cy.get('@petId').then((petId) => {
        cy.deletePetById(petId, 200)
        });
    });
    
    it('should not be able to delete a pet data when petId is not existing and return a 404 status code', () => {
        cy.deletePetById(1111111, 404)
    });
});