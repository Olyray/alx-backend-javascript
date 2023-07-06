class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  // Getter for firstName
  getFirstName(): string {
    return this.firstName;
  }

  // Getter for lastName
  getLastName(): string {
    return this.lastName;
  }

  // Getter for fullTimeEmployee
  isFullTimeEmployee(): boolean {
    return this.fullTimeEmployee;
  }

  // Getter for yearsOfExperience
  getYearsOfExperience(): number | undefined {
    return this.yearsOfExperience;
  }

  // Getter for location
  getLocation(): string {
    return this.location;
  }

  // Method to add any additional attribute dynamically
  addAttribute(attributeName: string, attributeValue: any): void {
    this[attributeName] = attributeValue;
  }
}

// Create a new Teacher instance
const teacher = new Teacher("John", "Doe", true, "New York");

// Accessing initial attributes
console.log(teacher.getFirstName()); // Output: John
console.log(teacher.getLastName()); // Output: Doe
console.log(teacher.isFullTimeEmployee()); // Output: true
console.log(teacher.getYearsOfExperience()); // Output: undefined
console.log(teacher.getLocation()); // Output: New York

// Adding a new attribute dynamically
teacher.addAttribute("contract", true);

// Accessing the dynamically added attribute
console.log(teacher["contract"]); // Output: true
