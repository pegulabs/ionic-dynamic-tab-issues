Demo app for showing a couple of problems with dynamic tabs in an ionic application. This is a simple app based on the react starter app
with tabs. I've added some state in the App component that indicates whether the third tab should be displayed or not and also a clickable
piece of text in the second tab that turns on the third tab. Note that:

* The app crashes when you enable the third tab with an error about the `originalHref` in the tab button. This is fixed by my PR [here](https://github.com/ionic-team/ionic/pull/21096)

* If you hack it to add that fix, you'll note that after adding the third tab, clicking on it doesn't do anything. I haven't figured this one out yet, but it seems like it must be that the routing components are not reinitializing when the new route is added.
