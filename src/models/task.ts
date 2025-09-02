import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  status?: string;
  dueDate?: Date;
  createdAt: Date;  
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'pending' },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

export const Task = mongoose.model<ITask>('Task', TaskSchema);
