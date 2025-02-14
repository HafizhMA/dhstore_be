'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_additionals', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        default: Sequelize.fn('uuid_generate_v4'),
      },
      productId:{
        type: Sequelize.UUID,
        field: 'product_id',
        allowNull:false,
        references:{
          model: 'products',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_additionals')
  }
};
