'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.addColumn(
        'products',
        'category_id', {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'categories',
            key: 'id'
          }
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.removeColumn('products', 'category_id')
    ])
  }
};
