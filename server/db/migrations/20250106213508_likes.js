/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
// export const up = function (knex) {
  return knex.schema.createTable('tonys_likes', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.integer('rating')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  knex.schema.dropTable('tonys_likes')
};
