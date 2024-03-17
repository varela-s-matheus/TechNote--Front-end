export class Note {
  id: number = 0;
  title: string = "";
  content: string = "";
  author: string = "";
  style: string = "";
  type: string = "";
  dateNote?: Date;
  status: boolean = false;
}


export interface Note {
  id: number;
  title: string;
  content: string;
  author: string;
  style: string;
  type: string;
  dateNote?: Date;
  status: boolean;
}
