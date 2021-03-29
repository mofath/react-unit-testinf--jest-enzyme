import moxios from "moxios";

import { getSecretWord } from "./hookAction";

describe("moxios test", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("calls the getSecretWord call on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    const mockSetSecretWord = jest.fn();

    // see whether mock calles with right argument
    // expect(mockSetSecretWord).toHaveBeenCalled(secretWord);
  });
});
