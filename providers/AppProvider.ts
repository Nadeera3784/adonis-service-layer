import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
    
export default class AppProvider {

  protected app: ApplicationContract;
        
  constructor(app: ApplicationContract) {
      this.app = app;
  }

  public register () {
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
