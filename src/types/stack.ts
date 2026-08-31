export interface StackItem {
  id: string | number;
  title: string;
  icon: string;
}

export interface StackCategory {
  title: string;
  stacks: StackItem[];
}
