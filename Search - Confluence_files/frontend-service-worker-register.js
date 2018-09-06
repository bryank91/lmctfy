(function() {
  // Set this to true to enable some debug log information.
  var DEBUG = false;

  function register() {
    /**
     * The scriptUrl used to be /wiki/service-worker-cache.js so we need to ensure that any active service workers
     * with that url are unregistered.
     *
     * TODO CONFDEV-55411 - remove this code once the old workers have expired in production.
     */
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        if (
          registration.active &&
          registration.active.scriptURL.endsWith(
            "/wiki/service-worker-cache.js"
          )
        ) {
          registration.unregister();
        }
      });
    });

    navigator.serviceWorker
      .register("/wiki/frontend-service-worker-cache.js")
      .then(function(registration) {
        if (DEBUG) {
          console.info(
            "SERVICE WORKER - Registration successful with scope: ",
            registration.scope
          );
        }
      })
      .catch(function(err) {
        console.error("SERVICE WORKER - Registration failed: ", err);
      });
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "enableCache" });
    }
  }

  function unregister() {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      if (registrations.length > 0) {
        if (DEBUG) {
          console.info("SERVICE WORKER - Unregistering");
        }
        for (var i = 0; i < registrations.length; i++) {
          registrations[i].unregister();
        }
      }
    });
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "disableCache" });
    }
  }

  function isCacheServiceWorkerEnabled(document) {
    var features = document
      .querySelector('meta[name="ajs-enabled-dark-features"]')
      .content.split(",")
      .reduce(function(map, key) {
        map[key] = true;
        return map;
      }, {});

    var serviceWorkerEnabled =
      features["frontend.cache.service.worker"] &&
      !features["frontend.cache.service.worker.disable"];

    return !!serviceWorkerEnabled;
  }

  if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
    // Chrome 40.x supports navigator.serviceWorker but not navigator.serviceWorker.getRegistrations. Even though we
    // don't technically support Chrome 40.x anymore, adding this line means we avoid throwing errors in production to
    // Sentry and the possible side-effects that may result from the exception being thrown in the worker registration.
    if (navigator.serviceWorker.getRegistrations) {
      window.addEventListener("load", function() {
        if (isCacheServiceWorkerEnabled(document)) {
          register();
        } else {
          unregister();
        }
      });

      window.addEventListener("beforeunload", function() {
        if (!isCacheServiceWorkerEnabled(document)) {
          unregister();
        }
      });
    }
  }

  // Export for testing
  if (typeof exports !== "undefined") {
    exports.isCacheServiceWorkerEnabled = isCacheServiceWorkerEnabled;
  }
})();
