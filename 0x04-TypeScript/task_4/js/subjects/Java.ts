import { Subjects } from "./Subject";

declare module Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
