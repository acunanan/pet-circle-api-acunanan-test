import { setRequestField } from "../../../utils/helper.js";

describe('POST /pet API Test', () => {
  
  it('should create a new pet and return a 200 status code', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'id', 102);
      setRequestField(userData, 'category.id', 102); 
      setRequestField(userData, 'category.name', 'Pet Circle 102'); 
      setRequestField(userData, 'name', 'Pet Circle 103'); 
      cy.createNewPet(userData, 200);
    });
  });

  it('should create a new pet status is pending return a 200 status code', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'status', 'pending');
      cy.createNewPet(userData, 200);
    });
  });

  it('should create a new pet status is sold return a 200 status code', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'status', 'sold');
      cy.createNewPet(userData, 200);
    });
  });

  it('should create a new pet status is available return a 200 status code', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'status', 'available');
      cy.createNewPet(userData, 200);
    });
  });
   
  //the validation for this not working marking as defect in the api
  it('should create a new pet status is invalid return a 400 status code', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'status', 'invalid');
      cy.createNewPet(userData, 400);
    });
  });

   it('should not create a new pet when id is not integer', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'id',"abc124"); 
      cy.createNewPet(userData, 500);
    });
   });

   it('should not create a new pet when category.id is not integer', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'category.id', "abc"); 
      cy.createNewPet(userData, 500);
    });
   });

   //the validation for this scenario is not working marking as defect in the api
   it('should not create a new pet when name is null', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'name', null); 
      cy.createNewPet(userData, 400);
    });
   });

   //the validation for this scenario is not working marking as defect in the api
   it('should not create a new pet when photoUrls is null', () => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'photoUrls', null); 
      cy.createNewPet(userData, 400);
    });
   });
});
