Cypress.Commands.add('createNewPet', (userData, responseCode) => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: userData,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      // Assertions or actions after the request
      if (responseCode == 200) {
        expect(response.status).to.eq(responseCode)
        expect(response.body.id).to.eq(userData.id)
        expect(response.body.name).to.eq(userData.name)
        expect(response.body.category.id).to.eq(userData.category.id)
        expect(response.body.category.name).to.eq(userData.category.name)
        expect(response.body.photoUrls[0]).to.eq(userData.photoUrls[0])
        expect(response.body.tags[0].id).to.eq(userData.tags[0].id)
        expect(response.body.tags[0].name).to.eq(userData.tags[0].name)
        expect(response.body.status).to.eq(userData.status)
        cy.wrap(response.body.id).as('petId')
      }
      else {
        expect(response.status).to.eq(responseCode)
      }    
    });
  });

Cypress.Commands.add('getPetById', (petId, responseCode) => {
    cy.request({
            method:'GET',
            url:`https://petstore.swagger.io/v2/pet/${petId}`,
            failOnStatusCode: false
        }).then((response) => {
        // Assertions or actions after the request
            if (response.status == 200) {
                expect(response.status).to.eq(responseCode)
                expect(response.body.id).to.eq(102)
                expect(response.body.category.name).to.eq('Pet Circle 102')
                expect(response.body.name).to.eq('Pet Circle 103')
            }    
            else {
                expect(response.status).to.eq(responseCode)
                expect(response.body.type).to.eq('error')
                expect(response.body.message).to.eq('Pet not found')
            }   
        });
  });

Cypress.Commands.add('deletePetById', (petId, responseCode) => {
    cy.request({
            method:'DELETE',
            url:`https://petstore.swagger.io/v2/pet/${petId}`,
            failOnStatusCode: false
        }).then((response) => {
        // Assertions or actions after the request
            if (response.status == 200) {
                expect(response.status).to.eq(responseCode)
            }    
            else {
                expect(response.status).to.eq(responseCode)
            }   
        });
});

Cypress.Commands.add('updatePetById', (userData, responseCode) => {
    cy.request({
      method: 'PUT',
      url:`https://petstore.swagger.io/v2/pet`,
      body: userData,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      // Assertions or actions after the request
      if (responseCode == 200) {
        expect(response.status).to.eq(responseCode)
        expect(response.body.id).to.eq(userData.id)
        expect(response.body.name).to.eq(userData.name)
        expect(response.body.category.id).to.eq(userData.category.id)
        expect(response.body.category.name).to.eq(userData.category.name)
        expect(response.body.photoUrls[0]).to.eq(userData.photoUrls[0])
        expect(response.body.tags[0].id).to.eq(userData.tags[0].id)
        expect(response.body.tags[0].name).to.eq(userData.tags[0].name)
        expect(response.body.status).to.eq(userData.status)
      }
      else {
        expect(response.status).to.eq(responseCode)
      }    
    });
  });