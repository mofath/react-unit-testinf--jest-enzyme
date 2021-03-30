import moxios from "moxios";
import { getSecretWord } from "./hookAction";

describe("moxios test", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("calls the getSecretWord call on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // create mock for callback arg
    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    // see whether mock was run with the correct argument
    // expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
