module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("song_ragas", [
      {
        song_id: 28,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 29,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 30,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 31,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 32,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 33,
        raga_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 34,
        raga_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 35,
        raga_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 36,
        raga_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 37,
        raga_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 38,
        raga_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 39,
        raga_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 40,
        raga_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 41,
        raga_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 42,
        raga_id: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 43,
        raga_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 44,
        raga_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 45,
        raga_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 46,
        raga_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 47,
        raga_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 48,
        raga_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 49,
        raga_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 50,
        raga_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 51,
        raga_id: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 52,
        raga_id: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 53,
        raga_id: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 54,
        raga_id: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 55,
        raga_id: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 56,
        raga_id: 34,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 57,
        raga_id: 34,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 58,
        raga_id: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 59,
        raga_id: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 60,
        raga_id: 31,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 61,
        raga_id: 31,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 62,
        raga_id: 36,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 63,
        raga_id: 36,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        song_id: 64,
        raga_id: 37,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("song_ragas", null, {});
  },
};