import * as isActive from "./activity-functions";

describe("activity functions", () => {
  it("verifies that the nav is always active", () => {
    expect(isActive.nav(location)).toBe(true);
  });
});
