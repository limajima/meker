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
    return queryInterface.bulkInsert('Medicines', [
      {
        name: "amlodiphine",
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "panadol",
        stock: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "cataflam",
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "imodium",
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "paracetamol",
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Medicines', null, {})
  }
};
