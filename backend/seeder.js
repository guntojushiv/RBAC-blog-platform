const mongoose = require('mongoose');
const Post = require('./models/Post');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const user = await mongoose.connection.db.collection('users').findOne();
    if (!user) {
      console.log('No users found, creating a default admin user...');
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@example.com',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin',
      });
      await adminUser.save();
      user = adminUser;
    }
    const userId = user._id.toString();

    await Post.deleteMany();
    await Post.insertMany([
      { title: 'Sample Post 1', content: 'This is a sample post.', author: userId },
      { title: 'Sample Post 2', content: 'Another sample post.', author: userId },
    ]);
    console.log('Posts seeded with user:', userId);
    mongoose.connection.close();
  })
  .catch((err) => console.error('Seeder error:', err));