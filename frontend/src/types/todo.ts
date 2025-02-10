export interface Todo {
    _id?: string; // Optional because it's only available after creation
    title: string;
    description: string;
    isCompleted?: boolean;
  }
  