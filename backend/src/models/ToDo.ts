import mongoose, { Schema, Document } from 'mongoose';

interface IToDo extends Document {
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ToDoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IToDo>('ToDo', ToDoSchema);
