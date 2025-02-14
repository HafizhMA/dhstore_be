'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'products',
        'is_additional', {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        }
      ),
      queryInterface.addColumn(
        'products',
        'active', {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('products', 'is_additional'),
      queryInterface.removeColumn('products', 'active'),
    ])
  }
};
