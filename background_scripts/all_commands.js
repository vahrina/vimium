// This is the order they will be shown in the help dialog.
//
// Properties:
// - advanced: advanced commands are not shown in the help dialog by default.
// - background: whether this command has to be run by the background page.
// - desc: shown in the help dialog and command listing page.
// - details: extra help information that will only be shown on the command listing page.
// - group: commands are displayed in groups in the help dialog and command listing.
// - noRepeat: whether this command can be used with a count key prefix.
// - repeatLimit: the number of allowed repetitions of this command before the user is prompted for
//   confirmation.
// - topFrame: whether this command must be run only in the top frame of a page.
//
const allCommands = [
  //
  // Navigation
  //

  {
    name: "scrollDown",
    desc: "scroll down",
    group: "navigation",
  },

  {
    name: "scrollUp",
    desc: "scroll up",
    group: "navigation",
  },

  {
    name: "scrollToTop",
    desc: "scroll to the top of the page",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "scrollToBottom",
    desc: "scroll to the bottom of the page",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "scrollPageDown",
    desc: "scroll a half page down",
    group: "navigation",
  },

  {
    name: "scrollPageUp",
    desc: "scroll a half page up",
    group: "navigation",
  },

  {
    name: "scrollFullPageDown",
    desc: "scroll a full page down",
    group: "navigation",
  },

  {
    name: "scrollFullPageUp",
    desc: "scroll a full page up",
    group: "navigation",
  },

  {
    name: "scrollLeft",
    desc: "scroll left",
    group: "navigation",
  },

  {
    name: "scrollRight",
    desc: "scroll right",
    group: "navigation",
    advanced: true,
  },

  {
    name: "scrollToLeft",
    desc: "scroll all the way to the left",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "scrollToRight",
    desc: "scroll all the way to the right",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "reload",
    desc: "reload the page",
    group: "navigation",
    background: true,
    options: {
      hard: "Perform a hard reload, forcing the browser to bypass its cache.",
    },
    noRepeat: true,
  },

  {
    name: "copyCurrentUrl",
    desc: "copy the current url to the clipboard",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "openCopiedUrlInCurrentTab",
    desc: "open the clipboard's url in the current tab",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "openCopiedUrlInNewTab",
    desc: "open the clipboard's url in a new tab",
    group: "navigation",
    noRepeat: true,
    options: {
      position: "Where to place the tab in the tab bar. " +
        "One of `start`, `before`, `after`, `end`. `after` is the default.",
    },
  },

  {
    name: "goUp",
    desc: "go up the url hierarchy",
    group: "navigation",
    advanced: true,
  },

  {
    name: "goToRoot",
    desc: "go to the root of current url hierarchy",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "enterInsertMode",
    desc: "enter insert mode",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "enterVisualMode",
    desc: "enter visual mode",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "enterVisualLineMode",
    desc: "enter visual line mode",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "passNextKey",
    desc: "pass the next key to the page",
    options: {
      normal: "Optional. Enter Vimium's normal mode, and ignore any defined pass keys.",
    },
    group: "navigation",
    advanced: true,
  },

  {
    name: "focusInput",
    desc: "focus the first text input on the page",
    group: "navigation",
    noRepeat: true,
  },

  {
    name: "LinkHints.activateMode",
    desc: "open a link in the current tab",
    options: {
      action: "one of `hover`, `focus`, `copy-text`. When a link is selected, " +
        "instead of clicking on the link, perform the specified action.",
    },
    group: "navigation",
    advanced: true,
  },

  {
    name: "linkhints.activatemodetoopeninnewtab",
    desc: "open a link in a new tab",
    group: "navigation",
  },

  {
    name: "LinkHints.activateModeToOpenInNewForegroundTab",
    desc: "open a link in a new tab & switch to it",
    group: "navigation",
  },

  {
    name: "LinkHints.activateModeWithQueue",
    desc: "open multiple links in a new tab",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "LinkHints.activateModeToDownloadLink",
    desc: "download link url",
    group: "navigation",
    advanced: true,
  },

  {
    name: "LinkHints.activateModeToOpenIncognito",
    desc: "open a link in incognito window",
    group: "navigation",
    advanced: true,
  },

  {
    name: "LinkHints.activateModeToCopyLinkUrl",
    desc: "copy a link url to the clipboard",
    group: "navigation",
    advanced: true,
  },

  {
    name: "goPrevious",
    desc: "follow the link labeled previous or <",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "goNext",
    desc: "follow the link labeled next or >",
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "nextFrame",
    desc: "select the next frame on the page",
    group: "navigation",
    background: true,
  },

  {
    name: "mainFrame",
    desc: "select the page's main/top frame",
    group: "navigation",
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "marks.activatecreatemode",
    desc: "create a new mark",
    details: "Do this by typing the key bound to this command, and then a letter. " +
      "This will set a mark bound to that letter. Lowercase letters are local marks and uppercase " +
      "letters are global marks.",
    options: {
      swap: "Swap global and local marks. This option exists because in a browser, global marks " +
        "are generally more useful than local marks, and so it may be desirable to make lowercase " +
        "letters represent global marks rather than local marks.",
    },
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "Marks.activateGotoMode",
    desc: "jump to a mark",
    options: {
      swap: "Swap global and local marks. This option exists because in a browser, global marks " +
        "are generally more useful than local marks, and so it may be desirable to make lowercase " +
        "letters represent global marks rather than local marks.",
    },
    group: "navigation",
    advanced: true,
    noRepeat: true,
  },

  //
  // Vomnibar
  //

  {
    name: "Vomnibar.activate",
    desc: "open url, bookmark or history entry",
    options: {
      query: "The text to prefill the Vomnibar with.",
      keyword: 'The keyword of a search engine defined in the "Custom search engines" ' +
        "section of the Vimium Options page. The Vomnibar will be scoped to use that search engine.",
    },
    group: "vomnibar",
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateInNewTab",
    desc: "open url, bookmark or history entry in a new tab",
    group: "vomnibar",
    options: {
      query: "The text to prefill the Vomnibar with.",
      keyword: 'The keyword of a search engine defined in the "Custom search engines" ' +
        "section of the Vimium Options page. The Vomnibar will be scoped to use that search engine.",
    },
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateBookmarks",
    desc: "open a bookmark",
    group: "vomnibar",
    options: {
      query: "The text to prefill the Vomnibar with.",
    },
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateBookmarksInNewTab",
    desc: "open a bookmark in a new tab",
    group: "vomnibar",
    options: {
      query: "The text to prefill the Vomnibar with.",
    },
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateTabSelection",
    desc: "search through your open tabs",
    group: "vomnibar",
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateEditUrl",
    desc: "edit the current url",
    group: "vomnibar",
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateEditUrlInNewTab",
    desc: "edit the current url and open in a new tab",
    group: "vomnibar",
    topFrame: true,
    noRepeat: true,
  },

  {
    name: "Vomnibar.activateCommandSelection",
    desc: "execute a vimium command",
    group: "vomnibar",
    topFrame: true,
    noRepeat: true,
  },

  //
  // Find
  //

  {
    name: "enterFindMode",
    desc: "enter find mode.",
    group: "find",
    noRepeat: true,
  },

  {
    name: "performFind",
    desc: "cycle forward to the next find match",
    group: "find",
  },

  {
    name: "performBackwardsFind",
    desc: "cycle backward to the previous find match",
    group: "find",
  },

  {
    name: "findSelected",
    desc: "find the selected text",
    group: "find",
    advanced: true,
  },

  {
    name: "findSelectedBackwards",
    desc: "find the selected text, searching backwards",
    group: "find",
    advanced: true,
  },

  //
  // History
  //

  {
    name: "goBack",
    desc: "go back in history",
    group: "history",
  },

  {
    name: "goForward",
    desc: "go forward in history",
    group: "history",
  },

  //
  // Tabs
  //

  {
    name: "createtab",
    desc: "create new tab",
    options: {
      "(any url)": "Open this URL, rather than the browser's new tab page. " +
        "E.g.: `map X createTab https://example.com`",
      window: "Create the tab in a new window",
      incognito: "Create the tab in an incognito window",
      position: "Where to place the tab in the tab bar. " +
        "One of `start`, `before`, `after`, `end`. `after` is the default.",
    },
    group: "tabs",
    background: true,
    repeatlimit: 20,
  },

  {
    name: "previousTab",
    desc: "go one tab left",
    group: "tabs",
    background: true,
  },

  {
    name: "nextTab",
    desc: "go one tab right",
    group: "tabs",
    background: true,
  },

  {
    name: "visitPreviousTab",
    desc: "go to previously-visited tab",
    group: "tabs",
    background: true,
  },

  {
    name: "firstTab",
    desc: "go to the first tab",
    group: "tabs",
    background: true,
    noRepeat: true,
  },

  {
    name: "lastTab",
    desc: "go to the last tab",
    group: "tabs",
    background: true,
    noRepeat: true,
  },

  {
    name: "duplicateTab",
    desc: "duplicate current tab",
    group: "tabs",
    background: true,
    repeatLimit: 20,
  },

  {
    name: "togglePinTab",
    desc: "pin or unpin current tab",
    group: "tabs",
    background: true,
    noRepeat: true,
  },

  {
    name: "toggleMuteTab",
    desc: "mute or unmute current tab",
    options: {
      all: "Mute all tabs.",
      other: "Mute every tab except the current one.",
    },
    group: "tabs",
    background: true,
    noRepeat: true,
  },

  {
    name: "removeTab",
    desc: "close current tab",
    group: "tabs",
    background: true,
    // Don't close (in one command invocation) more than the number of tabs that can be re-opened by
    // the browser.
    repeatLimit: chrome.sessions?.MAX_SESSION_RESULTS || 25,
  },

  {
    name: "restoreTab",
    desc: "restore closed tab",
    group: "tabs",
    background: true,
    repeatLimit: 20,
  },

  {
    name: "moveTabToNewWindow",
    desc: "move tab to new window",
    group: "tabs",
    advanced: true,
    background: true,
    noRepeat: true,
  },

  {
    name: "closeTabsOnLeft",
    desc: "close tabs on the left",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "closeTabsOnRight",
    desc: "close tabs on the right",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "closeOtherTabs",
    desc: "close all other tabs",
    group: "tabs",
    advanced: true,
    background: true,
    noRepeat: true,
  },

  {
    name: "moveTabLeft",
    desc: "move tab to the left",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "moveTabRight",
    desc: "move tab to the right",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "setZoom",
    desc: "set zoom",
    group: "tabs",
    advanced: true,
    background: true,
    options: {
      level: "The zoom level. This can be a range of [0.25, 5.0]. 1.0 is the default.",
    },
    noRepeat: true,
  },

  {
    name: "zoomIn",
    desc: "zoom in",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "zoomOut",
    desc: "zoom out",
    group: "tabs",
    advanced: true,
    background: true,
  },

  {
    name: "zoomReset",
    desc: "reset zoom",
    group: "tabs",
    advanced: true,
    background: true,
    noRepeat: true,
  },

  //
  // Misc
  //

  {
    name: "toggleViewSource",
    desc: "view page source",
    group: "misc",
    advanced: true,
    noRepeat: true,
  },

  {
    name: "showHelp",
    desc: "show help",
    group: "misc",
    noRepeat: true,
    topFrame: true,
  },
];

export { allCommands };
