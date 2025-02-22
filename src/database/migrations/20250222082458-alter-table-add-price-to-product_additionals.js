'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.addColumn(
        'product_additionals',
        'price', {
          type: Sequelize.BIGINT,
          allowNull: true
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.removeColumn('product_additionals', 'price')
    ])
  }
};
