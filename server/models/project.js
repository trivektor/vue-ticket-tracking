import mongoose from 'mongoose';

const Project = mongoose.model(
  'Project', 
  new mongoose.Schema(
    {
      name: String,
      description: String,
      created_by: String
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  )
);

export {Project as default};

