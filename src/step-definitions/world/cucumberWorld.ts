import { setWorldConstructor, World } from '@cucumber/cucumber'

export class CucumberWorld extends World {
  // base url

  private url?: string

  //person

  private firstName?: string
  private lastName?: string
  private emailAddress?: string

  //setters for first name etc
  setUrl(url: string) {
    this.url = url
  }
  setFirstName(firstName: string) {
    this.firstName = firstName
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
  }

  //getter

  getUrl() {
    return this.url;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getEmailAddress() {
    return this.emailAddress;
  }

}

setWorldConstructor(CucumberWorld)
