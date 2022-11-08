# GoJs + Testcafe double click repro project

In June of 2021 we ran into an issue with using Testcafe and GoJs. Specifically
that when double clicking on GoJs elements in Testcafe, the GoJs events do not
fire, though the DOM events do. I opened an issue with GoJs [here](https://forum.nwoods.com/t/double-click-not-working-in-testcafe-tests/14654/6)
and they were unable to provide a solution from their end. However, when using
a different E2E framework, Cypress in this case, the double click does trigger
the GoJs handler. This has happened in all of the browsers that I've tried,
which includes chrome, firefox, and safari.

Here are the versions that were used the first time this issue came up:

- testcafe - 1.14.2
- nodeJS - 14.16.0
- chrome - 90
- firefox - 88
- safari - 14.1.1
- macOS - 10.15.7

The issue has come up again as of November 2022, with updated versions:

- testcafe - 2.0.1, 2.0.2
- nodeJS - 16.17.1
- chrome - 106, 107
- firefox - 105
- safari - 16.1
- macOS - 12.6
- gitlab-runner - 15.2.0

## Repro Steps

### Testcafe

1. Clone this repo
2. Run `npm install`
3. Run `npm start` in one terminal window
4. In a new terminal window, run `npm run testcafe`
5. Open the browser console while the test is starting (I've included timeouts to give time for this)
6. Observe that `t.doubleClick` activates a DOM `dblclick` event, but no `ObjectDoubleClicked` event is fired from GoJs.

### Cypress

1. Same first 3 steps as above
2. In a new terminal window, run `npm run cypress` - This will open the Cypress UI
3. Select the test from the list which will open a chrome window
4. Open the console
5. Observe that the `ObjectDoubleClicked` event is fired as well as the `dblclick` DOM event
