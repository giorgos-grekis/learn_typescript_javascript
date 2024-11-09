/**
 * Static Initialization Blocks
 */

class DatabaseConnection {
  //   static {
  //     console.log("CLASS IS LOADED!");
  //   }

  static connection;

  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    }
    if (process.env.NODE_ENV === "development") {
      this.connection = this.loadDevelopmentConnection();
    }
  }

  static loadProductionConnection() {}

  static loadDevelopmentConnection() {}
}
