'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Patients', [
      {
        name: "Bagus",
        age: 22,
        comorbid: "",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Budi",
        age: 40,
        comorbid: "diabetes",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Retno",
        age: 54,
        comorbid: "hipertensi",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Solihin",
        age: 30,
        comorbid: "",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}) 
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Patients', null, {})
  }
};
