/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tonys_likes').del()
  await knex('tonys_likes').insert([
    { 
      id: 1, 
      name: 'Bikkies',
      rating: '10'
    },
    { 
      id: 2,
      name: 'Going to bed',
      rating: '1'
    },
    { 
      id: 3, 
      name: 'Car rides',
      rating: '10'
    },
  ])
}
