import { setRequestField } from "../../../utils/helper.js";

describe('PUT /pet API Test', () => {
  beforeEach (() => {
    cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', 102);
        setRequestField(userData, 'category.id', 102); 
        setRequestField(userData, 'category.name', 'Pet Circle 102'); 
        setRequestField(userData, 'name', 'Pet Circle 103'); 
        cy.createNewPet(userData, 200);
    });
  });
  
  it('should update pet data and return a 200 status code', () => {
    cy.get('@petId').then((petId) => {
      cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', petId);
        setRequestField(userData, 'name', 'Pet Circle 106'); 
        setRequestField(userData, 'category.id', petId); 
        setRequestField(userData, 'category.name', 'Pet Circle 105'); 
        setRequestField(userData, 'status', 'unavailable'); 
        cy.updatePetById(userData, 200);

        });
      }); 
    });

  it('should update pet data when status is available return a 200 status code', () => {
      cy.get('@petId').then((petId) => {
        cy.fixture("createPetTemplate").then((userData) => {
          setRequestField(userData, 'id', petId);
          setRequestField(userData, 'name', 'Pet Circle 106'); 
          setRequestField(userData, 'category.id', petId); 
          setRequestField(userData, 'status', 'available'); 
          cy.updatePetById(userData, 200);
  
          });
        }); 
    });
    
  it('should update pet data when status is pending return a 200 status code', () => {
      cy.get('@petId').then((petId) => {
        cy.fixture("createPetTemplate").then((userData) => {
          setRequestField(userData, 'id', petId);
          setRequestField(userData, 'name', 'Pet Circle 106'); 
          setRequestField(userData, 'category.id', petId); 
          setRequestField(userData, 'status', 'pending'); 
          cy.updatePetById(userData, 200);
  
          });
        }); 
    });

  it('should update pet data when status is sold return a 200 status code', () => {
    cy.get('@petId').then((petId) => {
      cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', petId);
        setRequestField(userData, 'name', 'Pet Circle 106'); 
        setRequestField(userData, 'category.id', petId); 
        setRequestField(userData, 'status', 'sold'); 
        cy.updatePetById(userData, 200);

        });
      }); 
    });

  it('should not update pet data when status is invalid return a 400 status code', () => {
    cy.get('@petId').then((petId) => {
      cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', petId);
        setRequestField(userData, 'name', 'Pet Circle 106'); 
        setRequestField(userData, 'category.id', petId); 
        setRequestField(userData, 'status', 'invalid'); 
        cy.updatePetById(userData, 400);

        });
      }); 
    });

  it('should not update a pet data when id is not integer', () => {
    cy.get('@petId').then((petId) => {
      cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', "abc123");
        cy.updatePetById(userData, 500);

        });
      }); 
    });

    it('should not update a pet data when category.id is not integer', () => {
      cy.get('@petId').then((petId) => {
        cy.fixture("createPetTemplate").then((userData) => {
          setRequestField(userData, 'category.id', "abc123");
          cy.updatePetById(userData, 500);
  
          });
        }); 
      });

  //the validation for this scenario is not working marking as defect in the api
  it('should not update a pet data when name is null', () => {
    cy.get('@petId').then((petId) => {
      cy.fixture("createPetTemplate").then((userData) => {
        setRequestField(userData, 'id', petId);
        setRequestField(userData, 'category.id', petId);
        setRequestField(userData, 'name', null);
        cy.updatePetById(userData, 400);
        });
      }); 
    });

//the validation for this scenario is not working marking as defect in the api
it('should not update a pet data when photoUrls is null', () => {
  cy.get('@petId').then((petId) => {
    cy.fixture("createPetTemplate").then((userData) => {
      setRequestField(userData, 'id', petId);
      setRequestField(userData, 'category.id', petId);
      setRequestField(userData, 'photoUrls', null);
      cy.updatePetById(userData, 400);
      });
    }); 
  });
   
});
