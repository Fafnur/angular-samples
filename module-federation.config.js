const coreLibraries = new Set(['@ngrx/component-store', '@ngrx/effects', '@ngrx/entity', '@ngrx/router-store', '@ngrx/store']);

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
