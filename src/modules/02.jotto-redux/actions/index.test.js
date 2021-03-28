import moxios from "moxios";

import { storeFactory } from "../../../testUtils";
import { getSecretWord } from ".";
import reducer from "../reducers";

describe("getSecretWord action creator", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("add response word to state", () => {
    const secretWord = "party";
    const store = storeFactory(reducer);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    store
      .dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
      .catch((error) => console.log(error.message));
  });
});
