describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Play button and counter should be visible', async () => {
    await expect(element(by.text('Play'))).toBeVisible();
    await expect(element(by.text('Count: 0'))).toBeVisible();
  });

  it('should increment counter after tap', async () => {
    await element(by.id('play-button')).tap();
    await expect(element(by.text('Count: 1'))).toBeVisible();
  });
});
