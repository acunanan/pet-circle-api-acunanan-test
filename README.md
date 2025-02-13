# pet-circle-api-acunanan-test

Below are the steps on how you can setup and run the test for CRUD of pet resource API.

1. Clone the project from my public repository by running this command in the terminal <br>
``` git clone https://github.com/acunanan/pet-circle-api-acunanan-test.git ```

2. Install the packages from this project by running this command in the terminal <br>
``` npm install ```

3. to run specific test file you can run any of this command in the terminal <br>
``` npm run test:createNewPet ```<br>
``` npm run test:getPetById ```<br>
``` npm run test:updatePetById ```<br>
``` npm run test:deletePetById ```<br>

4. To run all specs at once you can run this command in the terminal
``` npm run test:petApi ```

To view the generated reported, you can go to this directory to open the report. <br>
``` cypress/reports/html/index.html ```

Please note that there are validations that are not enforce during testing in POST and PUT method which results to failure of some test cases.
