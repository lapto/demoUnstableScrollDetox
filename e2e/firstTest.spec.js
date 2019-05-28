describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should be able to scroll horizontal scrollview", async () => {
    await waitFor(element(by.id("hori_8")))
      .toBeVisible()
      .whileElement(by.id("horiScrollView"))
      .scroll(100, "right");

    await expect(element(by.id("hori_8"))).toBeVisible();
  });

  it("should be able to scroll horizontal scrollview", async () => {
    await waitFor(element(by.id("verti_14")))
      .toBeVisible()
      .whileElement(by.id("vertiScrollView"))
      .scroll(300, "down");

    await expect(element(by.id("verti_14"))).toBeVisible();
  });
});
