module.exports = {
  async up(db) {
    const collection = await db.createCollection('users');
    await collection.createIndex({ email: 1 }, { unique: true });
  },
  async down(db) {
    const collection = await db.collection('users');
    await collection.drop();
  },
};
