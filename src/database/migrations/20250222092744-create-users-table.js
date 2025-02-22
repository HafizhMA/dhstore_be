'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        default: Sequelize.fn('uuid_generate_v4'),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
        allowNull: true,
        field: 'phone_number'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      roleId: {
        type: Sequelize.UUID,
        references: {
          model: 'roles',
          key: 'id',
        },
        field: 'role_id',
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'deleted_at',
        defaultValue: null,
      },
    })

    queryInterface.addIndex('users', ['role_id'])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
