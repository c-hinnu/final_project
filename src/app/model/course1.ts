import { Topic } from "../Topic";

export class Course1 {
    title: string;
    description: string;
    topics: Topic[]=[];
  
    constructor(title: string, description: string,topics:Topic[]) {
      this.title = title;
      this.description = description;
      this.topics=topics;
      
    }
  }