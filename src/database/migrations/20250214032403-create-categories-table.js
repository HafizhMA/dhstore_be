'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        default: Sequelize.fn('uuid_generate_v4'),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories')
  }
};
