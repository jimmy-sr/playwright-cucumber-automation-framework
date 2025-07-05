import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber'
import { BasePage } from '../../page-objects/base/BasePage'
import { PageManager } from '../../page-objects/base/PageManager'

export class CucumberWorld extends World {
  public pageManager: PageManager
  public basePage: BasePage
  // base url

  private url?: string

  //person

  private firstName?: string
  private lastName?: string
  private emailAddress?: string

  constructor({ attach, log, link, parameters }: IWorldOptions) {
    super({ attach, log, link, parameters })
    this.pageManager = new PageManager()
    this.basePage = this.pageManager.createBasePage()
  }

  //setters for first name etc
  setUrl(url: string) {
    this.url = url
  }
  setFirstName(firstName: string) {
    this.firstName = firstName
  }
  setLastName(lastName: string) {
    this.lastName = lastName
  }
  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress
  }

  //getter

  getUrl() {
    return this.url
  }
  getFirstName() {
    return this.firstName
  }
  getLastName() {
    return this.lastName
  }
  getEmailAddress() {
    return this.emailAddress
  }
}

setWorldConstructor(CucumberWorld)
