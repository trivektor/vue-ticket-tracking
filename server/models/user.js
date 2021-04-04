import mongoose from 'mongoose';

const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      first_name: String,
      last_name: String,
      email: String,
      username: String,
      password: String,
      user_id: String,
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  )
);

export {User as default};