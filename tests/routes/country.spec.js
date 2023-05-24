/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");
const agent = session(app);

describe("Country routes", () => {
  it("should get Argentina by id", () =>
    () => {agent
      .get("/countries/ARG")
      .expect(200)
      .then((res) => {
        expect(res.body.name).to.equal("Argentine Republic");
        expect(res.body.id).to.equal("ARG");
        expect(res.body.image).to.equal(
          "https://flagcdn.com/w320/ar.png"
        );
        expect(res.body.continent).to.equal("Americas");
        expect(res.body.capital).to.equal("Buenos Aires");
        expect(res.body.subregion).to.equal("South America");
        expect(res.body.area).to.equal("2780400");
        expect(res.body.population).to.equal(45376763);
      })});
});
