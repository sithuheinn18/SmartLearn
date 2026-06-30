// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"i4syP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "496e5bc13052eed7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9f5IL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _netlifyIdentityWidget = require("netlify-identity-widget");
var _netlifyIdentityWidgetDefault = parcelHelpers.interopDefault(_netlifyIdentityWidget);
// Wait for DOM layout tree paths to assemble fully
document.addEventListener("DOMContentLoaded", ()=>{
    // --- MOBILE DRAWER NAV ELEMENTS ---
    const menuTrigger = document.getElementById("menu-trigger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const navLinks = document.querySelectorAll(".nav-link");
    // --- DARK MODE ELEMENTS ---
    const themeToggle = document.querySelector(".logo-icon");
    const savedTheme = localStorage.getItem("theme");
    // Check if user previously saved a dark theme preference
    if (savedTheme === "dark") document.body.classList.add("dark-theme");
    // 💡 Click handler tracking routine for Dark Mode Toggle
    if (themeToggle) themeToggle.addEventListener("click", ()=>{
        // Toggle the dark-theme class on the body element
        document.body.classList.toggle("dark-theme");
        // Check if dark mode is active and save the preference
        if (document.body.classList.contains("dark-theme")) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    });
    // Click handler tracking routine for Mobile Menu Drawer
    if (menuTrigger && mobileDrawer) menuTrigger.addEventListener("click", ()=>{
        // Toggle the open class parameters on our targets
        mobileDrawer.classList.toggle("open");
        menuTrigger.classList.toggle("open-active");
    });
    // Close the drawer automatically if a user clicks an anchor navigation option
    navLinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            if (mobileDrawer && menuTrigger) {
                mobileDrawer.classList.remove("open");
                menuTrigger.classList.remove("open-active");
            }
        });
    });
});
// --- INITIALIZE NETLIFY CONFIGURATION ---
(0, _netlifyIdentityWidgetDefault.default).init({
    container: '#netlify-auth-root',
    locale: 'en'
});
// Select layout element structures
const desktopAuthContainer = document.querySelector('.auth-buttons-desktop');
const mobileAuthContainer = document.querySelector('.mobile-only-actions');
// --- HELPER FUNCTION: FORCE MOBILE DRAWER TO SHUT DEFTLY ---
function closeMobileDrawer() {
    const menuTrigger = document.getElementById("menu-trigger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    // 1. Remove common active layout state classes if present
    if (mobileDrawer && menuTrigger) {
        mobileDrawer.classList.remove("open");
        menuTrigger.classList.remove("open-active");
    }
}
// --- RENDER DYNAMIC NAVIGATION ---
function renderUserHeaderState() {
    const user = (0, _netlifyIdentityWidgetDefault.default).currentUser();
    if (user) {
        // --- LOGGED IN ARCHITECTURE ---
        const displayName = user.user_metadata.full_name || user.email.split('@')[0];
        const loggedInMarkup = `
            <span class="user-display">\u{1F44B} ${displayName}</span>
            <a herf="#" class="btn-pill btn-outline auth-logout-btn">Log Out</button>
        `;
        if (desktopAuthContainer) desktopAuthContainer.innerHTML = loggedInMarkup;
        if (mobileAuthContainer) mobileAuthContainer.innerHTML = loggedInMarkup;
        document.querySelectorAll('.auth-logout-btn').forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                closeMobileDrawer(); // Shut drawer on logout
                (0, _netlifyIdentityWidgetDefault.default).logout();
            });
        });
    } else {
        // --- UN-AUTHENTICATED ARCHITECTURE ---
        if (desktopAuthContainer) desktopAuthContainer.innerHTML = `
                <a href="#" class="btn-text auth-signin-trigger">Sign In</a>
                <a href="#" class="btn-pill btn-primary auth-signup-trigger">Get Started</a>
            `;
        if (mobileAuthContainer) mobileAuthContainer.innerHTML = `
                <a href="#" class="btn-text auth-signin-trigger">Sign In</a>
                <a href="#" class="btn-pill btn-primary auth-signup-trigger">Get Started</a>
            `;
        // Bind actions + close active drawer container
        document.querySelectorAll('.auth-signin-trigger').forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                closeMobileDrawer(); //  Clear the drawer screen viewport instantly!
                (0, _netlifyIdentityWidgetDefault.default).open('login');
            });
        });
        document.querySelectorAll('.auth-signup-trigger').forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                closeMobileDrawer(); //  Clear the drawer screen viewport instantly!
                (0, _netlifyIdentityWidgetDefault.default).open('signup');
            });
        });
    }
}
// --- IDENTITY LIFECYCLE EVENT LISTENERS ---
(0, _netlifyIdentityWidgetDefault.default).on('init', (user)=>renderUserHeaderState());
(0, _netlifyIdentityWidgetDefault.default).on('login', (user)=>{
    renderUserHeaderState();
    (0, _netlifyIdentityWidgetDefault.default).close();
});
(0, _netlifyIdentityWidgetDefault.default).on('logout', ()=>renderUserHeaderState());
document.addEventListener('DOMContentLoaded', ()=>{
    renderUserHeaderState();
});

},{"netlify-identity-widget":"aE0Xm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aE0Xm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var Buffer = require("d6f41bb48b76cc2b").Buffer;
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    var e, t, n, i, r, o, a, s, l, u, _, c, d = {}, g = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, M = Array.isArray;
    function m(e, t) {
        for(var n in t)e[n] = t[n];
        return e;
    }
    function f(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
    }
    function h(e, i, r, o, a) {
        var s = {
            type: e,
            props: i,
            key: r,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: null == a ? ++n : a,
            __i: -1,
            __u: 0
        };
        return null == a && null != t.vnode && t.vnode(s), s;
    }
    function v(e) {
        return e.children;
    }
    function y(e, t) {
        this.props = e, this.context = t;
    }
    function N(e, t) {
        if (null == t) return e.__ ? N(e.__, e.__i + 1) : null;
        for(var n; t < e.__k.length; t++)if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? N(e) : null;
    }
    function w(e) {
        if (e.__P && e.__d) {
            var n = e.__v, i = n.__e, r = [], o = [], a = m({}, n);
            a.__v = n.__v + 1, t.vnode && t.vnode(a), O(e.__P, a, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [
                i
            ] : null, r, null == i ? N(n) : i, !!(32 & n.__u), o), a.__v = n.__v, a.__.__k[a.__i] = a, S(r, a, o), n.__e = n.__ = null, a.__e != i && b(a);
        }
    }
    function b(e) {
        if (null != (e = e.__) && null != e.__c) return e.__e = e.__c.base = null, e.__k.some(function(t) {
            if (null != t && null != t.__e) return e.__e = e.__c.base = t.__e;
        }), b(e);
    }
    function j(e) {
        (!e.__d && (e.__d = !0) && i.push(e) && !D.__r++ || r != t.debounceRendering) && ((r = t.debounceRendering) || o)(D);
    }
    function D() {
        for(var e, t = 1; i.length;)i.length > t && i.sort(a), e = i.shift(), t = i.length, w(e);
        D.__r = 0;
    }
    function z(e, t, n, i, r, o, a, s, l, u, _) {
        var c, p, m, f, y, w, b, j = i && i.__k || g, D = t.length;
        for(l = function(e, t, n, i, r) {
            var o, a, s, l, u, _ = n.length, c = _, d = 0;
            for(e.__k = new Array(r), o = 0; o < r; o++)null != (a = t[o]) && "boolean" != typeof a && "function" != typeof a ? ("string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? a = e.__k[o] = h(null, a, null, null, null) : M(a) ? a = e.__k[o] = h(v, {
                children: a
            }, null, null, null) : void 0 === a.constructor && a.__b > 0 ? a = e.__k[o] = h(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[o] = a, l = o + d, a.__ = e, a.__b = e.__b + 1, s = null, -1 != (u = a.__i = k(a, n, l, c)) && (c--, (s = n[u]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == u && (r > _ ? d-- : r < _ && d++), "function" != typeof a.type && (a.__u |= 4)) : u != l && (u == l - 1 ? d-- : u == l + 1 ? d++ : (u > l ? d-- : d++, a.__u |= 4))) : e.__k[o] = null;
            if (c) for(o = 0; o < _; o++)null != (s = n[o]) && !(2 & s.__u) && (s.__e == i && (i = N(s)), C(s, s));
            return i;
        }(n, t, j, l, D), c = 0; c < D; c++)null != (m = n.__k[c]) && (p = -1 != m.__i && j[m.__i] || d, m.__i = c, w = O(e, m, p, r, o, a, s, l, u, _), f = m.__e, m.ref && p.ref != m.ref && (p.ref && U(p.ref, null, m), _.push(m.ref, m.__c || f, m)), null == y && null != f && (y = f), (b = !!(4 & m.__u)) || p.__k === m.__k ? l = T(m, l, e, b) : "function" == typeof m.type && void 0 !== w ? l = w : f && (l = f.nextSibling), m.__u &= -7);
        return n.__e = y, l;
    }
    function T(e, t, n, i) {
        var r, o;
        if ("function" == typeof e.type) {
            for(r = e.__k, o = 0; r && o < r.length; o++)r[o] && (r[o].__ = e, t = T(r[o], t, n, i));
            return t;
        }
        e.__e != t && (i && (t && e.type && !t.parentNode && (t = N(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
        do t = t && t.nextSibling;
        while (null != t && 8 == t.nodeType);
        return t;
    }
    function k(e, t, n, i) {
        var r, o, a, s = e.key, l = e.type, u = t[n], _ = null != u && !(2 & u.__u);
        if (null === u && null == s || _ && s == u.key && l == u.type) return n;
        if (i > (_ ? 1 : 0)) {
            for(r = n - 1, o = n + 1; r >= 0 || o < t.length;)if (null != (u = t[a = r >= 0 ? r-- : o++]) && !(2 & u.__u) && s == u.key && l == u.type) return a;
        }
        return -1;
    }
    function x(e, t, n) {
        "-" == t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px";
    }
    function I(e, t, n, i, r) {
        var o, a;
        e: if ("style" == t) {
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof i && (e.style.cssText = i = ""), i) for(t in i)n && t in n || x(e.style, t, "");
                if (n) for(t in n)i && n[t] == i[t] || x(e.style, t, n[t]);
            }
        } else if ("o" == t[0] && "n" == t[1]) o = t != (t = t.replace(s, "$1")), a = t.toLowerCase(), t = a in e || "onFocusOut" == t || "onFocusIn" == t ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? i ? n.u = i.u : (n.u = l, e.addEventListener(t, o ? _ : u, o)) : e.removeEventListener(t, o ? _ : u, o);
        else {
            if ("http://www.w3.org/2000/svg" == r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
                e[t] = null == n ? "" : n;
                break e;
            } catch (c) {}
            "function" == typeof n || (null == n || !1 === n && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
    }
    function L(e) {
        return function(n) {
            if (this.l) {
                var i = this.l[n.type + e];
                if (null == n.t) n.t = l++;
                else if (n.t < i.u) return;
                return i(t.event ? t.event(n) : n);
            }
        };
    }
    function O(n, i, r, o, a, s, l, u, _, c) {
        var p, h, w, b, j, D, T, k, x, L, O, S, U, C, P, Y = i.type;
        if (void 0 !== i.constructor) return null;
        128 & r.__u && (_ = !!(32 & r.__u), s = [
            u = i.__e = r.__e
        ]), (p = t.__b) && p(i);
        e: if ("function" == typeof Y) try {
            if (k = i.props, x = "prototype" in Y && Y.prototype.render, L = (p = Y.contextType) && o[p.__c], O = p ? L ? L.props.value : p.__ : o, r.__c ? T = (h = i.__c = r.__c).__ = h.__E : (x ? i.__c = h = new Y(k, O) : (i.__c = h = new y(k, O), h.constructor = Y, h.render = Q), L && L.sub(h), h.state || (h.state = {}), h.__n = o, w = h.__d = !0, h.__h = [], h._sb = []), x && null == h.__s && (h.__s = h.state), x && null != Y.getDerivedStateFromProps && (h.__s == h.state && (h.__s = m({}, h.__s)), m(h.__s, Y.getDerivedStateFromProps(k, h.__s))), b = h.props, j = h.state, h.__v = i, w) x && null == Y.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), x && null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (x && null == Y.getDerivedStateFromProps && k !== b && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, O), i.__v == r.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, O)) {
                    i.__v != r.__v && (h.props = k, h.state = h.__s, h.__d = !1), i.__e = r.__e, i.__k = r.__k, i.__k.some(function(e) {
                        e && (e.__ = i);
                    }), g.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && l.push(h);
                    break e;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, O), x && null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(b, j, D);
                });
            }
            if (h.context = O, h.props = k, h.__P = n, h.__e = !1, S = t.__r, U = 0, x) h.state = h.__s, h.__d = !1, S && S(i), p = h.render(h.props, h.state, h.context), g.push.apply(h.__h, h._sb), h._sb = [];
            else do h.__d = !1, S && S(i), p = h.render(h.props, h.state, h.context), h.state = h.__s;
            while (h.__d && ++U < 25);
            h.state = h.__s, null != h.getChildContext && (o = m(m({}, o), h.getChildContext())), x && !w && null != h.getSnapshotBeforeUpdate && (D = h.getSnapshotBeforeUpdate(b, j)), C = null != p && p.type === v && null == p.key ? A(p.props.children) : p, u = z(n, M(C) ? C : [
                C
            ], i, r, o, a, s, l, u, _, c), h.base = i.__e, i.__u &= -161, h.__h.length && l.push(h), T && (h.__E = h.__ = null);
        } catch (R) {
            if (i.__v = null, _ || null != s) {
                if (R.then) {
                    for(i.__u |= _ ? 160 : 128; u && 8 == u.nodeType && u.nextSibling;)u = u.nextSibling;
                    s[s.indexOf(u)] = null, i.__e = u;
                } else {
                    for(P = s.length; P--;)f(s[P]);
                    E(i);
                }
            } else i.__e = r.__e, i.__k = r.__k, R.then || E(i);
            t.__e(R, i, r);
        }
        else null == s && i.__v == r.__v ? (i.__k = r.__k, i.__e = r.__e) : u = i.__e = function(n, i, r, o, a, s, l, u, _) {
            var c, g, p, m, h, v, y, w = r.props || d, b = i.props, j = i.type;
            if ("svg" == j ? a = "http://www.w3.org/2000/svg" : "math" == j ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s) {
                for(c = 0; c < s.length; c++)if ((h = s[c]) && "setAttribute" in h == !!j && (j ? h.localName == j : 3 == h.nodeType)) {
                    n = h, s[c] = null;
                    break;
                }
            }
            if (null == n) {
                if (null == j) return document.createTextNode(b);
                n = document.createElementNS(a, j, b.is && b), u && (t.__m && t.__m(i, s), u = !1), s = null;
            }
            if (null == j) w === b || u && n.data == b || (n.data = b);
            else {
                if (s = s && e.call(n.childNodes), !u && null != s) for(w = {}, c = 0; c < n.attributes.length; c++)w[(h = n.attributes[c]).name] = h.value;
                for(c in w)h = w[c], "dangerouslySetInnerHTML" == c ? p = h : "children" == c || c in b || "value" == c && "defaultValue" in b || "checked" == c && "defaultChecked" in b || I(n, c, null, h, a);
                for(c in b)h = b[c], "children" == c ? m = h : "dangerouslySetInnerHTML" == c ? g = h : "value" == c ? v = h : "checked" == c ? y = h : u && "function" != typeof h || w[c] === h || I(n, c, h, w[c], a);
                if (g) u || p && (g.__html == p.__html || g.__html == n.innerHTML) || (n.innerHTML = g.__html), i.__k = [];
                else if (p && (n.innerHTML = ""), z("template" == i.type ? n.content : n, M(m) ? m : [
                    m
                ], i, r, o, "foreignObject" == j ? "http://www.w3.org/1999/xhtml" : a, s, l, s ? s[0] : r.__k && N(r, 0), u, _), null != s) for(c = s.length; c--;)f(s[c]);
                u || (c = "value", "progress" == j && null == v ? n.removeAttribute("value") : null != v && (v !== n[c] || "progress" == j && !v || "option" == j && v != w[c]) && I(n, c, v, w[c], a), c = "checked", null != y && y != n[c] && I(n, c, y, w[c], a));
            }
            return n;
        }(r.__e, i, r, o, a, s, l, _, c);
        return (p = t.diffed) && p(i), 128 & i.__u ? void 0 : u;
    }
    function E(e) {
        e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(E));
    }
    function S(e, n, i) {
        for(var r = 0; r < i.length; r++)U(i[r], i[++r], i[++r]);
        t.__c && t.__c(n, e), e.some(function(n) {
            try {
                e = n.__h, n.__h = [], e.some(function(e) {
                    e.call(n);
                });
            } catch (i) {
                t.__e(i, n.__v);
            }
        });
    }
    function A(e) {
        return "object" != typeof e || null == e || e.__b > 0 ? e : M(e) ? e.map(A) : m({}, e);
    }
    function U(e, n, i) {
        try {
            if ("function" == typeof e) {
                var r = "function" == typeof e.__u;
                r && e.__u(), r && null == n || (e.__u = e(n));
            } else e.current = n;
        } catch (o) {
            t.__e(o, i);
        }
    }
    function C(e, n, i) {
        var r, o;
        if (t.unmount && t.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || U(r, null, n)), null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount();
            } catch (a) {
                t.__e(a, n);
            }
            r.base = r.__P = null;
        }
        if (r = e.__k) for(o = 0; o < r.length; o++)r[o] && C(r[o], n, i || "function" != typeof e.type);
        i || f(e.__e), e.__c = e.__ = e.__e = void 0;
    }
    function Q(e, t, n) {
        return this.constructor(e, n);
    }
    function P(n, i, r) {
        var o, a, s;
        i == document && (i = document.documentElement), t.__ && t.__(n, i), o = (0, i.__k), a = [], s = [], O(i, n = i.__k = function(t, n, i) {
            var r, o, a, s = {};
            for(a in n)"key" == a ? r = n[a] : "ref" == a ? o = n[a] : s[a] = n[a];
            if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : i), "function" == typeof t && null != t.defaultProps) for(a in t.defaultProps)void 0 === s[a] && (s[a] = t.defaultProps[a]);
            return h(t, s, r, o, null);
        }(v, null, [
            n
        ]), o || d, d, i.namespaceURI, o ? null : i.firstChild ? e.call(i.childNodes) : null, a, o ? o.__e : i.firstChild, false, s), S(a, n, s);
    }
    e = g.slice, t = {
        __e: function(e, t, n, i) {
            for(var r, o, a; t = t.__;)if ((r = t.__c) && !r.__) try {
                if ((o = r.constructor) && null != o.getDerivedStateFromError && (r.setState(o.getDerivedStateFromError(e)), a = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, i || {}), a = r.__d), a) return r.__E = r;
            } catch (s) {
                e = s;
            }
            throw e;
        }
    }, n = 0, y.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof e && (e = e(m({}, n), this.props)), e && m(n, e), null != e && this.__v && (t && this._sb.push(t), j(this));
    }, y.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), j(this));
    }, y.prototype.render = v, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, a = function(e, t) {
        return e.__v.__b - t.__v.__b;
    }, D.__r = 0, s = /(PointerCapture)$|Capture$/i, l = 0, u = L(!1), _ = L(!0), c = 0;
    var Y = 0;
    function R(e, n, i, r, o, a) {
        n || (n = {});
        var s, l, u = n;
        if ("ref" in u) for(l in u = {}, n)"ref" == l ? s = n[l] : u[l] = n[l];
        var _ = {
            type: e,
            props: u,
            key: i,
            ref: s,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: --Y,
            __i: -1,
            __u: 0,
            __source: o,
            __self: a
        };
        if ("function" == typeof e && (s = e.defaultProps)) for(l in s)void 0 === u[l] && (u[l] = s[l]);
        return t.vnode && t.vnode(_), _;
    }
    function B(e) {
        for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)n[i - 1] = arguments[i];
        throw new Error("number" == typeof e ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
    }
    var G = {};
    function V() {
        return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : G;
    }
    var H = Object.assign, Z = Object.getOwnPropertyDescriptor, W = Object.defineProperty, F = Object.prototype, J = [];
    Object.freeze(J);
    var q = {};
    Object.freeze(q);
    var K = "undefined" != typeof Proxy, X = Object.toString();
    function $() {
        K || B("Proxy not available");
    }
    function ee(e) {
        var t = !1;
        return function() {
            if (!t) return t = !0, e.apply(this, arguments);
        };
    }
    var te = function() {};
    function ne(e) {
        return "function" == typeof e;
    }
    function ie(e) {
        switch(typeof e){
            case "string":
            case "symbol":
            case "number":
                return !0;
        }
        return !1;
    }
    function re(e) {
        return null !== e && "object" == typeof e;
    }
    function oe(e) {
        if (!re(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === X;
    }
    function ae(e) {
        var t = null == e ? void 0 : e.constructor;
        return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
    }
    function se(e, t, n) {
        W(e, t, {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: n
        });
    }
    function le(e, t, n) {
        W(e, t, {
            enumerable: !1,
            writable: !1,
            configurable: !0,
            value: n
        });
    }
    function ue(e, t) {
        var n = "isMobX" + e;
        return t.prototype[n] = !0, function(e) {
            return re(e) && !0 === e[n];
        };
    }
    function _e(e) {
        return null != e && "[object Map]" === Object.prototype.toString.call(e);
    }
    function ce(e) {
        return null != e && "[object Set]" === Object.prototype.toString.call(e);
    }
    var de = void 0 !== Object.getOwnPropertySymbols;
    var ge = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : de ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : Object.getOwnPropertyNames;
    function pe(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
    }
    function Me(e, t) {
        return F.hasOwnProperty.call(e, t);
    }
    var me = Object.getOwnPropertyDescriptors || function(e) {
        var t = {};
        return ge(e).forEach(function(n) {
            t[n] = Z(e, n);
        }), t;
    };
    function fe(e, t) {
        return !!(e & t);
    }
    function he(e, t, n) {
        return n ? e |= t : e &= ~t, e;
    }
    function ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var n = 0, i = Array(t); n < t; n++)i[n] = e[n];
        return i;
    }
    function ye(e, t, n) {
        return t && function(e, t) {
            for(var n = 0; n < t.length; n++){
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, De(i.key), i);
            }
        }(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function Ne(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (e) {
                if ("string" == typeof e) return ve(e, t);
                var n = ({}).toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0;
            }
        }(e)) || t) {
            n && (e = n);
            var i = 0;
            return function() {
                return i >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function we() {
        return we = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var i in n)({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }, we.apply(null, arguments);
    }
    function be(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, je(e, t);
    }
    function je(e, t) {
        return (je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    function De(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(e, t);
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
        }(e, "string");
        return "symbol" == typeof t ? t : t + "";
    }
    var ze = Symbol("mobx-stored-annotations");
    function Te(e) {
        return Object.assign(function(t, n) {
            if (xe(n)) return e.decorate_20223_(t, n);
            ke(t, n, e);
        }, e);
    }
    function ke(e, t, n) {
        Me(e, ze) || se(e, ze, we({}, e[ze])), function(e) {
            return e.annotationType_ === Ce;
        }(n) || (e[ze][t] = n);
    }
    function xe(e) {
        return "object" == typeof e && "string" == typeof e.kind;
    }
    var Ie = Symbol("mobx administration"), Le = function() {
        function e(e) {
            void 0 === e && (e = "Atom"), this.name_ = void 0, this.flags_ = 0, this.observers_ = new Set, this.lastAccessedBy_ = 0, this.lowestObserverState_ = Et.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = e;
        }
        var t = e.prototype;
        return t.onBO = function() {
            this.onBOL && this.onBOL.forEach(function(e) {
                return e();
            });
        }, t.onBUO = function() {
            this.onBUOL && this.onBUOL.forEach(function(e) {
                return e();
            });
        }, t.reportObserved = function() {
            return on(this);
        }, t.reportChanged = function() {
            nn(), an(this), rn();
        }, t.toString = function() {
            return this.name_;
        }, ye(e, [
            {
                key: "isBeingObserved",
                get: function() {
                    return fe(this.flags_, e.isBeingObservedMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isBeingObservedMask_, t);
                }
            },
            {
                key: "isPendingUnobservation",
                get: function() {
                    return fe(this.flags_, e.isPendingUnobservationMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isPendingUnobservationMask_, t);
                }
            },
            {
                key: "diffValue",
                get: function() {
                    return fe(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.diffValueMask_, 1 === t);
                }
            }
        ]);
    }();
    Le.isBeingObservedMask_ = 1, Le.isPendingUnobservationMask_ = 2, Le.diffValueMask_ = 4;
    var Oe = ue("Atom", Le);
    function Ee(e, t, n) {
        void 0 === t && (t = te), void 0 === n && (n = te);
        var i, r = new Le(e);
        return t !== te && xn(zn, r, t, i), n !== te && kn(r, n), r;
    }
    var Se = {
        structural: function(e, t) {
            return Yi(e, t);
        },
        default: function(e, t) {
            return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }
    };
    function Ae(e, t, n) {
        return Qn(e) ? e : Array.isArray(e) ? vt.array(e, {
            name: n
        }) : oe(e) ? vt.object(e, void 0, {
            name: n
        }) : _e(e) ? vt.map(e, {
            name: n
        }) : ce(e) ? vt.set(e, {
            name: n
        }) : "function" != typeof e || wn(e) || Cn(e) ? e : ae(e) ? An(e) : Nn(n, e);
    }
    function Ue(e) {
        return e;
    }
    var Ce = "override";
    function Qe(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: Pe,
            extend_: Ye,
            decorate_20223_: Re
        };
    }
    function Pe(e, t, n, i) {
        var r;
        if (null != (r = this.options_) && r.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (i === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (wn(n.value)) return 1;
        var o = Be(e, this, t, n, !1);
        return W(i, t, o), 2;
    }
    function Ye(e, t, n, i) {
        var r = Be(e, this, t, n);
        return e.defineProperty_(t, r, i);
    }
    function Re(e, t) {
        var n, i = t.kind, r = t.name, o = t.addInitializer, a = this, s = function(e) {
            var t, n, i, o;
            return kt(null != (t = null == (n = a.options_) ? void 0 : n.name) ? t : r.toString(), e, null != (i = null == (o = a.options_) ? void 0 : o.autoAction) && i);
        };
        return "field" == i ? function(e) {
            var t, n = e;
            return wn(n) || (n = s(n)), null != (t = a.options_) && t.bound && ((n = n.bind(this)).isMobxAction = !0), n;
        } : "method" == i ? (wn(e) || (e = s(e)), null != (n = this.options_) && n.bound && o(function() {
            var e = this, t = e[r].bind(e);
            t.isMobxAction = !0, e[r] = t;
        }), e) : void B("Cannot apply '" + a.annotationType_ + "' to '" + String(r) + "' (kind: " + i + "):\n'" + a.annotationType_ + "' can only be used on properties with a function value.");
    }
    function Be(e, t, n, i, r) {
        var o, a, s, l, u, _, c, d;
        void 0 === r && (r = Xt.safeDescriptors), d = i, t.annotationType_, d.value;
        var g, p = i.value;
        null != (o = t.options_) && o.bound && (p = p.bind(null != (g = e.proxy_) ? g : e.target_));
        return {
            value: kt(null != (a = null == (s = t.options_) ? void 0 : s.name) ? a : n.toString(), p, null != (l = null == (u = t.options_) ? void 0 : u.autoAction) && l, null != (_ = t.options_) && _.bound ? null != (c = e.proxy_) ? c : e.target_ : void 0),
            configurable: !r || e.isPlainObject_,
            enumerable: !1,
            writable: !r
        };
    }
    function Ge(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: Ve,
            extend_: He,
            decorate_20223_: Ze
        };
    }
    function Ve(e, t, n, i) {
        var r;
        if (i === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (null != (r = this.options_) && r.bound && (!Me(e.target_, t) || !Cn(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
        if (Cn(n.value)) return 1;
        var o = We(e, this, t, n, !1, !1);
        return W(i, t, o), 2;
    }
    function He(e, t, n, i) {
        var r, o = We(e, this, t, n, null == (r = this.options_) ? void 0 : r.bound);
        return e.defineProperty_(t, o, i);
    }
    function Ze(e, t) {
        var n, i = t.name, r = t.addInitializer;
        return Cn(e) || (e = An(e)), null != (n = this.options_) && n.bound && r(function() {
            var e = this, t = e[i].bind(e);
            t.isMobXFlow = !0, e[i] = t;
        }), e;
    }
    function We(e, t, n, i, r, o) {
        var a;
        void 0 === o && (o = Xt.safeDescriptors), a = i, t.annotationType_, a.value;
        var s, l = i.value;
        (Cn(l) || (l = An(l)), r) && ((l = l.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
        return {
            value: l,
            configurable: !o || e.isPlainObject_,
            enumerable: !1,
            writable: !o
        };
    }
    function Fe(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: Je,
            extend_: qe,
            decorate_20223_: Ke
        };
    }
    function Je(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
    }
    function qe(e, t, n, i) {
        var r;
        return r = n, this.annotationType_, r.get, e.defineComputedProperty_(t, we({}, this.options_, {
            get: n.get,
            set: n.set
        }), i);
    }
    function Ke(e, t) {
        var n = this, i = t.name;
        return (0, t.addInitializer)(function() {
            var t = vi(this)[Ie], r = we({}, n.options_, {
                get: e,
                context: this
            });
            r.name || (r.name = "ObservableObject." + i.toString()), t.values_.set(i, new Ot(r));
        }), function() {
            return this[Ie].getObservablePropValue_(i);
        };
    }
    function Xe(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: $e,
            extend_: et,
            decorate_20223_: tt
        };
    }
    function $e(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
    }
    function et(e, t, n, i) {
        var r, o;
        return this.annotationType_, e.defineObservableProperty_(t, n.value, null != (r = null == (o = this.options_) ? void 0 : o.enhancer) ? r : Ae, i);
    }
    function tt(e, t) {
        var n = this, i = t.kind, r = t.name, o = new WeakSet;
        function a(e, t) {
            var i, a, s = vi(e)[Ie], l = new Lt(t, null != (i = null == (a = n.options_) ? void 0 : a.enhancer) ? i : Ae, "ObservableObject." + r.toString(), !1);
            s.values_.set(r, l), o.add(e);
        }
        if ("accessor" == i) return {
            get: function() {
                return o.has(this) || a(this, e.get.call(this)), this[Ie].getObservablePropValue_(r);
            },
            set: function(e) {
                return o.has(this) || a(this, e), this[Ie].setObservablePropValue_(r, e);
            },
            init: function(e) {
                return o.has(this) || a(this, e), e;
            }
        };
    }
    var nt = "true", it = rt();
    function rt(e) {
        return {
            annotationType_: nt,
            options_: e,
            make_: ot,
            extend_: at,
            decorate_20223_: st
        };
    }
    function ot(e, t, n, i) {
        var r, o, a, s;
        if (n.get) return bt.make_(e, t, n, i);
        if (n.set) {
            var l = wn(n.set) ? n.set : kt(t.toString(), n.set);
            return i === e.target_ ? null === e.defineProperty_(t, {
                configurable: !Xt.safeDescriptors || e.isPlainObject_,
                set: l
            }) ? 0 : 2 : (W(i, t, {
                configurable: !0,
                set: l
            }), 2);
        }
        if (i !== e.target_ && "function" == typeof n.value) return ae(n.value) ? (null != (s = this.options_) && s.autoBind ? An.bound : An).make_(e, t, n, i) : (null != (a = this.options_) && a.autoBind ? Nn.bound : Nn).make_(e, t, n, i);
        var u, _ = !1 === (null == (r = this.options_) ? void 0 : r.deep) ? vt.ref : vt;
        "function" == typeof n.value && null != (o = this.options_) && o.autoBind && (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
        return _.make_(e, t, n, i);
    }
    function at(e, t, n, i) {
        var r, o, a;
        if (n.get) return bt.extend_(e, t, n, i);
        if (n.set) return e.defineProperty_(t, {
            configurable: !Xt.safeDescriptors || e.isPlainObject_,
            set: kt(t.toString(), n.set)
        }, i);
        "function" == typeof n.value && null != (r = this.options_) && r.autoBind && (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? vt.ref : vt).extend_(e, t, n, i);
    }
    function st(e, t) {
        B("'" + this.annotationType_ + "' cannot be used as a decorator");
    }
    var lt = {
        deep: !0,
        name: void 0,
        defaultDecorator: void 0,
        proxy: !0
    };
    function ut(e) {
        return e || lt;
    }
    Object.freeze(lt);
    var _t = Xe("observable"), ct = Xe("observable.ref", {
        enhancer: Ue
    }), dt = Xe("observable.shallow", {
        enhancer: function(e, t, n) {
            return null == e || wi(e) || oi(e) || _i(e) || pi(e) ? e : Array.isArray(e) ? vt.array(e, {
                name: n,
                deep: !1
            }) : oe(e) ? vt.object(e, void 0, {
                name: n,
                deep: !1
            }) : _e(e) ? vt.map(e, {
                name: n,
                deep: !1
            }) : ce(e) ? vt.set(e, {
                name: n,
                deep: !1
            }) : void 0;
        }
    }), gt = Xe("observable.struct", {
        enhancer: function(e, t) {
            return Yi(e, t) ? t : e;
        }
    }), pt = Te(_t);
    function Mt(e) {
        var t, n, i;
        return !0 === e.deep ? Ae : !1 === e.deep ? Ue : (t = e.defaultDecorator) && null != (n = null == (i = t.options_) ? void 0 : i.enhancer) ? n : Ae;
    }
    function mt(e, t, n) {
        return xe(t) ? _t.decorate_20223_(e, t) : ie(t) ? void ke(e, t, _t) : Qn(e) ? e : oe(e) ? vt.object(e, t, n) : Array.isArray(e) ? vt.array(e, t) : _e(e) ? vt.map(e, t) : ce(e) ? vt.set(e, t) : "object" == typeof e && null !== e ? e : vt.box(e, t);
    }
    H(mt, pt);
    var ft, ht, vt = H(mt, {
        box: function(e, t) {
            var n = ut(t);
            return new Lt(e, Mt(n), n.name, !0, n.equals);
        },
        array: function(e, t) {
            var n = ut(t);
            return (!1 === Xt.useProxies || !1 === n.proxy ? Si : Xn)(e, Mt(n), n.name);
        },
        map: function(e, t) {
            var n = ut(t);
            return new ui(e, Mt(n), n.name);
        },
        set: function(e, t) {
            var n = ut(t);
            return new gi(e, Mt(n), n.name);
        },
        object: function(e, t, n) {
            return Ci(function() {
                return function(e, t, n, i) {
                    var r = me(t);
                    return Ci(function() {
                        var t = vi(e, i)[Ie];
                        ge(r).forEach(function(e) {
                            t.extend_(e, r[e], !n || !(e in n) || n[e]);
                        });
                    }), e;
                }(!1 === Xt.useProxies || !1 === (null == n ? void 0 : n.proxy) ? vi({}, n) : function(e, t) {
                    var n, i;
                    return $(), e = vi(e, t), null != (i = (n = e[Ie]).proxy_) ? i : n.proxy_ = new Proxy(e, Rn);
                }({}, n), e, t);
            });
        },
        ref: Te(ct),
        shallow: Te(dt),
        deep: pt,
        struct: Te(gt)
    }), yt = "computed", Nt = Fe(yt), wt = Fe("computed.struct", {
        equals: Se.structural
    }), bt = function(e, t) {
        if (xe(t)) return Nt.decorate_20223_(e, t);
        if (ie(t)) return ke(e, t, Nt);
        if (oe(e)) return Te(Fe(yt, e));
        var n = oe(t) ? t : {};
        return n.get = e, n.name || (n.name = e.name || ""), new Ot(n);
    };
    Object.assign(bt, Nt), bt.struct = Te(wt);
    var jt = 0, Dt = 1, zt = null != (ft = null == (ht = Z(function() {}, "name")) ? void 0 : ht.configurable) && ft, Tt = {
        value: "action",
        configurable: !0,
        writable: !1,
        enumerable: !1
    };
    function kt(e, t, n, i) {
        function r() {
            return function(e, t, n, i, r) {
                var o = function(e, t) {
                    var n = !1, i = 0, r = Xt.trackingDerivation, o = !t || !r;
                    nn();
                    var a = Xt.allowStateChanges;
                    o && (Vt(), a = xt(!0));
                    var s = Zt(!0), l = {
                        runAsAction_: o,
                        prevDerivation_: r,
                        prevAllowStateChanges_: a,
                        prevAllowStateReads_: s,
                        notifySpy_: n,
                        startTime_: i,
                        actionId_: Dt++,
                        parentActionId_: jt
                    };
                    return jt = l.actionId_, l;
                }(0, t);
                try {
                    return n.apply(i, r);
                } catch (a) {
                    throw o.error_ = a, a;
                } finally{
                    !function(e) {
                        jt !== e.actionId_ && B(30);
                        jt = e.parentActionId_, void 0 !== e.error_ && (Xt.suppressReactionErrors = !0);
                        It(e.prevAllowStateChanges_), Wt(e.prevAllowStateReads_), rn(), e.runAsAction_ && Ht(e.prevDerivation_);
                        Xt.suppressReactionErrors = !1;
                    }(o);
                }
            }(0, n, t, i || this, arguments);
        }
        return void 0 === n && (n = !1), r.isMobxAction = !0, r.toString = function() {
            return t.toString();
        }, zt && (Tt.value = e, W(r, "name", Tt)), r;
    }
    function xt(e) {
        var t = Xt.allowStateChanges;
        return Xt.allowStateChanges = e, t;
    }
    function It(e) {
        Xt.allowStateChanges = e;
    }
    var Lt = function(e) {
        function t(t, n, i, r, o) {
            var a;
            return void 0 === i && (i = "ObservableValue"), void 0 === o && (o = Se.default), (a = e.call(this, i) || this).enhancer = void 0, a.name_ = void 0, a.equals = void 0, a.hasUnreportedChange_ = !1, a.interceptors_ = void 0, a.changeListeners_ = void 0, a.value_ = void 0, a.dehancer = void 0, a.enhancer = n, a.name_ = i, a.equals = o, a.value_ = n(t, void 0, i), a;
        }
        be(t, e);
        var n = t.prototype;
        return n.dehanceValue = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }, n.set = function(e) {
            this.value_, (e = this.prepareNewValue_(e)) !== Xt.UNCHANGED && this.setNewValue_(e);
        }, n.prepareNewValue_ = function(e) {
            if (Bn(this)) {
                var t = Vn(this, {
                    object: this,
                    type: Jn,
                    newValue: e
                });
                if (!t) return Xt.UNCHANGED;
                e = t.newValue;
            }
            return e = this.enhancer(e, this.value_, this.name_), this.equals(this.value_, e) ? Xt.UNCHANGED : e;
        }, n.setNewValue_ = function(e) {
            var t = this.value_;
            this.value_ = e, this.reportChanged(), Hn(this) && Wn(this, {
                type: Jn,
                object: this,
                newValue: e,
                oldValue: t
            });
        }, n.get = function() {
            return this.reportObserved(), this.dehanceValue(this.value_);
        }, n.intercept_ = function(e) {
            return Gn(this, e);
        }, n.observe_ = function(e, t) {
            return t && e({
                observableKind: "value",
                debugObjectName: this.name_,
                object: this,
                type: Jn,
                newValue: this.value_,
                oldValue: void 0
            }), Zn(this, e);
        }, n.raw = function() {
            return this.value_;
        }, n.toJSON = function() {
            return this.get();
        }, n.toString = function() {
            return this.name_ + "[" + this.value_ + "]";
        }, n.valueOf = function() {
            return pe(this.get());
        }, n[Symbol.toPrimitive] = function() {
            return this.valueOf();
        }, t;
    }(Le), Ot = function() {
        function e(e) {
            this.dependenciesState_ = Et.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.observers_ = new Set, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = Et.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Qt(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.flags_ = 0, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = At.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, e.get || B(31), this.derivation = e.get, this.name_ = e.name || "ComputedValue", e.set && (this.setter_ = kt("ComputedValue-setter", e.set)), this.equals_ = e.equals || (e.compareStructural || e.struct ? Se.structural : Se.default), this.scope_ = e.context, this.requiresReaction_ = e.requiresReaction, this.keepAlive_ = !!e.keepAlive;
        }
        var t = e.prototype;
        return t.onBecomeStale_ = function() {
            !function(e) {
                if (e.lowestObserverState_ !== Et.UP_TO_DATE_) return;
                e.lowestObserverState_ = Et.POSSIBLY_STALE_, e.observers_.forEach(function(e) {
                    e.dependenciesState_ === Et.UP_TO_DATE_ && (e.dependenciesState_ = Et.POSSIBLY_STALE_, e.onBecomeStale_());
                });
            }(this);
        }, t.onBO = function() {
            this.onBOL && this.onBOL.forEach(function(e) {
                return e();
            });
        }, t.onBUO = function() {
            this.onBUOL && this.onBUOL.forEach(function(e) {
                return e();
            });
        }, t.get = function() {
            if (this.isComputing && B(32, this.name_, this.derivation), 0 !== Xt.inBatch || 0 !== this.observers_.size || this.keepAlive_) {
                if (on(this), Yt(this)) {
                    var e = Xt.trackingContext;
                    this.keepAlive_ && !e && (Xt.trackingContext = this), this.trackAndCompute() && function(e) {
                        if (e.lowestObserverState_ === Et.STALE_) return;
                        e.lowestObserverState_ = Et.STALE_, e.observers_.forEach(function(t) {
                            t.dependenciesState_ === Et.POSSIBLY_STALE_ ? t.dependenciesState_ = Et.STALE_ : t.dependenciesState_ === Et.UP_TO_DATE_ && (e.lowestObserverState_ = Et.UP_TO_DATE_);
                        });
                    }(this), Xt.trackingContext = e;
                }
            } else Yt(this) && (this.warnAboutUntrackedRead_(), nn(), this.value_ = this.computeValue_(!1), rn());
            var t = this.value_;
            if (Pt(t)) throw t.cause;
            return t;
        }, t.set = function(e) {
            if (this.setter_) {
                this.isRunningSetter && B(33, this.name_), this.isRunningSetter = !0;
                try {
                    this.setter_.call(this.scope_, e);
                } finally{
                    this.isRunningSetter = !1;
                }
            } else B(34, this.name_);
        }, t.trackAndCompute = function() {
            var e = this.value_, t = this.dependenciesState_ === Et.NOT_TRACKING_, n = this.computeValue_(!0), i = t || Pt(e) || Pt(n) || !this.equals_(e, n);
            return i && (this.value_ = n), i;
        }, t.computeValue_ = function(e) {
            this.isComputing = !0;
            var t, n = xt(!1);
            if (e) t = Rt(this, this.derivation, this.scope_);
            else if (!0 === Xt.disableErrorBoundaries) t = this.derivation.call(this.scope_);
            else try {
                t = this.derivation.call(this.scope_);
            } catch (i) {
                t = new Qt(i);
            }
            return It(n), this.isComputing = !1, t;
        }, t.suspend_ = function() {
            this.keepAlive_ || (Bt(this), this.value_ = void 0);
        }, t.observe_ = function(e, t) {
            var n = this, i = !0, r = void 0;
            return function(e, t) {
                var n, i, r, o;
                void 0 === t && (t = q);
                var a, s = null != (n = null == (i = t) ? void 0 : i.name) ? n : "Autorun";
                if (t.scheduler || t.delay) {
                    var l = jn(t), u = !1;
                    a = new sn(s, function() {
                        u || (u = !0, l(function() {
                            u = !1, a.isDisposed || a.track(_);
                        }));
                    }, t.onError, t.requiresObservable);
                } else a = new sn(s, function() {
                    this.track(_);
                }, t.onError, t.requiresObservable);
                function _() {
                    e(a);
                }
                null != (r = t) && null != (r = r.signal) && r.aborted || a.schedule_();
                return a.getDisposer_(null == (o = t) ? void 0 : o.signal);
            }(function() {
                var o = n.get();
                if (!i || t) {
                    var a = Vt();
                    e({
                        observableKind: "computed",
                        debugObjectName: n.name_,
                        type: Jn,
                        object: n,
                        newValue: o,
                        oldValue: r
                    }), Ht(a);
                }
                i = !1, r = o;
            });
        }, t.warnAboutUntrackedRead_ = function() {}, t.toString = function() {
            return this.name_ + "[" + this.derivation.toString() + "]";
        }, t.valueOf = function() {
            return pe(this.get());
        }, t[Symbol.toPrimitive] = function() {
            return this.valueOf();
        }, ye(e, [
            {
                key: "isComputing",
                get: function() {
                    return fe(this.flags_, e.isComputingMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isComputingMask_, t);
                }
            },
            {
                key: "isRunningSetter",
                get: function() {
                    return fe(this.flags_, e.isRunningSetterMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isRunningSetterMask_, t);
                }
            },
            {
                key: "isBeingObserved",
                get: function() {
                    return fe(this.flags_, e.isBeingObservedMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isBeingObservedMask_, t);
                }
            },
            {
                key: "isPendingUnobservation",
                get: function() {
                    return fe(this.flags_, e.isPendingUnobservationMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isPendingUnobservationMask_, t);
                }
            },
            {
                key: "diffValue",
                get: function() {
                    return fe(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.diffValueMask_, 1 === t);
                }
            }
        ]);
    }();
    Ot.isComputingMask_ = 1, Ot.isRunningSetterMask_ = 2, Ot.isBeingObservedMask_ = 4, Ot.isPendingUnobservationMask_ = 8, Ot.diffValueMask_ = 16;
    var Et, St, At, Ut, Ct = ue("ComputedValue", Ot);
    (St = Et || (Et = {}))[St.NOT_TRACKING_ = -1] = "NOT_TRACKING_", St[St.UP_TO_DATE_ = 0] = "UP_TO_DATE_", St[St.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", St[St.STALE_ = 2] = "STALE_", (Ut = At || (At = {}))[Ut.NONE = 0] = "NONE", Ut[Ut.LOG = 1] = "LOG", Ut[Ut.BREAK = 2] = "BREAK";
    var Qt = function(e) {
        this.cause = void 0, this.cause = e;
    };
    function Pt(e) {
        return e instanceof Qt;
    }
    function Yt(e) {
        switch(e.dependenciesState_){
            case Et.UP_TO_DATE_:
                return !1;
            case Et.NOT_TRACKING_:
            case Et.STALE_:
                return !0;
            case Et.POSSIBLY_STALE_:
                for(var t = Zt(!0), n = Vt(), i = e.observing_, r = i.length, o = 0; o < r; o++){
                    var a = i[o];
                    if (Ct(a)) {
                        if (Xt.disableErrorBoundaries) a.get();
                        else try {
                            a.get();
                        } catch (s) {
                            return Ht(n), Wt(t), !0;
                        }
                        if (e.dependenciesState_ === Et.STALE_) return Ht(n), Wt(t), !0;
                    }
                }
                return Ft(e), Ht(n), Wt(t), !1;
        }
    }
    function Rt(e, t, n) {
        var i = Zt(!0);
        Ft(e), e.newObserving_ = new Array(0 === e.runId_ ? 100 : e.observing_.length), e.unboundDepsCount_ = 0, e.runId_ = ++Xt.runId;
        var r, o = Xt.trackingDerivation;
        if (Xt.trackingDerivation = e, Xt.inBatch++, !0 === Xt.disableErrorBoundaries) r = t.call(n);
        else try {
            r = t.call(n);
        } catch (a) {
            r = new Qt(a);
        }
        return Xt.inBatch--, Xt.trackingDerivation = o, function(e) {
            for(var t = e.observing_, n = e.observing_ = e.newObserving_, i = Et.UP_TO_DATE_, r = 0, o = e.unboundDepsCount_, a = 0; a < o; a++){
                var s = n[a];
                0 === s.diffValue && (s.diffValue = 1, r !== a && (n[r] = s), r++), s.dependenciesState_ > i && (i = s.dependenciesState_);
            }
            n.length = r, e.newObserving_ = null, o = t.length;
            for(; o--;){
                var l = t[o];
                0 === l.diffValue && en(l, e), l.diffValue = 0;
            }
            for(; r--;){
                var u = n[r];
                1 === u.diffValue && (u.diffValue = 0, $t(u, e));
            }
            i !== Et.UP_TO_DATE_ && (e.dependenciesState_ = i, e.onBecomeStale_());
        }(e), Wt(i), r;
    }
    function Bt(e) {
        var t = e.observing_;
        e.observing_ = [];
        for(var n = t.length; n--;)en(t[n], e);
        e.dependenciesState_ = Et.NOT_TRACKING_;
    }
    function Gt(e) {
        var t = Vt();
        try {
            return e();
        } finally{
            Ht(t);
        }
    }
    function Vt() {
        var e = Xt.trackingDerivation;
        return Xt.trackingDerivation = null, e;
    }
    function Ht(e) {
        Xt.trackingDerivation = e;
    }
    function Zt(e) {
        var t = Xt.allowStateReads;
        return Xt.allowStateReads = e, t;
    }
    function Wt(e) {
        Xt.allowStateReads = e;
    }
    function Ft(e) {
        if (e.dependenciesState_ !== Et.UP_TO_DATE_) {
            e.dependenciesState_ = Et.UP_TO_DATE_;
            for(var t = e.observing_, n = t.length; n--;)t[n].lowestObserverState_ = Et.UP_TO_DATE_;
        }
    }
    var Jt = function() {
        this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
    }, qt = !0, Kt = !1, Xt = function() {
        var e = V();
        return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (qt = !1), e.__mobxGlobals && e.__mobxGlobals.version !== (new Jt).version && (qt = !1), qt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new Jt) : (setTimeout(function() {
            Kt || B(35);
        }, 1), new Jt);
    }();
    function $t(e, t) {
        e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
    }
    function en(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && tn(e);
    }
    function tn(e) {
        !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, Xt.pendingUnobservations.push(e));
    }
    function nn() {
        Xt.inBatch++;
    }
    function rn() {
        if (0 === --Xt.inBatch) {
            _n();
            for(var e = Xt.pendingUnobservations, t = 0; t < e.length; t++){
                var n = e[t];
                n.isPendingUnobservation = !1, 0 === n.observers_.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBUO()), n instanceof Ot && n.suspend_());
            }
            Xt.pendingUnobservations = [];
        }
    }
    function on(e) {
        var t = Xt.trackingDerivation;
        return null !== t ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved && Xt.trackingContext && (e.isBeingObserved = !0, e.onBO())), e.isBeingObserved) : (0 === e.observers_.size && Xt.inBatch > 0 && tn(e), !1);
    }
    function an(e) {
        e.lowestObserverState_ !== Et.STALE_ && (e.lowestObserverState_ = Et.STALE_, e.observers_.forEach(function(e) {
            e.dependenciesState_ === Et.UP_TO_DATE_ && e.onBecomeStale_(), e.dependenciesState_ = Et.STALE_;
        }));
    }
    var sn = function() {
        function e(e, t, n, i) {
            void 0 === e && (e = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = Et.NOT_TRACKING_, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0, this.isTracing_ = At.NONE, this.name_ = e, this.onInvalidate_ = t, this.errorHandler_ = n, this.requiresObservable_ = i;
        }
        var t = e.prototype;
        return t.onBecomeStale_ = function() {
            this.schedule_();
        }, t.schedule_ = function() {
            this.isScheduled || (this.isScheduled = !0, Xt.pendingReactions.push(this), _n());
        }, t.runReaction_ = function() {
            if (!this.isDisposed) {
                nn(), this.isScheduled = !1;
                var e = Xt.trackingContext;
                if (Xt.trackingContext = this, Yt(this)) {
                    this.isTrackPending = !0;
                    try {
                        this.onInvalidate_();
                    } catch (t) {
                        this.reportExceptionInDerivation_(t);
                    }
                }
                Xt.trackingContext = e, rn();
            }
        }, t.track = function(e) {
            if (!this.isDisposed) {
                nn(), this.isRunning = !0;
                var t = Xt.trackingContext;
                Xt.trackingContext = this;
                var n = Rt(this, e, void 0);
                Xt.trackingContext = t, this.isRunning = !1, this.isTrackPending = !1, this.isDisposed && Bt(this), Pt(n) && this.reportExceptionInDerivation_(n.cause), rn();
            }
        }, t.reportExceptionInDerivation_ = function(e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
                if (Xt.disableErrorBoundaries) throw e;
                var n = "[mobx] uncaught error in '" + this + "'";
                Xt.suppressReactionErrors || console.error(n, e), Xt.globalReactionErrorHandlers.forEach(function(n) {
                    return n(e, t);
                });
            }
        }, t.dispose = function() {
            this.isDisposed || (this.isDisposed = !0, this.isRunning || (nn(), Bt(this), rn()));
        }, t.getDisposer_ = function(e) {
            var t = this, n = function n() {
                t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener("abort", n);
            };
            return null == e || null == e.addEventListener || e.addEventListener("abort", n), n[Ie] = this, "dispose" in Symbol && "symbol" == typeof Symbol.dispose && (n[Symbol.dispose] = n), n;
        }, t.toString = function() {
            return "Reaction[" + this.name_ + "]";
        }, t.trace = function(e) {}, ye(e, [
            {
                key: "isDisposed",
                get: function() {
                    return fe(this.flags_, e.isDisposedMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isDisposedMask_, t);
                }
            },
            {
                key: "isScheduled",
                get: function() {
                    return fe(this.flags_, e.isScheduledMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isScheduledMask_, t);
                }
            },
            {
                key: "isTrackPending",
                get: function() {
                    return fe(this.flags_, e.isTrackPendingMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isTrackPendingMask_, t);
                }
            },
            {
                key: "isRunning",
                get: function() {
                    return fe(this.flags_, e.isRunningMask_);
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.isRunningMask_, t);
                }
            },
            {
                key: "diffValue",
                get: function() {
                    return fe(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function(t) {
                    this.flags_ = he(this.flags_, e.diffValueMask_, 1 === t);
                }
            }
        ]);
    }();
    sn.isDisposedMask_ = 1, sn.isScheduledMask_ = 2, sn.isTrackPendingMask_ = 4, sn.isRunningMask_ = 8, sn.diffValueMask_ = 16;
    var ln = 100, un = function(e) {
        return e();
    };
    function _n() {
        Xt.inBatch > 0 || Xt.isRunningReactions || un(cn);
    }
    function cn() {
        Xt.isRunningReactions = !0;
        for(var e = Xt.pendingReactions, t = 0; e.length > 0;){
            ++t === ln && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
            for(var n = e.splice(0), i = 0, r = n.length; i < r; i++)n[i].runReaction_();
        }
        Xt.isRunningReactions = !1;
    }
    var dn = ue("Reaction", sn);
    var gn = "action", pn = "autoAction", Mn = Qe(gn), mn = Qe("action.bound", {
        bound: !0
    }), fn = Qe(pn, {
        autoAction: !0
    }), hn = Qe("autoAction.bound", {
        autoAction: !0,
        bound: !0
    });
    function vn(e) {
        return function(t, n) {
            return ne(t) ? kt(t.name || "<unnamed action>", t, e) : ne(n) ? kt(t, n, e) : xe(n) ? (e ? fn : Mn).decorate_20223_(t, n) : ie(n) ? ke(t, n, e ? fn : Mn) : ie(t) ? Te(Qe(e ? pn : gn, {
                name: t,
                autoAction: e
            })) : void 0;
        };
    }
    var yn = vn(!1);
    Object.assign(yn, Mn);
    var Nn = vn(!0);
    function wn(e) {
        return ne(e) && !0 === e.isMobxAction;
    }
    Object.assign(Nn, fn), yn.bound = Te(mn), Nn.bound = Te(hn);
    var bn = function(e) {
        return e();
    };
    function jn(e) {
        return e.scheduler ? e.scheduler : e.delay ? function(t) {
            return setTimeout(t, e.delay);
        } : bn;
    }
    function Dn(e, t, n) {
        var i, r, o;
        void 0 === n && (n = q);
        var a, s, l, u = null != (i = n.name) ? i : "Reaction", _ = yn(u, n.onError ? (a = n.onError, s = t, function() {
            try {
                return s.apply(this, arguments);
            } catch (e) {
                a.call(this, e);
            }
        }) : t), c = !n.scheduler && !n.delay, d = jn(n), g = !0, p = !1, M = n.compareStructural ? Se.structural : n.equals || Se.default, m = new sn(u, function() {
            g || c ? f() : p || (p = !0, d(f));
        }, n.onError, n.requiresObservable);
        function f() {
            if (p = !1, !m.isDisposed) {
                var t = !1, i = l;
                m.track(function() {
                    var n = function(e, t) {
                        var n = xt(e);
                        try {
                            return t();
                        } finally{
                            It(n);
                        }
                    }(!1, function() {
                        return e(m);
                    });
                    t = g || !M(l, n), l = n;
                }), (g && n.fireImmediately || !g && t) && _(l, i, m), g = !1;
            }
        }
        return null != (r = n) && null != (r = r.signal) && r.aborted || m.schedule_(), m.getDisposer_(null == (o = n) ? void 0 : o.signal);
    }
    var zn = "onBO", Tn = "onBUO";
    function kn(e, t, n) {
        return xn(Tn, e, t, n);
    }
    function xn(e, t, n, i) {
        var r = Ai(t), o = ne(i) ? i : n, a = e + "L";
        return r[a] ? r[a].add(o) : r[a] = new Set([
            o
        ]), function() {
            var e = r[a];
            e && (e.delete(o), 0 === e.size && delete r[a]);
        };
    }
    var In = "always";
    var Ln = 0;
    function On() {
        this.message = "FLOW_CANCELLED";
    }
    On.prototype = Object.create(Error.prototype);
    var En = Ge("flow"), Sn = Ge("flow.bound", {
        bound: !0
    }), An = Object.assign(function(e, t) {
        if (xe(t)) return En.decorate_20223_(e, t);
        if (ie(t)) return ke(e, t, En);
        var n = e, i = n.name || "<unnamed flow>", r = function() {
            var e, t = arguments, r = ++Ln, o = yn(i + " - runid: " + r + " - init", n).apply(this, t), a = void 0, s = new Promise(function(t, n) {
                var s = 0;
                function l(e) {
                    var t;
                    a = void 0;
                    try {
                        t = yn(i + " - runid: " + r + " - yield " + s++, o.next).call(o, e);
                    } catch (l) {
                        return n(l);
                    }
                    _(t);
                }
                function u(e) {
                    var t;
                    a = void 0;
                    try {
                        t = yn(i + " - runid: " + r + " - yield " + s++, o.throw).call(o, e);
                    } catch (l) {
                        return n(l);
                    }
                    _(t);
                }
                function _(e) {
                    if (!ne(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (a = Promise.resolve(e.value)).then(l, u);
                    e.then(_, n);
                }
                e = n, l(void 0);
            });
            return s.cancel = yn(i + " - runid: " + r + " - cancel", function() {
                try {
                    a && Un(a);
                    var t = o.return(void 0), n = Promise.resolve(t.value);
                    n.then(te, te), Un(n), e(new On);
                } catch (i) {
                    e(i);
                }
            }), s;
        };
        return r.isMobXFlow = !0, r;
    }, En);
    function Un(e) {
        ne(e.cancel) && e.cancel();
    }
    function Cn(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
    }
    function Qn(e) {
        return function(e) {
            return !!e && (wi(e) || !!e[Ie] || Oe(e) || dn(e) || Ct(e));
        }(e);
    }
    function Pn(e, t) {
        void 0 === t && (t = void 0), nn();
        try {
            return e.apply(t);
        } finally{
            rn();
        }
    }
    function Yn(e) {
        return e[Ie];
    }
    An.bound = Te(Sn);
    var Rn = {
        has: function(e, t) {
            return Yn(e).has_(t);
        },
        get: function(e, t) {
            return Yn(e).get_(t);
        },
        set: function(e, t, n) {
            var i;
            return !!ie(t) && (null == (i = Yn(e).set_(t, n, !0)) || i);
        },
        deleteProperty: function(e, t) {
            var n;
            return !!ie(t) && (null == (n = Yn(e).delete_(t, !0)) || n);
        },
        defineProperty: function(e, t, n) {
            var i;
            return null == (i = Yn(e).defineProperty_(t, n)) || i;
        },
        ownKeys: function(e) {
            return Yn(e).ownKeys_();
        },
        preventExtensions: function(e) {
            B(13);
        }
    };
    function Bn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
    }
    function Gn(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return n.push(t), ee(function() {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        });
    }
    function Vn(e, t) {
        var n = Vt();
        try {
            for(var i = [].concat(e.interceptors_ || []), r = 0, o = i.length; r < o && ((t = i[r](t)) && !t.type && B(14), t); r++);
            return t;
        } finally{
            Ht(n);
        }
    }
    function Hn(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
    }
    function Zn(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return n.push(t), ee(function() {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
        });
    }
    function Wn(e, t) {
        var n = Vt(), i = e.changeListeners_;
        if (i) {
            for(var r = 0, o = (i = i.slice()).length; r < o; r++)i[r](t);
            Ht(n);
        }
    }
    var Fn = "splice", Jn = "update", qn = {
        get: function(e, t) {
            var n = e[Ie];
            return t === Ie ? n : "length" === t ? n.getArrayLength_() : "string" != typeof t || isNaN(t) ? Me($n, t) ? $n[t] : e[t] : n.get_(parseInt(t));
        },
        set: function(e, t, n) {
            var i = e[Ie];
            return "length" === t && i.setArrayLength_(n), "symbol" == typeof t || isNaN(t) ? e[t] = n : i.set_(parseInt(t), n), !0;
        },
        preventExtensions: function() {
            B(15);
        }
    }, Kn = function() {
        function e(e, t, n, i) {
            void 0 === e && (e = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = n, this.legacyMode_ = i, this.atom_ = new Le(e), this.enhancer_ = function(e, n) {
                return t(e, n, "ObservableArray[..]");
            };
        }
        var t = e.prototype;
        return t.dehanceValue_ = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }, t.dehanceValues_ = function(e) {
            return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
        }, t.intercept_ = function(e) {
            return Gn(this, e);
        }, t.observe_ = function(e, t) {
            return void 0 === t && (t = !1), t && e({
                observableKind: "array",
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: "splice",
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
            }), Zn(this, e);
        }, t.getArrayLength_ = function() {
            return this.atom_.reportObserved(), this.values_.length;
        }, t.setArrayLength_ = function(e) {
            ("number" != typeof e || isNaN(e) || e < 0) && B("Out of range: " + e);
            var t = this.values_.length;
            if (e !== t) {
                if (e > t) {
                    for(var n = new Array(e - t), i = 0; i < e - t; i++)n[i] = void 0;
                    this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }
        }, t.updateArrayLength_ = function(e, t) {
            e !== this.lastKnownLength_ && B(16), this.lastKnownLength_ += t, this.legacyMode_ && t > 0 && Ei(e + t + 1);
        }, t.spliceWithArray_ = function(e, t, n) {
            var i = this;
            this.atom_;
            var r = this.values_.length;
            if (void 0 === e ? e = 0 : e > r ? e = r : e < 0 && (e = Math.max(0, r + e)), t = 1 === arguments.length ? r - e : null == t ? 0 : Math.max(0, Math.min(t, r - e)), void 0 === n && (n = J), Bn(this)) {
                var o = Vn(this, {
                    object: this.proxy_,
                    type: Fn,
                    index: e,
                    removedCount: t,
                    added: n
                });
                if (!o) return J;
                t = o.removedCount, n = o.added;
            }
            if (n = 0 === n.length ? n : n.map(function(e) {
                return i.enhancer_(e, void 0);
            }), this.legacyMode_) {
                var a = n.length - t;
                this.updateArrayLength_(r, a);
            }
            var s = this.spliceItemsIntoValues_(e, t, n);
            return 0 === t && 0 === n.length || this.notifyArraySplice_(e, n, s), this.dehanceValues_(s);
        }, t.spliceItemsIntoValues_ = function(e, t, n) {
            var i;
            if (n.length < 1e4) return (i = this.values_).splice.apply(i, [
                e,
                t
            ].concat(n));
            var r = this.values_.slice(e, e + t), o = this.values_.slice(e + t);
            this.values_.length += n.length - t;
            for(var a = 0; a < n.length; a++)this.values_[e + a] = n[a];
            for(var s = 0; s < o.length; s++)this.values_[e + n.length + s] = o[s];
            return r;
        }, t.notifyArrayChildUpdate_ = function(e, t, n) {
            var i = !this.owned_ && !1, r = Hn(this), o = r || i ? {
                observableKind: "array",
                object: this.proxy_,
                type: Jn,
                debugObjectName: this.atom_.name_,
                index: e,
                newValue: t,
                oldValue: n
            } : null;
            this.atom_.reportChanged(), r && Wn(this, o);
        }, t.notifyArraySplice_ = function(e, t, n) {
            var i = !this.owned_ && !1, r = Hn(this), o = r || i ? {
                observableKind: "array",
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: Fn,
                index: e,
                removed: n,
                added: t,
                removedCount: n.length,
                addedCount: t.length
            } : null;
            this.atom_.reportChanged(), r && Wn(this, o);
        }, t.get_ = function(e) {
            if (!(this.legacyMode_ && e >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
            console.warn("[mobx] Out of bounds read: " + e);
        }, t.set_ = function(e, t) {
            var n = this.values_;
            if (this.legacyMode_ && e > n.length && B(17, e, n.length), e < n.length) {
                this.atom_;
                var i = n[e];
                if (Bn(this)) {
                    var r = Vn(this, {
                        type: Jn,
                        object: this.proxy_,
                        index: e,
                        newValue: t
                    });
                    if (!r) return;
                    t = r.newValue;
                }
                (t = this.enhancer_(t, i)) !== i && (n[e] = t, this.notifyArrayChildUpdate_(e, t, i));
            } else {
                for(var o = new Array(e + 1 - n.length), a = 0; a < o.length - 1; a++)o[a] = void 0;
                o[o.length - 1] = t, this.spliceWithArray_(n.length, 0, o);
            }
        }, e;
    }();
    function Xn(e, t, n, i) {
        return void 0 === n && (n = "ObservableArray"), void 0 === i && (i = !1), $(), Ci(function() {
            var r = new Kn(n, t, i, !1);
            le(r.values_, Ie, r);
            var o = new Proxy(r.values_, qn);
            return r.proxy_ = o, e && e.length && r.spliceWithArray_(0, 0, e), o;
        });
    }
    var $n = {
        clear: function() {
            return this.splice(0);
        },
        replace: function(e) {
            var t = this[Ie];
            return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function() {
            return this.slice();
        },
        splice: function(e, t) {
            for(var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)i[r - 2] = arguments[r];
            var o = this[Ie];
            switch(arguments.length){
                case 0:
                    return [];
                case 1:
                    return o.spliceWithArray_(e);
                case 2:
                    return o.spliceWithArray_(e, t);
            }
            return o.spliceWithArray_(e, t, i);
        },
        spliceWithArray: function(e, t, n) {
            return this[Ie].spliceWithArray_(e, t, n);
        },
        push: function() {
            for(var e = this[Ie], t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i];
            return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function() {
            return this.splice(Math.max(this[Ie].values_.length - 1, 0), 1)[0];
        },
        shift: function() {
            return this.splice(0, 1)[0];
        },
        unshift: function() {
            for(var e = this[Ie], t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i];
            return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function() {
            return Xt.trackingDerivation && B(37, "reverse"), this.replace(this.slice().reverse()), this;
        },
        sort: function() {
            Xt.trackingDerivation && B(37, "sort");
            var e = this.slice();
            return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function(e) {
            var t = this[Ie], n = t.dehanceValues_(t.values_).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0);
        }
    };
    function ei(e, t) {
        "function" == typeof Array.prototype[e] && ($n[e] = t(e));
    }
    function ti(e) {
        return function() {
            var t = this[Ie];
            t.atom_.reportObserved();
            var n = t.dehanceValues_(t.values_);
            return n[e].apply(n, arguments);
        };
    }
    function ni(e) {
        return function(t, n) {
            var i = this, r = this[Ie];
            return r.atom_.reportObserved(), r.dehanceValues_(r.values_)[e](function(e, r) {
                return t.call(n, e, r, i);
            });
        };
    }
    function ii(e) {
        return function() {
            var t = this, n = this[Ie];
            n.atom_.reportObserved();
            var i = n.dehanceValues_(n.values_), r = arguments[0];
            return arguments[0] = function(e, n, i) {
                return r(e, n, i, t);
            }, i[e].apply(i, arguments);
        };
    }
    ei("at", ti), ei("concat", ti), ei("flat", ti), ei("includes", ti), ei("indexOf", ti), ei("join", ti), ei("lastIndexOf", ti), ei("slice", ti), ei("toString", ti), ei("toLocaleString", ti), ei("toSorted", ti), ei("toSpliced", ti), ei("with", ti), ei("every", ni), ei("filter", ni), ei("find", ni), ei("findIndex", ni), ei("findLast", ni), ei("findLastIndex", ni), ei("flatMap", ni), ei("forEach", ni), ei("map", ni), ei("some", ni), ei("toReversed", ni), ei("reduce", ii), ei("reduceRight", ii);
    var ri = ue("ObservableArrayAdministration", Kn);
    function oi(e) {
        return re(e) && ri(e[Ie]);
    }
    var ai = {}, si = "add", li = "delete", ui = function() {
        function e(e, t, n) {
            var i = this;
            void 0 === t && (t = Ae), void 0 === n && (n = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[Ie] = ai, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = t, this.name_ = n, ne(Map) || B(18), Ci(function() {
                i.keysAtom_ = Ee("ObservableMap.keys()"), i.data_ = new Map, i.hasMap_ = new Map, e && i.merge(e);
            });
        }
        var t = e.prototype;
        return t.has_ = function(e) {
            return this.data_.has(e);
        }, t.has = function(e) {
            var t = this;
            if (!Xt.trackingDerivation) return this.has_(e);
            var n = this.hasMap_.get(e);
            if (!n) {
                var i = n = new Lt(this.has_(e), Ue, "ObservableMap.key?", !1);
                this.hasMap_.set(e, i), kn(i, function() {
                    return t.hasMap_.delete(e);
                });
            }
            return n.get();
        }, t.set = function(e, t) {
            var n = this.has_(e);
            if (Bn(this)) {
                var i = Vn(this, {
                    type: n ? Jn : si,
                    object: this,
                    newValue: t,
                    name: e
                });
                if (!i) return this;
                t = i.newValue;
            }
            return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
        }, t.delete = function(e) {
            var t = this;
            if ((this.keysAtom_, Bn(this)) && !Vn(this, {
                type: li,
                object: this,
                name: e
            })) return !1;
            if (this.has_(e)) {
                var n = Hn(this), i = n ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: li,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e
                } : null;
                return Pn(function() {
                    var n;
                    t.keysAtom_.reportChanged(), null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1), t.data_.get(e).setNewValue_(void 0), t.data_.delete(e);
                }), n && Wn(this, i), !0;
            }
            return !1;
        }, t.updateValue_ = function(e, t) {
            var n = this.data_.get(e);
            if ((t = n.prepareNewValue_(t)) !== Xt.UNCHANGED) {
                var i = Hn(this), r = i ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Jn,
                    object: this,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                } : null;
                n.setNewValue_(t), i && Wn(this, r);
            }
        }, t.addValue_ = function(e, t) {
            var n = this;
            this.keysAtom_, Pn(function() {
                var i, r = new Lt(t, n.enhancer_, "ObservableMap.key", !1);
                n.data_.set(e, r), t = r.value_, null == (i = n.hasMap_.get(e)) || i.setNewValue_(!0), n.keysAtom_.reportChanged();
            });
            var i = Hn(this), r = i ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: si,
                object: this,
                name: e,
                newValue: t
            } : null;
            i && Wn(this, r);
        }, t.get = function(e) {
            return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0);
        }, t.dehanceValue_ = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }, t.keys = function() {
            return this.keysAtom_.reportObserved(), this.data_.keys();
        }, t.values = function() {
            var e = this, t = this.keys();
            return ci({
                next: function() {
                    var n = t.next(), i = n.done, r = n.value;
                    return {
                        done: i,
                        value: i ? void 0 : e.get(r)
                    };
                }
            });
        }, t.entries = function() {
            var e = this, t = this.keys();
            return ci({
                next: function() {
                    var n = t.next(), i = n.done, r = n.value;
                    return {
                        done: i,
                        value: i ? void 0 : [
                            r,
                            e.get(r)
                        ]
                    };
                }
            });
        }, t[Symbol.iterator] = function() {
            return this.entries();
        }, t.forEach = function(e, t) {
            for(var n, i = Ne(this); !(n = i()).done;){
                var r = n.value, o = r[0], a = r[1];
                e.call(t, a, o, this);
            }
        }, t.merge = function(e) {
            var t = this;
            return _i(e) && (e = new Map(e)), Pn(function() {
                var n, i, r;
                oe(e) ? (function(e) {
                    var t = Object.keys(e);
                    if (!de) return t;
                    var n = Object.getOwnPropertySymbols(e);
                    return n.length ? [].concat(t, n.filter(function(t) {
                        return F.propertyIsEnumerable.call(e, t);
                    })) : t;
                })(e).forEach(function(n) {
                    return t.set(n, e[n]);
                }) : Array.isArray(e) ? e.forEach(function(e) {
                    var n = e[0], i = e[1];
                    return t.set(n, i);
                }) : _e(e) ? (n = e, i = Object.getPrototypeOf(n), r = Object.getPrototypeOf(i), null !== Object.getPrototypeOf(r) && B(19, e), e.forEach(function(e, n) {
                    return t.set(n, e);
                })) : null != e && B(20, e);
            }), this;
        }, t.clear = function() {
            var e = this;
            Pn(function() {
                Gt(function() {
                    for(var t, n = Ne(e.keys()); !(t = n()).done;){
                        var i = t.value;
                        e.delete(i);
                    }
                });
            });
        }, t.replace = function(e) {
            var t = this;
            return Pn(function() {
                for(var n, i = function(e) {
                    if (_e(e) || _i(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (oe(e)) {
                        var t = new Map;
                        for(var n in e)t.set(n, e[n]);
                        return t;
                    }
                    return B(21, e);
                }(e), r = new Map, o = !1, a = Ne(t.data_.keys()); !(n = a()).done;){
                    var s = n.value;
                    if (!i.has(s)) {
                        if (t.delete(s)) o = !0;
                        else {
                            var l = t.data_.get(s);
                            r.set(s, l);
                        }
                    }
                }
                for(var u, _ = Ne(i.entries()); !(u = _()).done;){
                    var c = u.value, d = c[0], g = c[1], p = t.data_.has(d);
                    if (t.set(d, g), t.data_.has(d)) {
                        var M = t.data_.get(d);
                        r.set(d, M), p || (o = !0);
                    }
                }
                if (!o) {
                    if (t.data_.size !== r.size) t.keysAtom_.reportChanged();
                    else for(var m = t.data_.keys(), f = r.keys(), h = m.next(), v = f.next(); !h.done;){
                        if (h.value !== v.value) {
                            t.keysAtom_.reportChanged();
                            break;
                        }
                        h = m.next(), v = f.next();
                    }
                }
                t.data_ = r;
            }), this;
        }, t.toString = function() {
            return "[object ObservableMap]";
        }, t.toJSON = function() {
            return Array.from(this);
        }, t.observe_ = function(e, t) {
            return Zn(this, e);
        }, t.intercept_ = function(e) {
            return Gn(this, e);
        }, ye(e, [
            {
                key: "size",
                get: function() {
                    return this.keysAtom_.reportObserved(), this.data_.size;
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "Map";
                }
            }
        ]);
    }(), _i = ue("ObservableMap", ui);
    function ci(e) {
        return e[Symbol.toStringTag] = "MapIterator", Vi(e);
    }
    var di = {}, gi = function() {
        function e(e, t, n) {
            var i = this;
            void 0 === t && (t = Ae), void 0 === n && (n = "ObservableSet"), this.name_ = void 0, this[Ie] = di, this.data_ = new Set, this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = n, ne(Set) || B(22), this.enhancer_ = function(e, i) {
                return t(e, i, n);
            }, Ci(function() {
                i.atom_ = Ee(i.name_), e && i.replace(e);
            });
        }
        var t = e.prototype;
        return t.dehanceValue_ = function(e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }, t.clear = function() {
            var e = this;
            Pn(function() {
                Gt(function() {
                    for(var t, n = Ne(e.data_.values()); !(t = n()).done;){
                        var i = t.value;
                        e.delete(i);
                    }
                });
            });
        }, t.forEach = function(e, t) {
            for(var n, i = Ne(this); !(n = i()).done;){
                var r = n.value;
                e.call(t, r, r, this);
            }
        }, t.add = function(e) {
            var t = this;
            if (this.atom_, Bn(this)) {
                var n = Vn(this, {
                    type: si,
                    object: this,
                    newValue: e
                });
                if (!n) return this;
                e = n.newValue;
            }
            if (!this.has(e)) {
                Pn(function() {
                    t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var i = Hn(this), r = i ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: si,
                    object: this,
                    newValue: e
                } : null;
                i && Wn(this, r);
            }
            return this;
        }, t.delete = function(e) {
            var t = this;
            if (Bn(this) && !Vn(this, {
                type: li,
                object: this,
                oldValue: e
            })) return !1;
            if (this.has(e)) {
                var n = Hn(this), i = n ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: li,
                    object: this,
                    oldValue: e
                } : null;
                return Pn(function() {
                    t.atom_.reportChanged(), t.data_.delete(e);
                }), n && Wn(this, i), !0;
            }
            return !1;
        }, t.has = function(e) {
            return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e));
        }, t.entries = function() {
            var e = this.values();
            return Mi({
                next: function() {
                    var t = e.next(), n = t.value, i = t.done;
                    return i ? {
                        value: void 0,
                        done: i
                    } : {
                        value: [
                            n,
                            n
                        ],
                        done: i
                    };
                }
            });
        }, t.keys = function() {
            return this.values();
        }, t.values = function() {
            this.atom_.reportObserved();
            var e = this, t = this.data_.values();
            return Mi({
                next: function() {
                    var n = t.next(), i = n.value, r = n.done;
                    return r ? {
                        value: void 0,
                        done: r
                    } : {
                        value: e.dehanceValue_(i),
                        done: r
                    };
                }
            });
        }, t.intersection = function(e) {
            return ce(e) && !pi(e) ? e.intersection(this) : new Set(this).intersection(e);
        }, t.union = function(e) {
            return ce(e) && !pi(e) ? e.union(this) : new Set(this).union(e);
        }, t.difference = function(e) {
            return new Set(this).difference(e);
        }, t.symmetricDifference = function(e) {
            return ce(e) && !pi(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e);
        }, t.isSubsetOf = function(e) {
            return new Set(this).isSubsetOf(e);
        }, t.isSupersetOf = function(e) {
            return new Set(this).isSupersetOf(e);
        }, t.isDisjointFrom = function(e) {
            return ce(e) && !pi(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e);
        }, t.replace = function(e) {
            var t = this;
            return pi(e) && (e = new Set(e)), Pn(function() {
                Array.isArray(e) || ce(e) ? (t.clear(), e.forEach(function(e) {
                    return t.add(e);
                })) : null != e && B("Cannot initialize set from " + e);
            }), this;
        }, t.observe_ = function(e, t) {
            return Zn(this, e);
        }, t.intercept_ = function(e) {
            return Gn(this, e);
        }, t.toJSON = function() {
            return Array.from(this);
        }, t.toString = function() {
            return "[object ObservableSet]";
        }, t[Symbol.iterator] = function() {
            return this.values();
        }, ye(e, [
            {
                key: "size",
                get: function() {
                    return this.atom_.reportObserved(), this.data_.size;
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "Set";
                }
            }
        ]);
    }(), pi = ue("ObservableSet", gi);
    function Mi(e) {
        return e[Symbol.toStringTag] = "SetIterator", Vi(e);
    }
    var mi = Object.create(null), fi = "remove", hi = function() {
        function e(e, t, n, i) {
            void 0 === t && (t = new Map), void 0 === i && (i = it), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = e, this.values_ = t, this.name_ = n, this.defaultAnnotation_ = i, this.keysAtom_ = new Le("ObservableObject.keys"), this.isPlainObject_ = oe(this.target_);
        }
        var t = e.prototype;
        return t.getObservablePropValue_ = function(e) {
            return this.values_.get(e).get();
        }, t.setObservablePropValue_ = function(e, t) {
            var n = this.values_.get(e);
            if (n instanceof Ot) return n.set(t), !0;
            if (Bn(this)) {
                var i = Vn(this, {
                    type: Jn,
                    object: this.proxy_ || this.target_,
                    name: e,
                    newValue: t
                });
                if (!i) return null;
                t = i.newValue;
            }
            if ((t = n.prepareNewValue_(t)) !== Xt.UNCHANGED) {
                var r = Hn(this), o = r ? {
                    type: Jn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                } : null;
                n.setNewValue_(t), r && Wn(this, o);
            }
            return !0;
        }, t.get_ = function(e) {
            return Xt.trackingDerivation && !Me(this.target_, e) && this.has_(e), this.target_[e];
        }, t.set_ = function(e, t, n) {
            return void 0 === n && (n = !1), Me(this.target_, e) ? this.values_.has(e) ? this.setObservablePropValue_(e, t) : n ? Reflect.set(this.target_, e, t) : (this.target_[e] = t, !0) : this.extend_(e, {
                value: t,
                enumerable: !0,
                writable: !0,
                configurable: !0
            }, this.defaultAnnotation_, n);
        }, t.has_ = function(e) {
            if (!Xt.trackingDerivation) return e in this.target_;
            this.pendingKeys_ || (this.pendingKeys_ = new Map);
            var t = this.pendingKeys_.get(e);
            return t || (t = new Lt(e in this.target_, Ue, "ObservableObject.key?", !1), this.pendingKeys_.set(e, t)), t.get();
        }, t.make_ = function(e, t) {
            if (!0 === t && (t = this.defaultAnnotation_), !1 !== t) {
                if (!(e in this.target_)) {
                    var n;
                    if (null != (n = this.target_[ze]) && n[e]) return;
                    B(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for(var i = this.target_; i && i !== F;){
                    var r = Z(i, e);
                    if (r) {
                        var o = t.make_(this, e, r, i);
                        if (0 === o) return;
                        if (1 === o) break;
                    }
                    i = Object.getPrototypeOf(i);
                }
                bi(this, t, e);
            }
        }, t.extend_ = function(e, t, n, i) {
            if (void 0 === i && (i = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n) return this.defineProperty_(e, t, i);
            var r = n.extend_(this, e, t, i);
            return r && bi(this, n, e), r;
        }, t.defineProperty_ = function(e, t, n) {
            void 0 === n && (n = !1), this.keysAtom_;
            try {
                nn();
                var i = this.delete_(e);
                if (!i) return i;
                if (Bn(this)) {
                    var r = Vn(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: si,
                        newValue: t.value
                    });
                    if (!r) return null;
                    var o = r.newValue;
                    t.value !== o && (t = we({}, t, {
                        value: o
                    }));
                }
                if (n) {
                    if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else W(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
            } finally{
                rn();
            }
            return !0;
        }, t.defineObservableProperty_ = function(e, t, n, i) {
            void 0 === i && (i = !1), this.keysAtom_;
            try {
                nn();
                var r = this.delete_(e);
                if (!r) return r;
                if (Bn(this)) {
                    var o = Vn(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: si,
                        newValue: t
                    });
                    if (!o) return null;
                    t = o.newValue;
                }
                var a = Ni(e), s = {
                    configurable: !Xt.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set
                };
                if (i) {
                    if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else W(this.target_, e, s);
                var l = new Lt(t, n, "ObservableObject.key", !1);
                this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_);
            } finally{
                rn();
            }
            return !0;
        }, t.defineComputedProperty_ = function(e, t, n) {
            void 0 === n && (n = !1), this.keysAtom_;
            try {
                nn();
                var i = this.delete_(e);
                if (!i) return i;
                if (Bn(this)) {
                    if (!Vn(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: si,
                        newValue: void 0
                    })) return null;
                }
                t.name || (t.name = "ObservableObject.key"), t.context = this.proxy_ || this.target_;
                var r = Ni(e), o = {
                    configurable: !Xt.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: r.get,
                    set: r.set
                };
                if (n) {
                    if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else W(this.target_, e, o);
                this.values_.set(e, new Ot(t)), this.notifyPropertyAddition_(e, void 0);
            } finally{
                rn();
            }
            return !0;
        }, t.delete_ = function(e, t) {
            if (void 0 === t && (t = !1), this.keysAtom_, !Me(this.target_, e)) return !0;
            if (Bn(this) && !Vn(this, {
                object: this.proxy_ || this.target_,
                name: e,
                type: fi
            })) return null;
            try {
                var n;
                nn();
                var i, r = Hn(this), o = this.values_.get(e), a = void 0;
                if (!o && r) a = null == (i = Z(this.target_, e)) ? void 0 : i.value;
                if (t) {
                    if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (o && (this.values_.delete(e), o instanceof Lt && (a = o.value_), an(o)), this.keysAtom_.reportChanged(), null == (n = this.pendingKeys_) || null == (n = n.get(e)) || n.set(e in this.target_), r) {
                    var s = {
                        type: fi,
                        observableKind: "object",
                        object: this.proxy_ || this.target_,
                        debugObjectName: this.name_,
                        oldValue: a,
                        name: e
                    };
                    r && Wn(this, s);
                }
            } finally{
                rn();
            }
            return !0;
        }, t.observe_ = function(e, t) {
            return Zn(this, e);
        }, t.intercept_ = function(e) {
            return Gn(this, e);
        }, t.notifyPropertyAddition_ = function(e, t) {
            var n, i = Hn(this);
            if (i) {
                var r = i ? {
                    type: si,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    name: e,
                    newValue: t
                } : null;
                i && Wn(this, r);
            }
            null == (n = this.pendingKeys_) || null == (n = n.get(e)) || n.set(!0), this.keysAtom_.reportChanged();
        }, t.ownKeys_ = function() {
            return this.keysAtom_.reportObserved(), ge(this.target_);
        }, t.keys_ = function() {
            return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }, e;
    }();
    function vi(e, t) {
        var n;
        if (Me(e, Ie)) return e;
        var i = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject", r = new hi(e, new Map, String(i), function(e) {
            var t;
            return e ? null != (t = e.defaultDecorator) ? t : rt(e) : void 0;
        }(t));
        return se(e, Ie, r), e;
    }
    var yi = ue("ObservableObjectAdministration", hi);
    function Ni(e) {
        return mi[e] || (mi[e] = {
            get: function() {
                return this[Ie].getObservablePropValue_(e);
            },
            set: function(t) {
                return this[Ie].setObservablePropValue_(e, t);
            }
        });
    }
    function wi(e) {
        return !!re(e) && yi(e[Ie]);
    }
    function bi(e, t, n) {
        var i;
        null == (i = e.target_[ze]) || delete i[n];
    }
    var ji, Di, zi = Li(0), Ti = function() {
        var e = !1, t = {};
        return Object.defineProperty(t, "0", {
            set: function() {
                e = !0;
            }
        }), Object.create(t)[0] = 1, !1 === e;
    }(), ki = 0, xi = function() {};
    ji = xi, Di = Array.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(ji.prototype, Di) : void 0 !== ji.prototype.__proto__ ? ji.prototype.__proto__ = Di : ji.prototype = Di;
    var Ii = function(e) {
        function t(t, n, i, r) {
            var o;
            return void 0 === i && (i = "ObservableArray"), void 0 === r && (r = !1), o = e.call(this) || this, Ci(function() {
                var e = new Kn(i, n, r, !0);
                e.proxy_ = o, le(o, Ie, e), t && t.length && o.spliceWithArray(0, 0, t), Ti && Object.defineProperty(o, "0", zi);
            }), o;
        }
        be(t, e);
        var n = t.prototype;
        return n.concat = function() {
            this[Ie].atom_.reportObserved();
            for(var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n];
            return Array.prototype.concat.apply(this.slice(), t.map(function(e) {
                return oi(e) ? e.slice() : e;
            }));
        }, n[Symbol.iterator] = function() {
            var e = this, t = 0;
            return Vi({
                next: function() {
                    return t < e.length ? {
                        value: e[t++],
                        done: !1
                    } : {
                        done: !0,
                        value: void 0
                    };
                }
            });
        }, ye(t, [
            {
                key: "length",
                get: function() {
                    return this[Ie].getArrayLength_();
                },
                set: function(e) {
                    this[Ie].setArrayLength_(e);
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "Array";
                }
            }
        ]);
    }(xi);
    function Li(e) {
        return {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this[Ie].get_(e);
            },
            set: function(t) {
                this[Ie].set_(e, t);
            }
        };
    }
    function Oi(e) {
        W(Ii.prototype, "" + e, Li(e));
    }
    function Ei(e) {
        if (e > ki) {
            for(var t = ki; t < e + 100; t++)Oi(t);
            ki = e;
        }
    }
    function Si(e, t, n) {
        return new Ii(e, t, n);
    }
    function Ai(e, t) {
        if ("object" == typeof e && null !== e) {
            if (oi(e)) return void 0 !== t && B(23), e[Ie].atom_;
            if (pi(e)) return e.atom_;
            if (_i(e)) {
                if (void 0 === t) return e.keysAtom_;
                var n = e.data_.get(t) || e.hasMap_.get(t);
                return n || B(25, t, Ui(e)), n;
            }
            if (wi(e)) {
                if (!t) return B(26);
                var i = e[Ie].values_.get(t);
                return i || B(27, t, Ui(e)), i;
            }
            if (Oe(e) || Ct(e) || dn(e)) return e;
        } else if (ne(e) && dn(e[Ie])) return e[Ie];
        B(28);
    }
    function Ui(e, t) {
        var n;
        if (void 0 !== t) n = Ai(e, t);
        else {
            if (wn(e)) return e.name;
            n = wi(e) || _i(e) || pi(e) ? function(e) {
                return e || B(29), Oe(e) || Ct(e) || dn(e) || _i(e) || pi(e) ? e : e[Ie] ? e[Ie] : void B(24, e);
            }(e) : Ai(e);
        }
        return n.name_;
    }
    function Ci(e) {
        var t = Vt(), n = xt(!0);
        nn();
        try {
            return e();
        } finally{
            rn(), It(n), Ht(t);
        }
    }
    Object.entries($n).forEach(function(e) {
        var t = e[0], n = e[1];
        "concat" !== t && se(Ii.prototype, t, n);
    }), Ei(1e3);
    var Qi, Pi = F.toString;
    function Yi(e, t, n) {
        return void 0 === n && (n = -1), Ri(e, t, n);
    }
    function Ri(e, t, n, i, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var o = typeof e;
        if ("function" !== o && "object" !== o && "object" != typeof t) return !1;
        var a = Pi.call(e);
        if (a !== Pi.call(t)) return !1;
        switch(a){
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 === +e ? 1 / +e == 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t;
            case "[object Symbol]":
                return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
            case "[object Map]":
            case "[object Set]":
                n >= 0 && n++;
        }
        e = Bi(e), t = Bi(t);
        var s = "[object Array]" === a;
        if (!s) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var l = e.constructor, u = t.constructor;
            if (l !== u && !(ne(l) && l instanceof l && ne(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), r = r || [];
        for(var _ = (i = i || []).length; _--;)if (i[_] === e) return r[_] === t;
        if (i.push(e), r.push(t), s) {
            if ((_ = e.length) !== t.length) return !1;
            for(; _--;)if (!Ri(e[_], t[_], n - 1, i, r)) return !1;
        } else {
            var c = Object.keys(e), d = c.length;
            if (Object.keys(t).length !== d) return !1;
            for(var g = 0; g < d; g++){
                var p = c[g];
                if (!Me(t, p) || !Ri(e[p], t[p], n - 1, i, r)) return !1;
            }
        }
        return i.pop(), r.pop(), !0;
    }
    function Bi(e) {
        return oi(e) ? e.slice() : _e(e) || _i(e) || ce(e) || pi(e) ? Array.from(e.entries()) : e;
    }
    var Gi = (null == (Qi = V().Iterator) ? void 0 : Qi.prototype) || {};
    function Vi(e) {
        return e[Symbol.iterator] = Hi, Object.assign(Object.create(Gi), e);
    }
    function Hi() {
        return this;
    }
    [
        "Symbol",
        "Map",
        "Set"
    ].forEach(function(e) {
        void 0 === V()[e] && B("MobX requires global '" + e + "' to be available or polyfilled");
    }), "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function(e) {
            return console.warn("[mobx.spy] Is a no-op in production builds"), function() {};
        },
        extras: {
            getDebugName: Ui
        },
        $mobx: Ie
    });
    var Zi = class extends Error {
        constructor(e){
            super(e.statusText), this.name = "HTTPError", this.status = e.status;
        }
    }, Wi = class extends Zi {
        constructor(e, t){
            super(e), this.name = "TextHTTPError", this.data = t;
        }
    }, Fi = class extends Zi {
        constructor(e, t){
            super(e), this.name = "JSONHTTPError", this.json = t;
        }
    }, Ji = class e {
        constructor(e, t){
            this.apiURL = e || "", this._sameOrigin = /^\/(?!\/)/.test(this.apiURL), this.defaultHeaders = t?.defaultHeaders || {};
        }
        headers(e = {}) {
            return {
                ...this.defaultHeaders,
                "Content-Type": "application/json",
                ...e
            };
        }
        static async parseJsonResponse(e) {
            const t = await e.json();
            if (!e.ok) throw new Fi(e, t);
            return t;
        }
        async request(t, n = {}) {
            const i = this.headers(n.headers || {});
            n.body || delete i["Content-Type"];
            const r = {
                ...n,
                headers: i
            };
            this._sameOrigin && (r.credentials = n.credentials || "same-origin");
            const o = await fetch(this.apiURL + t, r), a = o.headers.get("Content-Type");
            if (a?.includes("json")) return e.parseJsonResponse(o);
            const s = await o.text();
            if (!o.ok) throw new Wi(o, s);
            return s;
        }
    }, qi = class {
        constructor(e){
            this.user = e;
        }
        listUsers(e) {
            return this.user._request("/admin/users", {
                method: "GET",
                audience: e
            });
        }
        getUser(e) {
            return this.user._request(`/admin/users/${e.id}`);
        }
        updateUser(e, t = {}) {
            return this.user._request(`/admin/users/${e.id}`, {
                method: "PUT",
                body: JSON.stringify(t)
            });
        }
        createUser(e, t, n = {}) {
            return n.email = e, n.password = t, this.user._request("/admin/users", {
                method: "POST",
                body: JSON.stringify(n)
            });
        }
        deleteUser(e) {
            return this.user._request(`/admin/users/${e.id}`, {
                method: "DELETE"
            });
        }
    }, Ki = "gotrue.user", Xi = {}, $i = null, er = {
        api: 1,
        token: 1,
        audience: 1,
        url: 1
    }, tr = {
        api: 1
    }, nr = ()=>"undefined" != typeof window, ir = !1;
    function rr() {
        !ir && nr() && (ir = !0, window.addEventListener("storage", (e)=>{
            e.key === Ki && ($i = null);
        }));
    }
    var or = class e {
        constructor(e, t, n){
            this.token = null, this.api = e, this.url = e.apiURL, this.audience = n, this._processTokenResponse(t), $i = this, rr();
        }
        static removeSavedSession() {
            nr() && localStorage.removeItem(Ki);
        }
        static recoverSession(t) {
            if (rr(), $i) return $i;
            const n = nr() && localStorage.getItem(Ki);
            if (n) try {
                const i = JSON.parse(n), { url: r, token: o, audience: a } = i;
                if (!r || !o) return null;
                const s = t || new Ji(r, {});
                return new e(s, o, a)._saveUserData(i, !0);
            } catch (i) {
                return console.error(new Error(`Gotrue-js: Error recovering session: ${i}`)), null;
            }
            return null;
        }
        get admin() {
            return new qi(this);
        }
        async update(e) {
            const t = await this._request("/user", {
                method: "PUT",
                body: JSON.stringify(e)
            });
            return this._saveUserData(t)._refreshSavedSession();
        }
        jwt(e) {
            const t = this.tokenDetails();
            if (null == t) return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));
            const { expires_at: n, refresh_token: i, access_token: r } = t;
            return e || n - 6e4 < Date.now() ? this._refreshToken(i) : Promise.resolve(r);
        }
        logout() {
            return this._request("/logout", {
                method: "POST"
            }).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this));
        }
        _refreshToken(e) {
            const t = Xi[e];
            if (t) return t;
            const n = this.api.request("/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=refresh_token&refresh_token=${e}`
            }), i = new Promise((e, t)=>{
                setTimeout(()=>t(new Error("Token refresh timeout")), 3e4);
            }), r = Promise.race([
                n,
                i
            ]).then((t)=>{
                if (delete Xi[e], this._processTokenResponse(t), this._refreshSavedSession(), !this.token) throw new Error("Gotrue-js: Token not set after refresh");
                return this.token.access_token;
            }).catch((t)=>{
                throw delete Xi[e], this.clearSession(), t;
            });
            return Xi[e] = r, r;
        }
        async _request(e, t = {}) {
            t.headers = t.headers || {};
            const n = t.audience || this.audience;
            n && (t.headers["X-JWT-AUD"] = n);
            try {
                const n = await this.jwt();
                return await this.api.request(e, {
                    headers: Object.assign(t.headers, {
                        Authorization: `Bearer ${n}`
                    }),
                    ...t
                });
            } catch (i) {
                throw i instanceof Fi && i.json && (i.json.msg ? i.message = i.json.msg : i.json.error && (i.message = `${i.json.error}: ${i.json.error_description}`)), i;
            }
        }
        async getUserData() {
            const e = await this._request("/user");
            return this._saveUserData(e)._refreshSavedSession();
        }
        _saveUserData(t, n) {
            for(const i in t)i in e.prototype || i in er || (this[i] = t[i]);
            return n && (this._fromStorage = !0), this;
        }
        _processTokenResponse(e) {
            this.token = e;
            try {
                const t = JSON.parse(function(e) {
                    let t = e.replace(/-/g, "+").replace(/_/g, "/");
                    switch(t.length % 4){
                        case 0:
                            break;
                        case 2:
                            t += "==";
                            break;
                        case 3:
                            t += "=";
                            break;
                        default:
                            throw new Error("Illegal base64url string!");
                    }
                    const n = function(e) {
                        if ("function" == typeof atob) return atob(e);
                        return Buffer.from(e, "base64").toString("binary");
                    }(t);
                    try {
                        const e = Uint8Array.from(n, (e)=>e.codePointAt(0) ?? 0);
                        return (new TextDecoder).decode(e);
                    } catch  {
                        return n;
                    }
                }(e.access_token.split(".")[1]));
                this.token.expires_at = 1e3 * t.exp;
            } catch (t) {
                console.error(new Error(`Gotrue-js: Failed to parse tokenResponse claims: ${t}`));
            }
        }
        _refreshSavedSession() {
            return nr() && localStorage.getItem(Ki) && this._saveSession(), this;
        }
        get _details() {
            const t = {};
            for(const n in this)n in e.prototype || n in tr || (t[n] = this[n]);
            return t;
        }
        _saveSession() {
            return nr() && localStorage.setItem(Ki, JSON.stringify(this._details)), this;
        }
        tokenDetails() {
            return this.token;
        }
        clearSession() {
            e.removeSavedSession(), this.token = null, $i = null;
        }
    };
    var ar = /^http:\/\//, sr = class {
        constructor({ APIUrl: e = "/.netlify/identity", audience: t = "", setCookie: n = !1, clientName: i = "gotrue-js" } = {}){
            ar.test(e) && console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."), t && (this.audience = t), this.setCookie = n, this.api = new Ji(e, {
                defaultHeaders: {
                    "X-Nf-Client": i
                }
            });
        }
        async _request(e, t = {}) {
            t.headers = t.headers || {};
            const n = t.audience || this.audience;
            n && (t.headers["X-JWT-AUD"] = n);
            try {
                return await this.api.request(e, t);
            } catch (i) {
                throw i instanceof Fi && i.json && (i.json.msg ? i.message = i.json.msg : i.json.error && (i.message = `${i.json.error}: ${i.json.error_description}`)), i;
            }
        }
        settings() {
            return this._request("/settings");
        }
        signup(e, t, n) {
            return this._request("/signup", {
                method: "POST",
                body: JSON.stringify({
                    email: e,
                    password: t,
                    data: n
                })
            });
        }
        login(e, t, n) {
            return this._setRememberHeaders(n), this._request("/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=password&username=${encodeURIComponent(e)}&password=${encodeURIComponent(t)}`
            }).then((e)=>(or.removeSavedSession(), this.createUser(e, n)));
        }
        loginExternalUrl(e) {
            return `${this.api.apiURL}/authorize?provider=${e}`;
        }
        confirm(e, t) {
            return this._setRememberHeaders(t), this.verify("signup", e, t);
        }
        requestPasswordRecovery(e) {
            return this._request("/recover", {
                method: "POST",
                body: JSON.stringify({
                    email: e
                })
            });
        }
        recover(e, t) {
            return this._setRememberHeaders(t), this.verify("recovery", e, t);
        }
        acceptInvite(e, t, n) {
            return this._setRememberHeaders(n), this._request("/verify", {
                method: "POST",
                body: JSON.stringify({
                    token: e,
                    password: t,
                    type: "signup"
                })
            }).then((e)=>this.createUser(e, n));
        }
        acceptInviteExternalUrl(e, t) {
            return `${this.api.apiURL}/authorize?provider=${e}&invite_token=${t}`;
        }
        createUser(e, t = !1) {
            this._setRememberHeaders(t);
            return new or(this.api, e, this.audience || "").getUserData().then((e)=>(t && e._saveSession(), e));
        }
        currentUser() {
            const e = or.recoverSession(this.api);
            return e && this._setRememberHeaders(e._fromStorage), e;
        }
        async validateCurrentSession() {
            const e = this.currentUser();
            if (!e) return null;
            try {
                return await e.getUserData();
            } catch  {
                return e.clearSession(), null;
            }
        }
        verify(e, t, n) {
            return this._setRememberHeaders(n), this._request("/verify", {
                method: "POST",
                body: JSON.stringify({
                    token: t,
                    type: e
                })
            }).then((e)=>this.createUser(e, n));
        }
        _setRememberHeaders(e) {
            this.setCookie && (this.api.defaultHeaders = this.api.defaultHeaders || {}, this.api.defaultHeaders["X-Use-Cookie"] = e ? "1" : "session");
        }
    };
    "undefined" != typeof window && (window.GoTrue = sr);
    var lr, ur, _r, cr, dr = 0, gr = [], pr = t, Mr = pr.__b, mr = pr.__r, fr = pr.diffed, hr = pr.__c, vr = pr.unmount, yr = pr.__;
    function Nr(e, t) {
        pr.__h && pr.__h(ur, e, dr || t), dr = 0;
        var n = ur.__H || (ur.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function wr(e) {
        return dr = 1, br(Or, e);
    }
    function br(e, t, n) {
        var i = Nr(lr++, 2);
        if (i.t = e, !i.__c && (i.__ = [
            Or(void 0, t),
            function(e) {
                var t = i.__N ? i.__N[0] : i.__[0], n = i.t(t, e);
                t !== n && (i.__N = [
                    n,
                    i.__[1]
                ], i.__c.setState({}));
            }
        ], i.__c = ur, !ur.__f)) {
            var r = function(e, t, n) {
                if (!i.__c.__H) return !0;
                var r = i.__c.__H.__.filter(function(e) {
                    return e.__c;
                });
                if (r.every(function(e) {
                    return !e.__N;
                })) return !o || o.call(this, e, t, n);
                var a = i.__c.props !== e;
                return r.some(function(e) {
                    if (e.__N) {
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (a = !0);
                    }
                }), o && o.call(this, e, t, n) || a;
            };
            ur.__f = !0;
            var o = ur.shouldComponentUpdate, a = ur.componentWillUpdate;
            ur.componentWillUpdate = function(e, t, n) {
                if (this.__e) {
                    var i = o;
                    o = void 0, r(e, t, n), o = i;
                }
                a && a.call(this, e, t, n);
            }, ur.shouldComponentUpdate = r;
        }
        return i.__N || i.__;
    }
    function jr(e) {
        return dr = 5, function(e, t) {
            var n = Nr(lr++, 7);
            return Lr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
        }(function() {
            return {
                current: e
            };
        }, []);
    }
    function Dr(e) {
        var t = ur.context[e.__c], n = Nr(lr++, 9);
        return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(ur)), t.props.value) : e.__;
    }
    function zr() {
        for(var e; e = gr.shift();){
            var t = e.__H;
            if (e.__P && t) try {
                t.__h.some(xr), t.__h.some(Ir), t.__h = [];
            } catch (n) {
                t.__h = [], pr.__e(n, e.__v);
            }
        }
    }
    pr.__b = function(e) {
        ur = null, Mr && Mr(e);
    }, pr.__ = function(e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), yr && yr(e, t);
    }, pr.__r = function(e) {
        mr && mr(e), lr = 0;
        var t = (ur = e.__c).__H;
        t && (_r === ur ? (t.__h = [], ur.__h = [], t.__.some(function(e) {
            e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
        })) : (t.__h.some(xr), t.__h.some(Ir), t.__h = [], lr = 0)), _r = ur;
    }, pr.diffed = function(e) {
        fr && fr(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (1 !== gr.push(t) && cr === pr.requestAnimationFrame || ((cr = pr.requestAnimationFrame) || kr)(zr)), t.__H.__.some(function(e) {
            e.u && (e.__H = e.u), e.u = void 0;
        })), _r = ur = null;
    }, pr.__c = function(e, t) {
        t.some(function(e) {
            try {
                e.__h.some(xr), e.__h = e.__h.filter(function(e) {
                    return !e.__ || Ir(e);
                });
            } catch (n) {
                t.some(function(e) {
                    e.__h && (e.__h = []);
                }), t = [], pr.__e(n, e.__v);
            }
        }), hr && hr(e, t);
    }, pr.unmount = function(e) {
        vr && vr(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.some(function(e) {
            try {
                xr(e);
            } catch (n) {
                t = n;
            }
        }), n.__H = void 0, t && pr.__e(t, n.__v));
    };
    var Tr = "function" == typeof requestAnimationFrame;
    function kr(e) {
        var t, n = function() {
            clearTimeout(i), Tr && cancelAnimationFrame(t), setTimeout(e);
        }, i = setTimeout(n, 35);
        Tr && (t = requestAnimationFrame(n));
    }
    function xr(e) {
        var t = ur, n = e.__c;
        "function" == typeof n && (e.__c = void 0, n()), ur = t;
    }
    function Ir(e) {
        var t = ur;
        e.__c = e.__(), ur = t;
    }
    function Lr(e, t) {
        return !e || e.length !== t.length || t.some(function(t, n) {
            return t !== e[n];
        });
    }
    function Or(e, t) {
        return "function" == typeof t ? t(e) : t;
    }
    function Er(e) {
        const t = e.displayName || e.name || "Component";
        function n(n) {
            const [, i] = br((e)=>e + 1, 0), r = jr(null);
            var o, a, s;
            let l;
            return r.current || (r.current = new sn(`observer(${t})`, ()=>{
                i(0);
            })), o = ()=>()=>{
                    r.current?.dispose(), r.current = null;
                }, a = [], s = Nr(lr++, 3), !pr.__s && Lr(s.__H, a) && (s.__ = o, s.u = a, ur.__H.__h.push(s)), r.current.track(()=>{
                l = e(n);
            }), l;
        }
        return n.displayName = `observer(${t})`, n;
    }
    const Sr = function(e) {
        function t(e) {
            var n, i;
            return this.getChildContext || (n = new Set, (i = {})[t.__c] = this, this.getChildContext = function() {
                return i;
            }, this.componentWillUnmount = function() {
                n = null;
            }, this.shouldComponentUpdate = function(e) {
                this.props.value != e.value && n.forEach(function(e) {
                    e.__e = !0, j(e);
                });
            }, this.sub = function(e) {
                n.add(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n && n.delete(e), t && t.call(e);
                };
            }), e.children;
        }
        return t.__c = "__cC" + c++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
            return e.children(t);
        }).contextType = t, t;
    }(null);
    function Ar({ page: e, error: t, loading: n, showHeader: i, showSignup: r, devSettings: o, isOpen: a, children: s, logo: l, isLocal: u, onClose: _, onPage: c, clearSiteURL: d, clearStoreError: g, t: p }) {
        const M = (e)=>{
            e.preventDefault(), _();
        }, m = (e)=>(t)=>{
                t.preventDefault(), c(e);
            }, f = n || !a, h = t ? function(e) {
            return "string" == typeof e ? e : e.json && e.json.error_description || e.message || e.toString();
        }(t) : null;
        return R("div", {
            className: "modalContainer",
            role: "dialog",
            "aria-hidden": `${f}`,
            onMouseDown: M,
            onKeyDown: (e)=>{
                "Escape" === e.key && _();
            },
            children: [
                R("div", {
                    className: "modalDialog" + (n ? " visuallyHidden" : ""),
                    onMouseDown: (e)=>{
                        e.stopPropagation();
                    },
                    children: R("div", {
                        className: "modalContent",
                        children: [
                            R("button", {
                                onClick: M,
                                className: "btn btnClose",
                                children: R("span", {
                                    className: "visuallyHidden",
                                    children: "Close"
                                })
                            }),
                            i && R("div", {
                                className: "header",
                                children: [
                                    r && R("button", {
                                        className: "btn btnHeader " + (e.signup ? "active" : ""),
                                        onClick: m("signup"),
                                        children: p("sign_up")
                                    }),
                                    !o && R("button", {
                                        className: "btn btnHeader " + (e.login ? "active" : ""),
                                        onClick: m("login"),
                                        children: p("log_in")
                                    })
                                ]
                            }),
                            e.title && R("div", {
                                className: "header",
                                children: R("button", {
                                    className: "btn btnHeader active",
                                    children: p(e.title)
                                })
                            }),
                            o && R("div", {
                                className: "header",
                                children: R("button", {
                                    className: "btn btnHeader active",
                                    children: p("site_url_title")
                                })
                            }),
                            h && R("div", {
                                className: "flashMessage error",
                                children: R("span", {
                                    children: p(h)
                                })
                            }),
                            u && h && h.includes("Failed to load settings from") && R("div", {
                                children: R("button", {
                                    onClick: (e)=>{
                                        d(e), g();
                                    },
                                    className: "btnLink forgotPasswordLink",
                                    children: p("site_url_link_text")
                                })
                            }),
                            s
                        ]
                    })
                }),
                l && R("a", {
                    href: "https://www.netlify.com",
                    className: "callOut" + (n ? " visuallyHidden" : ""),
                    children: [
                        R("span", {
                            className: "netlifyLogo"
                        }),
                        p("coded_by")
                    ]
                })
            ]
        });
    }
    function Ur({ devMode: e, onSiteURL: t, t: n }) {
        const [i, r] = wr(""), [o] = wr(e || !1);
        return R("div", {
            children: o ? R("div", {
                class: "subheader",
                children: [
                    R("h3", {
                        children: n("site_url_title")
                    }),
                    R("button", {
                        onClick: (e)=>{
                            e.preventDefault(), t();
                        },
                        className: "btnLink forgotPasswordLink",
                        children: n("site_url_link_text")
                    })
                ]
            }) : R("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    const n = (o = "/.netlify/identity", -1 === (r = i).indexOf(o) ? r : r.substring(0, r.length - o.length));
                    var r, o;
                    t(n);
                },
                className: "form",
                children: [
                    R("div", {
                        className: "flashMessage",
                        children: n("site_url_message")
                    }),
                    R("div", {
                        className: "formGroup",
                        children: R("label", {
                            children: [
                                R("span", {
                                    className: "visuallyHidden",
                                    children: n("site_url_label")
                                }),
                                R("input", {
                                    className: "formControl",
                                    type: "url",
                                    name: "url",
                                    value: i,
                                    placeholder: n("site_url_placeholder"),
                                    autocapitalize: "off",
                                    required: !0,
                                    onInput: (e)=>{
                                        const t = e.target;
                                        r(t.value);
                                    }
                                }),
                                R("div", {
                                    className: "inputFieldIcon inputFieldUrl"
                                })
                            ]
                        })
                    }),
                    R("button", {
                        type: "submit",
                        className: "btn",
                        children: n("site_url_submit")
                    })
                ]
            })
        });
    }
    function Cr({ saving: e, text: t, saving_text: n }) {
        return R("button", {
            type: "submit",
            className: "btn" + (e ? " saving" : ""),
            children: e ? n || "Saving" : t || "Save"
        });
    }
    function Qr({ user: e, saving: t, onLogout: n, t: i }) {
        return R("form", {
            onSubmit: (e)=>{
                e.preventDefault(), n();
            },
            className: "form " + (t ? "disabled" : ""),
            children: [
                R("p", {
                    className: "infoText",
                    children: [
                        i("logged_in_as"),
                        " ",
                        R("br", {}),
                        R("span", {
                            className: "infoTextEmail",
                            children: e.user_metadata?.full_name || e.user_metadata?.name || e.email
                        })
                    ]
                }),
                R(Cr, {
                    saving: t,
                    text: i("log_out"),
                    saving_text: i("logging_out")
                })
            ]
        });
    }
    const Pr = {
        confirm: {
            type: "success",
            text: "message_confirm"
        },
        password_mail: {
            type: "success",
            text: "message_password_mail"
        },
        email_changed: {
            type: "sucess",
            text: "message_email_changed"
        },
        verfication_error: {
            type: "error",
            text: "message_verfication_error"
        },
        signup_disabled: {
            type: "error",
            text: "message_signup_disabled"
        }
    };
    function Yr({ type: e, t: t }) {
        const n = Pr[e];
        return R("div", {
            className: `flashMessage ${n.type}`,
            children: R("span", {
                children: t(n.text)
            })
        });
    }
    function Rr({ page: e, message: t, saving: n, namePlaceholder: i, onSubmit: r, t: o }) {
        const [a, s] = wr(""), [l, u] = wr(""), [_, c] = wr(""), [d, g] = wr(!1), p = (e)=>{
            const t = e.target, { name: n, value: i } = t;
            switch(n){
                case "name":
                    s(i);
                    break;
                case "email":
                    u(i);
                    break;
                case "password":
                    c(i);
            }
        };
        return R("form", {
            onSubmit: (e)=>{
                e.preventDefault(), r({
                    name: a,
                    email: l,
                    password: _
                });
            },
            className: "form " + (n ? "disabled" : ""),
            children: [
                t && R(Yr, {
                    type: t,
                    t: o
                }),
                e.name && R("div", {
                    className: "formGroup",
                    children: R("label", {
                        children: [
                            R("span", {
                                className: "visuallyHidden",
                                children: o("form_name_placeholder")
                            }),
                            R("input", {
                                className: "formControl",
                                type: "text",
                                name: "name",
                                value: a,
                                placeholder: i || o("form_name_label"),
                                autocomplete: "name",
                                autocapitalize: "off",
                                required: !0,
                                onInput: p
                            }),
                            R("div", {
                                className: "inputFieldIcon inputFieldName"
                            })
                        ]
                    })
                }),
                e.email && R("div", {
                    className: "formGroup",
                    children: R("label", {
                        children: [
                            R("span", {
                                className: "visuallyHidden",
                                children: o("form_email_label")
                            }),
                            R("input", {
                                className: "formControl",
                                type: "email",
                                name: "email",
                                value: l,
                                placeholder: o("form_email_placeholder"),
                                autocomplete: "email",
                                autocapitalize: "off",
                                required: !0,
                                onInput: p
                            }),
                            R("div", {
                                className: "inputFieldIcon inputFieldEmail"
                            })
                        ]
                    })
                }),
                e.password && R("div", {
                    className: "formGroup",
                    children: [
                        R("label", {
                            children: [
                                R("span", {
                                    className: "visuallyHidden",
                                    children: o("form_password_label")
                                }),
                                R("input", {
                                    className: "formControl",
                                    type: d ? "text" : "password",
                                    name: "password",
                                    value: _,
                                    placeholder: o("form_password_placeholder"),
                                    autocomplete: e.password,
                                    required: !0,
                                    onInput: p
                                }),
                                R("div", {
                                    className: "inputFieldIcon inputFieldPassword"
                                })
                            ]
                        }),
                        R("button", {
                            type: "button",
                            className: "btnPasswordToggle " + (d ? "passwordVisible" : ""),
                            "aria-pressed": d,
                            onClick: ()=>g(!d),
                            children: R("span", {
                                className: "visuallyHidden",
                                children: o(d ? "hide_password" : "show_password")
                            })
                        })
                    ]
                }),
                R(Cr, {
                    saving: n,
                    text: o(e.button),
                    saving_text: o(e.button_saving)
                })
            ]
        });
    }
    function Br({ provider: e, label: t, onLogin: n, t: i }) {
        return R("button", {
            onClick: (t)=>{
                t.preventDefault(), n(e.toLowerCase());
            },
            className: `provider${e} btn btnProvider`,
            children: `${i("continue_with")} ${t}`
        });
    }
    function Gr({ providers: e, labels: t, onLogin: n, t: i }) {
        const r = (e)=>{
            const n = e.toLowerCase();
            return n in t ? t[n] : e;
        };
        return R("div", {
            className: "providersGroup",
            children: [
                R("hr", {
                    className: "hr",
                    "data-text": i("or")
                }),
                e.map((e)=>R(Br, {
                        provider: e,
                        label: r(e),
                        onLogin: n,
                        t: i
                    }, e))
            ]
        });
    }
    const Vr = {
        login: !0,
        signup: !0
    }, Hr = {
        login: {
            login: !0,
            button: "log_in",
            button_saving: "logging_in",
            email: !0,
            password: "current-password",
            link: "amnesia",
            link_text: "forgot_password",
            providers: !0
        },
        signup: {
            signup: !0,
            button: "sign_up",
            button_saving: "signing_up",
            name: !0,
            email: !0,
            password: "new-password",
            providers: !0
        },
        amnesia: {
            title: "recover_password",
            button: "send_recovery_email",
            button_saving: "sending_recovery_email",
            email: !0,
            link: "login",
            link_text: "never_mind"
        },
        recovery: {
            title: "recover_password",
            button: "update_password",
            button_saving: "updating_password",
            password: "new-password",
            link: "login",
            link_text: "never_mind"
        },
        invite: {
            title: "complete_your_signup",
            button: "sign_up",
            button_saving: "signing_up",
            password: "new-password",
            providers: !0
        },
        user: {
            title: "logged_in"
        }
    };
    const Zr = Er(function() {
        const e = Dr(Sr);
        if (!e) return null;
        const t = (t)=>e.openModal(t), n = ()=>e.logout(), i = (t)=>{
            t && e.setSiteURL(t);
        }, r = ()=>e.clearSiteURL(), o = (t)=>e.externalLogin(t), a = ({ name: t, email: n, password: i })=>{
            switch(e.modal.page){
                case "login":
                    e.login(n, i);
                    break;
                case "signup":
                    e.signup(t, n, i);
                    break;
                case "amnesia":
                    e.requestPasswordRecovery(n);
                    break;
                case "invite":
                    e.acceptInvite(i);
                    break;
                case "recovery":
                    e.updatePassword(i);
            }
        }, s = Vr[e.modal.page] || !1, l = e.settings && !e.settings.disable_signup;
        return R("div", {
            children: R(Ar, {
                page: Hr[e.modal.page] || {},
                error: e.error,
                showHeader: s,
                showSignup: !!l,
                devSettings: !e.gotrue,
                loading: !e.error && !!e.gotrue && !e.settings,
                isOpen: e.modal.isOpen,
                onPage: t,
                onClose: ()=>e.closeModal(),
                logo: e.modal.logo,
                t: e.translate,
                isLocal: e.isLocal || !1,
                clearSiteURL: r,
                clearStoreError: ()=>e.setError(),
                children: [
                    (()=>{
                        const o = Hr[e.modal.page] || {};
                        return e.isLocal && null === e.siteURL ? R(Ur, {
                            devMode: null != e.siteURL,
                            onSiteURL: e.siteURL ? r : i,
                            t: e.translate
                        }) : e.settings ? e.user && "recovery" !== e.modal.page ? R(Qr, {
                            user: e.user,
                            saving: e.saving,
                            onLogout: n,
                            t: e.translate
                        }) : "signup" === e.modal.page && e.settings.disable_signup ? R(Yr, {
                            type: "signup_disabled",
                            t: e.translate
                        }) : R("div", {
                            children: [
                                R(Rr, {
                                    page: {
                                        name: o.name,
                                        email: o.email,
                                        password: o.password,
                                        button: o.button || "",
                                        button_saving: o.button_saving || ""
                                    },
                                    message: e.message,
                                    saving: e.saving,
                                    onSubmit: a,
                                    namePlaceholder: e.namePlaceholder,
                                    t: e.translate
                                }, e.modal.page),
                                !e.user && o.link && e.gotrue && R("button", {
                                    onClick: ()=>t(o.link),
                                    className: "btnLink forgotPasswordLink",
                                    children: e.translate(o.link_text)
                                }),
                                e.isLocal ? R(Ur, {
                                    devMode: null != e.siteURL,
                                    onSiteURL: e.siteURL ? r : i,
                                    t: e.translate
                                }) : R("div", {})
                            ]
                        }) : null;
                    })(),
                    (()=>{
                        if (!e.gotrue || !e.settings) return null;
                        if ("signup" === e.modal.page && e.settings.disable_signup) return null;
                        if (!(Hr[e.modal.page] || {}).providers) return null;
                        const t = [
                            "Google",
                            "GitHub",
                            "GitLab",
                            "BitBucket",
                            "Facebook",
                            "SAML"
                        ].filter((t)=>e.settings.external[t.toLowerCase()]);
                        return t.length ? R(Gr, {
                            providers: t,
                            labels: e.settings.external_labels || {},
                            onLogin: o,
                            t: e.translate
                        }) : null;
                    })()
                ]
            })
        });
    }), Wr = "Log in", Fr = "Log out", Jr = "Logged in as", qr = "Logged in", Kr = "Logging in", Xr = "Logging out", $r = "Sign up", eo = "Signing up", to = "Forgot password?", no = "Recover password", io = "Send recovery email", ro = "Sending recovery email", oo = "Never mind", ao = "Update password", so = "Updating password", lo = "Complete your signup", uo = "Development Settings", _o = "Clear localhost URL", co = "Looks like you're running a local server. Please let us know the URL of your Netlify site.", go = "Enter your Netlify Site URL", po = "URL of your Netlify site", Mo = "Set site's URL", mo = "A confirmation message was sent to your email, click the link there to continue.", fo = "We've sent a recovery email to your account, follow the link there to reset your password.", ho = "Your email address has been updated!", vo = "There was an error verifying your account. Please try again or contact an administrator.", yo = "Public signups are disabled. Contact an administrator and ask for an invite.", No = "Name", wo = "Enter your email", bo = "Enter your name", jo = "Email", Do = "Enter your password", zo = "Password", To = "Coded by Netlify", ko = "Continue with", xo = "Show password", Io = "Hide password", Lo = {
        log_in: Wr,
        log_out: Fr,
        logged_in_as: Jr,
        logged_in: qr,
        logging_in: Kr,
        logging_out: Xr,
        sign_up: $r,
        signing_up: eo,
        forgot_password: to,
        recover_password: no,
        send_recovery_email: io,
        sending_recovery_email: ro,
        never_mind: oo,
        update_password: ao,
        updating_password: so,
        complete_your_signup: lo,
        site_url_title: uo,
        site_url_link_text: _o,
        site_url_message: co,
        site_url_label: go,
        site_url_placeholder: po,
        site_url_submit: Mo,
        message_confirm: mo,
        message_password_mail: fo,
        message_email_changed: ho,
        message_verfication_error: vo,
        message_signup_disabled: yo,
        form_name_placeholder: No,
        form_email_label: wo,
        form_name_label: bo,
        form_email_placeholder: jo,
        form_password_label: Do,
        form_password_placeholder: zo,
        coded_by: To,
        continue_with: ko,
        "No user found with this email": "No user found with this email",
        "Invalid Password": "Invalid Password",
        "Email not confirmed": "Email not confirmed",
        "User not found": "User not found",
        or: "or",
        show_password: xo,
        hide_password: Io
    }, Oo = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: To,
        complete_your_signup: lo,
        continue_with: ko,
        default: Lo,
        forgot_password: to,
        form_email_label: wo,
        form_email_placeholder: jo,
        form_name_label: bo,
        form_name_placeholder: No,
        form_password_label: Do,
        form_password_placeholder: zo,
        hide_password: Io,
        log_in: Wr,
        log_out: Fr,
        logged_in: qr,
        logged_in_as: Jr,
        logging_in: Kr,
        logging_out: Xr,
        message_confirm: mo,
        message_email_changed: ho,
        message_password_mail: fo,
        message_signup_disabled: yo,
        message_verfication_error: vo,
        never_mind: oo,
        or: "or",
        recover_password: no,
        send_recovery_email: io,
        sending_recovery_email: ro,
        show_password: xo,
        sign_up: $r,
        signing_up: eo,
        site_url_label: go,
        site_url_link_text: _o,
        site_url_message: co,
        site_url_placeholder: po,
        site_url_submit: Mo,
        site_url_title: uo,
        update_password: ao,
        updating_password: so
    }, Symbol.toStringTag, {
        value: "Module"
    })), Eo = "Connexion", So = "D\xe9connexion", Ao = "Connect\xe9 en tant que", Uo = "Connect\xe9", Co = "Connexion", Qo = "D\xe9connexion", Po = "Inscription", Yo = "Inscription", Ro = "Mot de passe oubli\xe9 ?", Bo = "R\xe9cup\xe9rer le mot de passe", Go = "Envoyer l'e-mail de r\xe9cup\xe9ration", Vo = "Envoi de l'e-mail de r\xe9cup\xe9ration", Ho = "Annuler", Zo = "Mettre \xe0 jour le mot de passe", Wo = "Mise \xe0 jour du mot de passe", Fo = "Compl\xe9ter l'inscription", Jo = "Param\xe8tres de d\xe9veloppement", qo = "Effacer l'URL localhost", Ko = "On dirait que vous faites tourner un serveur local. Veuillez nous indiquer l'URL de votre site Netlify.", Xo = "Entrez l'URL de votre site Netlify", $o = "URL de votre site Netlify", ea = "D\xe9finir l'URL du site", ta = "Un message de confirmation a \xe9t\xe9 envoy\xe9 \xe0 votre adresse \xe9lectronique, cliquez sur le lien pour continuer.", na = "Nous avons envoy\xe9 un e-mail de r\xe9cup\xe9ration \xe0 votre compte, suivez le lien qui s'y trouve pour r\xe9initialiser votre mot de passe.", ia = "Votre adresse e-mail a \xe9t\xe9 mise \xe0 jour !", ra = "Il y a eu une erreur lors de la v\xe9rification de votre compte. Veuillez r\xe9essayer ou contacter un administrateur.", oa = "Les inscriptions publiques sont d\xe9sactiv\xe9es. Contactez un administrateur et demandez une invitation.", aa = "Entrez votre adresse e-mail", sa = "Saisissez votre nom", la = "E-mail", ua = "Saisissez votre mot de passe", _a = "Mot de passe", ca = "Cod\xe9 par Netlify", da = "Continuer avec", ga = "Afficher le mot de passe", pa = "Masquer le mot de passe", Ma = {
        log_in: Eo,
        log_out: So,
        logged_in_as: Ao,
        logged_in: Uo,
        logging_in: Co,
        logging_out: Qo,
        sign_up: Po,
        signing_up: Yo,
        forgot_password: Ro,
        recover_password: Bo,
        send_recovery_email: Go,
        sending_recovery_email: Vo,
        never_mind: Ho,
        update_password: Zo,
        updating_password: Wo,
        complete_your_signup: Fo,
        site_url_title: Jo,
        site_url_link_text: qo,
        site_url_message: Ko,
        site_url_label: Xo,
        site_url_placeholder: $o,
        site_url_submit: ea,
        message_confirm: ta,
        message_password_mail: na,
        message_email_changed: ia,
        message_verfication_error: ra,
        message_signup_disabled: oa,
        form_name_placeholder: "Nom",
        form_email_label: aa,
        form_name_label: sa,
        form_email_placeholder: la,
        form_password_label: ua,
        form_password_placeholder: _a,
        coded_by: ca,
        continue_with: da,
        "No user found with this email": "Aucun utilisateur trouv\xe9 avec cet e-mail",
        "Invalid Password": "Mot de passe incorrect",
        "Email not confirmed": "Adresse e-mail non confirm\xe9e",
        "User not found": "Aucun utilisateur trouv\xe9",
        or: "ou",
        show_password: ga,
        hide_password: pa
    }, ma = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: ca,
        complete_your_signup: Fo,
        continue_with: da,
        default: Ma,
        forgot_password: Ro,
        form_email_label: aa,
        form_email_placeholder: la,
        form_name_label: sa,
        form_name_placeholder: "Nom",
        form_password_label: ua,
        form_password_placeholder: _a,
        hide_password: pa,
        log_in: Eo,
        log_out: So,
        logged_in: Uo,
        logged_in_as: Ao,
        logging_in: Co,
        logging_out: Qo,
        message_confirm: ta,
        message_email_changed: ia,
        message_password_mail: na,
        message_signup_disabled: oa,
        message_verfication_error: ra,
        never_mind: Ho,
        or: "ou",
        recover_password: Bo,
        send_recovery_email: Go,
        sending_recovery_email: Vo,
        show_password: ga,
        sign_up: Po,
        signing_up: Yo,
        site_url_label: Xo,
        site_url_link_text: qo,
        site_url_message: Ko,
        site_url_placeholder: $o,
        site_url_submit: ea,
        site_url_title: Jo,
        update_password: Zo,
        updating_password: Wo
    }, Symbol.toStringTag, {
        value: "Module"
    })), fa = "Iniciar sesi\xf3n", ha = "Cerrar sesi\xf3n", va = "Conectado como", ya = "Conectado", Na = "Iniciando sesi\xf3n", wa = "Cerrando sesi\xf3n", ba = "Registrate", ja = "Registrandose", Da = "\xbfOlvidaste tu contrase\xf1a?", za = "Recuperar contrase\xf1a", Ta = "Enviar correo electr\xf3nico de recuperaci\xf3n", ka = "Enviando correo electr\xf3nico de recuperaci\xf3n", xa = "Regresar", Ia = "Actualizar contrase\xf1a", La = "Actualizando contrase\xf1a", Oa = "Completa tu registro", Ea = "Configuraci\xf3n de desarrollo", Sa = "Borrar URL del localhost", Aa = "Parece que estas corriendo un servidor local. Por favor haznos saber la URL de tu sitio en Netlify.", Ua = "Ingresa la URL de tu sitio en Netlify", Ca = "URL de tu sitio en Netlify", Qa = "Establecer la URL del sitio", Pa = "Se envi\xf3 un mensaje de confirmaci\xf3n a tu correo electr\xf3nico, haz clic en el enlace all\xed para continuar.", Ya = "Hemos enviado un correo electr\xf3nico de recuperaci\xf3n a tu correo electr\xf3nico, sigue el enlace all\xed para restablecer tu contrase\xf1a.", Ra = "\xa1Tu direcci\xf3n de correo electr\xf3nico ha sido actualizada!", Ba = "Se produjo un error al verificar tu cuenta. Por favor intenta nuevamente o contacta a un administrador.", Ga = "Los registros p\xfablicos est\xe1n deshabilitados. Contacta a un administrador y solicita una invitaci\xf3n.", Va = "Nombre", Ha = "Ingresa tu correo electr\xf3nico", Za = "Ingresa tu nombre", Wa = "Correo electr\xf3nico", Fa = "Ingresa tu contrase\xf1a", Ja = "Contrase\xf1a", qa = "Codificado por Netlify", Ka = "Contin\xfaa con", Xa = "Mostrar contrase\xf1a", $a = "Ocultar contrase\xf1a", es = {
        log_in: fa,
        log_out: ha,
        logged_in_as: va,
        logged_in: ya,
        logging_in: Na,
        logging_out: wa,
        sign_up: ba,
        signing_up: ja,
        forgot_password: Da,
        recover_password: za,
        send_recovery_email: Ta,
        sending_recovery_email: ka,
        never_mind: xa,
        update_password: Ia,
        updating_password: La,
        complete_your_signup: Oa,
        site_url_title: Ea,
        site_url_link_text: Sa,
        site_url_message: Aa,
        site_url_label: Ua,
        site_url_placeholder: Ca,
        site_url_submit: Qa,
        message_confirm: Pa,
        message_password_mail: Ya,
        message_email_changed: Ra,
        message_verfication_error: Ba,
        message_signup_disabled: Ga,
        form_name_placeholder: Va,
        form_email_label: Ha,
        form_name_label: Za,
        form_email_placeholder: Wa,
        form_password_label: Fa,
        form_password_placeholder: Ja,
        coded_by: qa,
        continue_with: Ka,
        "No user found with this email": "No existe ning\xfan usuario con este correo electr\xf3nico",
        "Invalid Password": "La contrase\xf1a es invalida",
        "Email not confirmed": "Correo electr\xf3nico no confirmado",
        "User not found": "Usuario no encontrado",
        or: "o",
        show_password: Xa,
        hide_password: $a
    }, ts = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: qa,
        complete_your_signup: Oa,
        continue_with: Ka,
        default: es,
        forgot_password: Da,
        form_email_label: Ha,
        form_email_placeholder: Wa,
        form_name_label: Za,
        form_name_placeholder: Va,
        form_password_label: Fa,
        form_password_placeholder: Ja,
        hide_password: $a,
        log_in: fa,
        log_out: ha,
        logged_in: ya,
        logged_in_as: va,
        logging_in: Na,
        logging_out: wa,
        message_confirm: Pa,
        message_email_changed: Ra,
        message_password_mail: Ya,
        message_signup_disabled: Ga,
        message_verfication_error: Ba,
        never_mind: xa,
        or: "o",
        recover_password: za,
        send_recovery_email: Ta,
        sending_recovery_email: ka,
        show_password: Xa,
        sign_up: ba,
        signing_up: ja,
        site_url_label: Ua,
        site_url_link_text: Sa,
        site_url_message: Aa,
        site_url_placeholder: Ca,
        site_url_submit: Qa,
        site_url_title: Ea,
        update_password: Ia,
        updating_password: La
    }, Symbol.toStringTag, {
        value: "Module"
    })), ns = "Bejelentkez\xe9s", is = "Kijelentkez\xe9s", rs = "Bejelentkezve mint", os = "Bejelentkezve", as = "Bejelentkez\xe9s", ss = "Kijelentkez\xe9s", ls = "Regisztr\xe1ci\xf3", us = "Regisztr\xe1l\xe1s", _s = "Elfelejtette a jelszav\xe1t?", cs = "Jelsz\xf3 vissza\xe1ll\xedt\xe1sa", ds = "Jelsz\xf3p\xf3tl\xf3 lev\xe9l k\xfcld\xe9se", gs = "Jelsz\xf3p\xf3tl\xf3 lev\xe9l k\xfcld\xe9se", ps = "M\xe9gsem", Ms = "\xdaj jelsz\xf3 be\xe1ll\xedt\xe1sa", ms = "\xdaj jelsz\xf3 be\xe1ll\xedt\xe1sa", fs = "Regisztr\xe1ci\xf3 befejez\xe9se", hs = "Fejleszt\u0151i Be\xe1ll\xedt\xe1sok", vs = "Localhost URL t\xf6rl\xe9se", ys = "\xdagy n\xe9z ki egy helyi szervert futtat. K\xe9rj\xfck adja meg a Netlify oldala URL-j\xe9t.", Ns = "Adja meg a Netlify oldala URL-j\xe9t", ws = "a Netlify oldala URL-je", bs = "URL be\xe1ll\xedt\xe1sa", js = "Elk\xfcldt\xfcnk egy meger\u0151s\xedt\u0151 levelet e-mailben, k\xe9rj\xfck kattintson a linkre a lev\xe9lben a folytat\xe1shoz.", Ds = "Elk\xfcldt\xfcnk egy jelsz\xf3p\xf3tl\xf3 levelet e-mailben, k\xe9rj\xfck k\xf6vesse a linket a lev\xe9lben a jelszava vissza\xe1ll\xedt\xe1s\xe1hoz.", zs = "Az e-mail c\xedm\xe9t friss\xedtett\xfck!", Ts = "Probl\xe9ma t\xf6rt\xe9nt a fi\xf3kja meger\u0151s\xedt\xe9se k\xf6zben. K\xe9rj\xfck pr\xf3b\xe1lja \xfajra, vagy vegye fel a kapcsolatot egy adminisztr\xe1torral.", ks = "A nyilv\xe1nos regisztr\xe1ci\xf3 nincs enged\xe9lyezve. Vegye fel a kapcsolatot egy adminisztr\xe1torral \xe9s k\xe9rjen megh\xedv\xf3t.", xs = "Adja meg az e-mail c\xedm\xe9t", Is = "Adja meg a nev\xe9t", Ls = "E-mail", Os = "Adja meg a jelszav\xe1t", Es = "Jelsz\xf3", Ss = "Fejlesztette a Netlify", As = "Bejelentkez\xe9s ezzel:", Us = "vagy", Cs = "Jelsz\xf3 megjelen\xedt\xe9se", Qs = "Jelsz\xf3 elrejt\xe9se", Ps = {
        log_in: ns,
        log_out: is,
        logged_in_as: rs,
        logged_in: os,
        logging_in: as,
        logging_out: ss,
        sign_up: ls,
        signing_up: us,
        forgot_password: _s,
        recover_password: cs,
        send_recovery_email: ds,
        sending_recovery_email: gs,
        never_mind: ps,
        update_password: Ms,
        updating_password: ms,
        complete_your_signup: fs,
        site_url_title: hs,
        site_url_link_text: vs,
        site_url_message: ys,
        site_url_label: Ns,
        site_url_placeholder: ws,
        site_url_submit: bs,
        message_confirm: js,
        message_password_mail: Ds,
        message_email_changed: zs,
        message_verfication_error: Ts,
        message_signup_disabled: ks,
        form_name_placeholder: "N\xe9v",
        form_email_label: xs,
        form_name_label: Is,
        form_email_placeholder: Ls,
        form_password_label: Os,
        form_password_placeholder: Es,
        coded_by: Ss,
        continue_with: As,
        "No user found with this email": "Nem tal\xe1lhat\xf3 fi\xf3k ezzel az e-mail c\xedmmel",
        "Invalid Password": "Helytelen Jelsz\xf3",
        "Email not confirmed": "Az e-mail nem er\u0151s\xfclt meg",
        "User not found": "Felhaszn\xe1l\xf3 nem tal\xe1lhat\xf3",
        or: Us,
        show_password: Cs,
        hide_password: Qs
    }, Ys = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Ss,
        complete_your_signup: fs,
        continue_with: As,
        default: Ps,
        forgot_password: _s,
        form_email_label: xs,
        form_email_placeholder: Ls,
        form_name_label: Is,
        form_name_placeholder: "N\xe9v",
        form_password_label: Os,
        form_password_placeholder: Es,
        hide_password: Qs,
        log_in: ns,
        log_out: is,
        logged_in: os,
        logged_in_as: rs,
        logging_in: as,
        logging_out: ss,
        message_confirm: js,
        message_email_changed: zs,
        message_password_mail: Ds,
        message_signup_disabled: ks,
        message_verfication_error: Ts,
        never_mind: ps,
        or: Us,
        recover_password: cs,
        send_recovery_email: ds,
        sending_recovery_email: gs,
        show_password: Cs,
        sign_up: ls,
        signing_up: us,
        site_url_label: Ns,
        site_url_link_text: vs,
        site_url_message: ys,
        site_url_placeholder: ws,
        site_url_submit: bs,
        site_url_title: hs,
        update_password: Ms,
        updating_password: ms
    }, Symbol.toStringTag, {
        value: "Module"
    })), Rs = "Entrar", Bs = "Sair", Gs = "Logado como", Vs = "Logado em", Hs = "Logando em", Zs = "Saindo", Ws = "Registrar", Fs = "Registrando", Js = "Esqueceu a senha?", qs = "Recuperar senha", Ks = "Enviar email de recupera\xe7\xe3o de senha", Xs = "Enviando email de recupera\xe7\xe3o de senha", $s = "Deixa pra l\xe1", el = "Atualizar senha", tl = "Atualizando senha", nl = "Complete seu registro", il = "Configura\xe7\xf5es de desenvolvimento", rl = "Limpar URL do localhost", ol = "Parece que voc\xea est\xe1 executando um servidor local. Informe-nos o URL do seu site Netlify.", al = "Insira o URL do seu site Netlify", sl = "URL do seu site Netlify", ll = "Configure a URL do seu site", ul = "Uma mensagem de confirma\xe7\xe3o foi enviada para o seu email, clique no link para continuar.", _l = "Enviamos um e-mail de recupera\xe7\xe3o para sua conta, siga o link para redefinir sua senha.", cl = "Seu email foi atualizado!", dl = "Ocorreu um erro ao verificar sua conta. Tente novamente ou entre em contato com um administrador.", gl = "Registros p\xfablicos est\xe3o desabilitados. Contate um administrador e pe\xe7a por um convite.", pl = "Nome", Ml = "Insira seu email", ml = "Insira seu nome", fl = "Email", hl = "Insira sua senha", vl = "Senha", yl = "Desenvolvido por Netlify", Nl = "Continue com", wl = "Mostrar senha", bl = "Ocultar senha", jl = {
        log_in: Rs,
        log_out: Bs,
        logged_in_as: Gs,
        logged_in: Vs,
        logging_in: Hs,
        logging_out: Zs,
        sign_up: Ws,
        signing_up: Fs,
        forgot_password: Js,
        recover_password: qs,
        send_recovery_email: Ks,
        sending_recovery_email: Xs,
        never_mind: $s,
        update_password: el,
        updating_password: tl,
        complete_your_signup: nl,
        site_url_title: il,
        site_url_link_text: rl,
        site_url_message: ol,
        site_url_label: al,
        site_url_placeholder: sl,
        site_url_submit: ll,
        message_confirm: ul,
        message_password_mail: _l,
        message_email_changed: cl,
        message_verfication_error: dl,
        message_signup_disabled: gl,
        form_name_placeholder: pl,
        form_email_label: Ml,
        form_name_label: ml,
        form_email_placeholder: fl,
        form_password_label: hl,
        form_password_placeholder: vl,
        coded_by: yl,
        continue_with: Nl,
        "No user found with this email": "Nenhum usu\xe1rio encontrado com esse email",
        "Invalid Password": "Senha inv\xe1lida",
        "Email not confirmed": "Email n\xe3o confirmado",
        "User not found": "Usu\xe1rio n\xe3o encontrado",
        or: "ou",
        show_password: wl,
        hide_password: bl
    }, Dl = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: yl,
        complete_your_signup: nl,
        continue_with: Nl,
        default: jl,
        forgot_password: Js,
        form_email_label: Ml,
        form_email_placeholder: fl,
        form_name_label: ml,
        form_name_placeholder: pl,
        form_password_label: hl,
        form_password_placeholder: vl,
        hide_password: bl,
        log_in: Rs,
        log_out: Bs,
        logged_in: Vs,
        logged_in_as: Gs,
        logging_in: Hs,
        logging_out: Zs,
        message_confirm: ul,
        message_email_changed: cl,
        message_password_mail: _l,
        message_signup_disabled: gl,
        message_verfication_error: dl,
        never_mind: $s,
        or: "ou",
        recover_password: qs,
        send_recovery_email: Ks,
        sending_recovery_email: Xs,
        show_password: wl,
        sign_up: Ws,
        signing_up: Fs,
        site_url_label: al,
        site_url_link_text: rl,
        site_url_message: ol,
        site_url_placeholder: sl,
        site_url_submit: ll,
        site_url_title: il,
        update_password: el,
        updating_password: tl
    }, Symbol.toStringTag, {
        value: "Module"
    })), zl = "Zaloguj si\u0119", Tl = "Wyloguj si\u0119", kl = "Zaloguj jako", xl = "Zalogowany", Il = "Logowanie", Ll = "Wylogowywanie", Ol = "Zarejestruj si\u0119", El = "Rejestracja", Sl = "Nie pami\u0119tasz has\u0142a?", Al = "Resetuj has\u0142o", Ul = "Wy\u015Blij link do resetowania has\u0142a", Cl = "Wysy\u0142anie linku do resetowania has\u0142a", Ql = "Nieistotne", Pl = "Zaktualizuj has\u0142o", Yl = "Aktualizowanie has\u0142o", Rl = "Doko\u0144cz rejestracj\u0119", Bl = "Ustawienia strony", Gl = "Usu\u0144 adres localhost", Vl = "Wygl\u0105da na to \u017Ce zosta\u0142 uruchomiony lokalny serwer. Wprowad\u017A adres Twojej strony na Netlify.", Hl = "Wprowadz adres strony na Netlify", Zl = "Adres Twojej strony na Netlify", Wl = "Ustaw adres strony", Fl = "Potwierdzenie zosta\u0142o wys\u0142ane na Tw\xf3j adres email. Kliknij w link w wiadomo\u015Bci aby kontunuowa\u0107.", Jl = "Wys\u0142ali\u015Bmy link resetuj\u0105cy has\u0142o na Tw\xf3j adres email. Klknij w link w wiadomo\u015Bci aby zresetowa\u0107 has\u0142o.", ql = "Tw\xf3j adres email zosta\u0142 zaktualizowany!", Kl = "Wyst\u0105pi\u0142 b\u0142\u0105d podczas weryfikcacji Twoje konta. Spr\xf3buj ponownie lub skontaktuj si\u0119 z administratorem,", Xl = "Publiczna rejestracja jest wy\u0142\u0105czona. Skontaktuj si\u0119 z administratorem by uzyska\u0107 zaproszenie.", $l = "Imi\u0119", eu = "Wprowad\u017A Tw\xf3j adres email", tu = "Wprowad\u017A Twoje imi\u0119", nu = "Email", iu = "Wprowad\u017A twoje has\u0142o", ru = "Has\u0142o", ou = "Coded by Netlify", au = "Kontynuuj z", su = "Poka\u017C has\u0142o", lu = "Ukryj has\u0142o", uu = {
        log_in: zl,
        log_out: Tl,
        logged_in_as: kl,
        logged_in: xl,
        logging_in: Il,
        logging_out: Ll,
        sign_up: Ol,
        signing_up: El,
        forgot_password: Sl,
        recover_password: Al,
        send_recovery_email: Ul,
        sending_recovery_email: Cl,
        never_mind: Ql,
        update_password: Pl,
        updating_password: Yl,
        complete_your_signup: Rl,
        site_url_title: Bl,
        site_url_link_text: Gl,
        site_url_message: Vl,
        site_url_label: Hl,
        site_url_placeholder: Zl,
        site_url_submit: Wl,
        message_confirm: Fl,
        message_password_mail: Jl,
        message_email_changed: ql,
        message_verfication_error: Kl,
        message_signup_disabled: Xl,
        form_name_placeholder: $l,
        form_email_label: eu,
        form_name_label: tu,
        form_email_placeholder: nu,
        form_password_label: iu,
        form_password_placeholder: ru,
        coded_by: ou,
        continue_with: au,
        "No user found with this email": "Nie znaleziono u\u017Cytkownika o tym adresie",
        "Invalid Password": "Has\u0142o nieprawid\u0142owe",
        "Email not confirmed": "Email nie zosta\u0142 potwierdzony",
        "User not found": "Nie znaleziono u\u017Cytkownika",
        or: "lub",
        show_password: su,
        hide_password: lu
    }, _u = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: ou,
        complete_your_signup: Rl,
        continue_with: au,
        default: uu,
        forgot_password: Sl,
        form_email_label: eu,
        form_email_placeholder: nu,
        form_name_label: tu,
        form_name_placeholder: $l,
        form_password_label: iu,
        form_password_placeholder: ru,
        hide_password: lu,
        log_in: zl,
        log_out: Tl,
        logged_in: xl,
        logged_in_as: kl,
        logging_in: Il,
        logging_out: Ll,
        message_confirm: Fl,
        message_email_changed: ql,
        message_password_mail: Jl,
        message_signup_disabled: Xl,
        message_verfication_error: Kl,
        never_mind: Ql,
        or: "lub",
        recover_password: Al,
        send_recovery_email: Ul,
        sending_recovery_email: Cl,
        show_password: su,
        sign_up: Ol,
        signing_up: El,
        site_url_label: Hl,
        site_url_link_text: Gl,
        site_url_message: Vl,
        site_url_placeholder: Zl,
        site_url_submit: Wl,
        site_url_title: Bl,
        update_password: Pl,
        updating_password: Yl
    }, Symbol.toStringTag, {
        value: "Module"
    })), cu = "P\u0159ihl\xe1sit se", du = "Odhl\xe1sit se", gu = "P\u0159ihl\xe1\u0161en jako", pu = "P\u0159ihl\xe1\u0161en\xfd u\u017Eivatel", Mu = "Prob\xedh\xe1 p\u0159ihl\xe1\u0161en\xed", mu = "Prob\xedh\xe1 odhl\xe1\u0161en\xed", fu = "Zaregistrovat se", hu = "Registrace", vu = "Zapomn\u011Bli jste heslo?", yu = "Obnovit heslo", Nu = "Odeslat e-mail pro obnoven\xed", wu = "Odes\xedl\xe1n\xed e-mailu pro obnoven\xed", bu = "Zp\u011Bt", ju = "Aktualizovat heslo", Du = "Aktualizace hesla", zu = "Dokon\u010Dete registraci", Tu = "Nastaven\xed v\xfdvoje", ku = "Vymazat URL localhost", xu = "Zd\xe1 se, \u017Ee pou\u017E\xedv\xe1te lok\xe1ln\xed server. Sd\u011Blte n\xe1m pros\xedm adresu URL sv\xe9ho Netlify serveru.", Iu = "Zadejte adresu URL sv\xe9ho serveru Netlify", Lu = "URL va\u0161eho Netlify serveru", Ou = "Nastavit adresu URL", Eu = "Na v\xe1\u0161 e-mail byl odesl\xe1n odkaz k potvrzen\xed registrace, pokra\u010Dujte kliknut\xedm na tento odkaz.", Su = "Zaslali jsme v\xe1m e-mail pro obnoven\xed hesla, heslo obnov\xedte kliknut\xedm na odkaz v e-mailu.", Au = "Va\u0161e e-mailov\xe1 adresa byla aktualizov\xe1na!", Uu = "P\u0159i ov\u011B\u0159ov\xe1n\xed va\u0161eho \xfa\u010Dtu do\u0161lo k chyb\u011B. Zkuste to pros\xedm znovu nebo kontaktujte spr\xe1vce.", Cu = "Registrace pro ve\u0159ejnost jsou zak\xe1z\xe1ny. Kontaktujte spr\xe1vce a po\u017E\xe1dejte o pozv\xe1nku.", Qu = "Jm\xe9no", Pu = "Zadejte sv\u016Fj e-mail", Yu = "Zadejte sv\xe9 jm\xe9no", Ru = "E-mail", Bu = "Zadejte sv\xe9 heslo", Gu = "Heslo", Vu = "Vytvo\u0159eno Netlify", Hu = "Pokra\u010Dovat p\u0159es", Zu = "nebo", Wu = "Zobrazit heslo", Fu = "Skr\xfdt heslo", Ju = {
        log_in: cu,
        log_out: du,
        logged_in_as: gu,
        logged_in: pu,
        logging_in: Mu,
        logging_out: mu,
        sign_up: fu,
        signing_up: hu,
        forgot_password: vu,
        recover_password: yu,
        send_recovery_email: Nu,
        sending_recovery_email: wu,
        never_mind: bu,
        update_password: ju,
        updated_password: Du,
        complete_your_signup: zu,
        site_url_title: Tu,
        site_url_link_text: ku,
        site_url_message: xu,
        site_url_label: Iu,
        site_url_placeholder: Lu,
        site_url_submit: Ou,
        message_confirm: Eu,
        message_password_mail: Su,
        message_email_changed: Au,
        message_verfication_error: Uu,
        message_signup_disabled: Cu,
        form_name_placeholder: Qu,
        form_email_label: Pu,
        form_name_label: Yu,
        form_email_placeholder: Ru,
        form_password_label: Bu,
        form_password_placeholder: Gu,
        coded_by: Vu,
        continue_with: Hu,
        "No user found with this email": "Nebyl nalezen \u017E\xe1dn\xfd u\u017Eivatel s t\xedmto e-mailem",
        "Invalid Password": "Neplatn\xe9 heslo",
        "Email not confirmed": "E-mail nebyl potvrzen",
        "User not found": "U\u017Eivatel nebyl nalezen",
        or: Zu,
        show_password: Wu,
        hide_password: Fu
    }, qu = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Vu,
        complete_your_signup: zu,
        continue_with: Hu,
        default: Ju,
        forgot_password: vu,
        form_email_label: Pu,
        form_email_placeholder: Ru,
        form_name_label: Yu,
        form_name_placeholder: Qu,
        form_password_label: Bu,
        form_password_placeholder: Gu,
        hide_password: Fu,
        log_in: cu,
        log_out: du,
        logged_in: pu,
        logged_in_as: gu,
        logging_in: Mu,
        logging_out: mu,
        message_confirm: Eu,
        message_email_changed: Au,
        message_password_mail: Su,
        message_signup_disabled: Cu,
        message_verfication_error: Uu,
        never_mind: bu,
        or: Zu,
        recover_password: yu,
        send_recovery_email: Nu,
        sending_recovery_email: wu,
        show_password: Wu,
        sign_up: fu,
        signing_up: hu,
        site_url_label: Iu,
        site_url_link_text: ku,
        site_url_message: xu,
        site_url_placeholder: Lu,
        site_url_submit: Ou,
        site_url_title: Tu,
        update_password: ju,
        updated_password: Du
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ku = "Prihl\xe1si\u0165 sa", Xu = "Odhl\xe1si\u0165 sa", $u = "Prihl\xe1sen\xfd ako", e_ = "Prihl\xe1sen\xfd u\u017E\xedvate\u013E", t_ = "Prebieha prihl\xe1senie", n_ = "Prebieha odhl\xe1senie", i_ = "Zaregistrova\u0165 sa", r_ = "Registr\xe1cia", o_ = "Zabudli ste heslo?", a_ = "Obnovi\u0165 heslo", s_ = "Odosla\u0165 e-mail pre obnovenie", l_ = "Odosielanie e-mailu pre obnovenie", u_ = "Nasp\xe4\u0165", __ = "Aktualizova\u0165 heslo", c_ = "Aktualiz\xe1cia hesla", d_ = "Dokon\u010Dite registr\xe1ciu", g_ = "Nastavenie v\xfdvoja", p_ = "Vymaza\u0165 URL localhost", M_ = "Zd\xe1 sa, \u017Ee pou\u017E\xedvate lok\xe1lny server. Pros\xedm, nastavte URL adresu svojho Netlify servera.", m_ = "Zadajte URL svojho Netlify servera", f_ = "URL v\xe1\u0161ho Netlify servera", h_ = "Nastavi\u0165 URL adresu", v_ = "Potvr\u010Fte registr\xe1ciu kliknut\xedm na odkaz v spr\xe1ve, ktor\xfa sme V\xe1m pr\xe1ve zaslali na v\xe1\u0161 email.", y_ = "Poslali sme v\xe1m e-mail pre obnovenie hesla, heslo obnov\xedte kliknut\xedm na odkaz v e-maile.", N_ = "Va\u0161a e-mailov\xe1 adresa bola aktualizovan\xe1!", w_ = "Pri overovan\xed v\xe1\u0161ho \xfa\u010Dtu do\u0161lo k chybe. Pros\xedm, sk\xfaste to znova alebo kontaktujte spr\xe1vcu.", b_ = "Registr\xe1cia pre verejnos\u0165 s\xfa zak\xe1zan\xe9. Kontaktujte spr\xe1vcu a po\u017Eiadajte o pozv\xe1nku.", j_ = "Meno", D_ = "Zadajte svoj e-mail", z_ = "Zadajte svoje meno", T_ = "E-mail", k_ = "Zadajte svoje heslo", x_ = "Heslo", I_ = "Vytvoren\xe9 Netlify", L_ = "Pokra\u010Dova\u0165 cez", O_ = "alebo", E_ = "Zobrazi\u0165 heslo", S_ = "Skry\u0165 heslo", A_ = {
        log_in: Ku,
        log_out: Xu,
        logged_in_as: $u,
        logged_in: e_,
        logging_in: t_,
        logging_out: n_,
        sign_up: i_,
        signing_up: r_,
        forgot_password: o_,
        recover_password: a_,
        send_recovery_email: s_,
        sending_recovery_email: l_,
        never_mind: u_,
        update_password: __,
        updated_password: c_,
        complete_your_signup: d_,
        site_url_title: g_,
        site_url_link_text: p_,
        site_url_message: M_,
        site_url_label: m_,
        site_url_placeholder: f_,
        site_url_submit: h_,
        message_confirm: v_,
        message_password_mail: y_,
        message_email_changed: N_,
        message_verfication_error: w_,
        message_signup_disabled: b_,
        form_name_placeholder: j_,
        form_email_label: D_,
        form_name_label: z_,
        form_email_placeholder: T_,
        form_password_label: k_,
        form_password_placeholder: x_,
        coded_by: I_,
        continue_with: L_,
        "No user found with this email": "Nebol n\xe1jden\xfd \u017Eiadny u\u017E\xedvate\u013E s t\xfdmto e-mailom",
        "Invalid Password": "Neplatn\xe9 heslo",
        "Email not confirmed": "E-mail nebol potvrden\xfd",
        "User not found": "Pou\u017E\xedvate\u013E nebol n\xe1jden\xfd",
        or: O_,
        show_password: E_,
        hide_password: S_
    }, U_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: I_,
        complete_your_signup: d_,
        continue_with: L_,
        default: A_,
        forgot_password: o_,
        form_email_label: D_,
        form_email_placeholder: T_,
        form_name_label: z_,
        form_name_placeholder: j_,
        form_password_label: k_,
        form_password_placeholder: x_,
        hide_password: S_,
        log_in: Ku,
        log_out: Xu,
        logged_in: e_,
        logged_in_as: $u,
        logging_in: t_,
        logging_out: n_,
        message_confirm: v_,
        message_email_changed: N_,
        message_password_mail: y_,
        message_signup_disabled: b_,
        message_verfication_error: w_,
        never_mind: u_,
        or: O_,
        recover_password: a_,
        send_recovery_email: s_,
        sending_recovery_email: l_,
        show_password: E_,
        sign_up: i_,
        signing_up: r_,
        site_url_label: m_,
        site_url_link_text: p_,
        site_url_message: M_,
        site_url_placeholder: f_,
        site_url_submit: h_,
        site_url_title: g_,
        update_password: __,
        updated_password: c_
    }, Symbol.toStringTag, {
        value: "Module"
    })), C_ = "\u0412\u043E\u0439\u0442\u0438", Q_ = "\u0412\u044B\u0439\u0442\u0438", P_ = "\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A", Y_ = "\u0412\u044B \u0432\u043E\u0448\u043B\u0438", R_ = "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0432\u0445\u043E\u0434", B_ = "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0445\u043E\u0434", G_ = "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", V_ = "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", H_ = "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?", Z_ = "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", W_ = "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F", F_ = "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F", J_ = "\u041E\u0442\u043C\u0435\u043D\u0430", q_ = "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", K_ = "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F", X_ = "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E", $_ = "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438", ec = "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 URL", tc = "\u041F\u043E\u0445\u043E\u0436\u0435, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430, \u0440\u0430\u0437\u043C\u0435\u0449\u0451\u043D\u043D\u043E\u0433\u043E \u043D\u0430 Netlify.", nc = "\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 Netlify", ic = "URL \u0441\u0430\u0439\u0442\u0430 Netlify", rc = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C URL \u0441\u0430\u0439\u0442\u0430", oc = "\u041F\u0438\u0441\u044C\u043C\u043E \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F.", ac = "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0412\u0430\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F.", sc = "\u0412\u0430\u0448\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430!", lc = "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C.", uc = "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435.", _c = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B", cc = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F", dc = "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", gc = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", pc = "\u041F\u0430\u0440\u043E\u043B\u044C", Mc = "\u0421\u0434\u0435\u043B\u0430\u043D\u043E Netlify", mc = "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0441", fc = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", hc = "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", vc = {
        log_in: C_,
        log_out: Q_,
        logged_in_as: P_,
        logged_in: Y_,
        logging_in: R_,
        logging_out: B_,
        sign_up: G_,
        signing_up: V_,
        forgot_password: H_,
        recover_password: Z_,
        send_recovery_email: W_,
        sending_recovery_email: F_,
        never_mind: J_,
        update_password: q_,
        updating_password: K_,
        complete_your_signup: X_,
        site_url_title: $_,
        site_url_link_text: ec,
        site_url_message: tc,
        site_url_label: nc,
        site_url_placeholder: ic,
        site_url_submit: rc,
        message_confirm: oc,
        message_password_mail: ac,
        message_email_changed: sc,
        message_verfication_error: lc,
        message_signup_disabled: uc,
        form_name_placeholder: "\u0418\u043C\u044F",
        form_email_label: _c,
        form_name_label: cc,
        form_email_placeholder: dc,
        form_password_label: gc,
        form_password_placeholder: pc,
        coded_by: Mc,
        "No user found with this email": "\u041D\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u0442\u0430\u043A\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u043E\u0439",
        "Invalid Password": "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
        continue_with: mc,
        "Email not confirmed": "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D",
        "User not found": "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
        or: "\u0438\u043B\u0438",
        show_password: fc,
        hide_password: hc
    }, yc = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Mc,
        complete_your_signup: X_,
        continue_with: mc,
        default: vc,
        forgot_password: H_,
        form_email_label: _c,
        form_email_placeholder: dc,
        form_name_label: cc,
        form_name_placeholder: "\u0418\u043C\u044F",
        form_password_label: gc,
        form_password_placeholder: pc,
        hide_password: hc,
        log_in: C_,
        log_out: Q_,
        logged_in: Y_,
        logged_in_as: P_,
        logging_in: R_,
        logging_out: B_,
        message_confirm: oc,
        message_email_changed: sc,
        message_password_mail: ac,
        message_signup_disabled: uc,
        message_verfication_error: lc,
        never_mind: J_,
        or: "\u0438\u043B\u0438",
        recover_password: Z_,
        send_recovery_email: W_,
        sending_recovery_email: F_,
        show_password: fc,
        sign_up: G_,
        signing_up: V_,
        site_url_label: nc,
        site_url_link_text: ec,
        site_url_message: tc,
        site_url_placeholder: ic,
        site_url_submit: rc,
        site_url_title: $_,
        update_password: q_,
        updating_password: K_
    }, Symbol.toStringTag, {
        value: "Module"
    })), Nc = "Anmelden", wc = "Abmelden", bc = "Angemeldet als", jc = "Angemeldet", Dc = "Anmeldung l\xe4uft", zc = "Abmeldung l\xe4uft", Tc = "Registrieren", kc = "Registrierung l\xe4uft", xc = "Passwort vergessen?", Ic = "Passwort wiederherstellen", Lc = "Wiederherstellungsmail senden", Oc = "Wiederherstellungsmail wird gesendet", Ec = "Wann anders", Sc = "Passwort aktualisieren", Ac = "Passwort wird aktualisiert", Uc = "Vervollst\xe4ndige deine Registrierung", Cc = "Entwicklungseinstellungen", Qc = "Localhost URL l\xf6schen", Pc = "Sieht so aus als benutzt du einen local server. Bitte teile uns die URL deiner Netlify-Seite mit.", Yc = "Gib die URL deiner Netlify-Seite ein", Rc = "URL deiner Netlify-Seite", Bc = "URL festlegen", Gc = "Dir wurde eine Best\xe4tigungsmail geschickt, klicke den Link um fortzufahren.", Vc = "Wir haben dir einen Wiederherstellungsmail geschickt, folge dem Link um dein Passwort zur\xfcckzusetzen.", Hc = "Deine E-Mail-Adresse wurde aktualisiert!", Zc = "Beim Best\xe4tigen deines Accounts ist ein Fehler aufgetreten. Bitte versuche es nochmal oder kontaktiere den Administrator.", Wc = "\xd6ffentliche Registrierungen sind deaktiviert. Kontaktiere den Administrator und bitte um eine Einladung.", Fc = "Name", Jc = "Gib deine E-Mail ein", qc = "Gib deinen Namen ein", Kc = "E-Mail", Xc = "Gib dein Passwort ein", $c = "Passwort", ed = "Entwickelt von Netlify", td = "Weiter mit", nd = "oder", id = "Passwort anzeigen", rd = "Passwort verbergen", od = {
        log_in: Nc,
        log_out: wc,
        logged_in_as: bc,
        logged_in: jc,
        logging_in: Dc,
        logging_out: zc,
        sign_up: Tc,
        signing_up: kc,
        forgot_password: xc,
        recover_password: Ic,
        send_recovery_email: Lc,
        sending_recovery_email: Oc,
        never_mind: Ec,
        update_password: Sc,
        updating_password: Ac,
        complete_your_signup: Uc,
        site_url_title: Cc,
        site_url_link_text: Qc,
        site_url_message: Pc,
        site_url_label: Yc,
        site_url_placeholder: Rc,
        site_url_submit: Bc,
        message_confirm: Gc,
        message_password_mail: Vc,
        message_email_changed: Hc,
        message_verfication_error: Zc,
        message_signup_disabled: Wc,
        form_name_placeholder: Fc,
        form_email_label: Jc,
        form_name_label: qc,
        form_email_placeholder: Kc,
        form_password_label: Xc,
        form_password_placeholder: $c,
        coded_by: ed,
        continue_with: td,
        "No user found with this email": "Kein Nutzer mit dieser E-Mail gefunden",
        "Invalid Password": "Ung\xfcltiges Passwort",
        "Email not confirmed": "E-Mail nicht best\xe4tigt",
        "User not found": "Nutzer nicht gefunden",
        or: nd,
        show_password: id,
        hide_password: rd
    }, ad = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: ed,
        complete_your_signup: Uc,
        continue_with: td,
        default: od,
        forgot_password: xc,
        form_email_label: Jc,
        form_email_placeholder: Kc,
        form_name_label: qc,
        form_name_placeholder: Fc,
        form_password_label: Xc,
        form_password_placeholder: $c,
        hide_password: rd,
        log_in: Nc,
        log_out: wc,
        logged_in: jc,
        logged_in_as: bc,
        logging_in: Dc,
        logging_out: zc,
        message_confirm: Gc,
        message_email_changed: Hc,
        message_password_mail: Vc,
        message_signup_disabled: Wc,
        message_verfication_error: Zc,
        never_mind: Ec,
        or: nd,
        recover_password: Ic,
        send_recovery_email: Lc,
        sending_recovery_email: Oc,
        show_password: id,
        sign_up: Tc,
        signing_up: kc,
        site_url_label: Yc,
        site_url_link_text: Qc,
        site_url_message: Pc,
        site_url_placeholder: Rc,
        site_url_submit: Bc,
        site_url_title: Cc,
        update_password: Sc,
        updating_password: Ac
    }, Symbol.toStringTag, {
        value: "Module"
    })), sd = "Login", ld = "Logout", ud = "Connesso come", _d = "Connesso", cd = "Connessione", dd = "Disconnessione", gd = "Registrati", pd = "Registrazione", Md = "Password dimenticata?", md = "Recupera password", fd = "Invia email di recupero", hd = "Invio email di recupero", vd = "Annulla", yd = "Aggiorna password", Nd = "Aggiornamento password", wd = "Completa la registrazione", bd = "Impostazioni di sviluppo", jd = "Elimina l'URL localhost", Dd = "Esecuzione su server locale rilevata. Inserisci l'URL del tuo sito Netlify.", zd = "Inserisci l'URL del tuo sito Netlify", Td = "URL del tuo sito Netlify", kd = "Imposta URL", xd = "Un messaggio di conferma \xe8 stato inviato alla tua email, clicca sul link al suo interno per continuare.", Id = "Abbiamo inviato un email di recupero al tuo account, clicca sul link al suo interno per reimpostare la password.", Ld = "Indirizzo email aggiornato!", Od = "Errore durante la verifica del tuo account. Riprova pi\xf9 tardi o contatta un amministratore.", Ed = "La registrazione pubblica \xe8 disabilitata. Contatta un amministratore per chiedere un invito.", Sd = "Nome", Ad = "Inserisci la tua email", Ud = "Inserisci il tuo nome", Cd = "Email", Qd = "Inserisci password", Pd = "Password", Yd = "Coded by Netlify", Rd = "Continua con", Bd = "Mostra password", Gd = "Nascondi password", Vd = {
        log_in: sd,
        log_out: ld,
        logged_in_as: ud,
        logged_in: _d,
        logging_in: cd,
        logging_out: dd,
        sign_up: gd,
        signing_up: pd,
        forgot_password: Md,
        recover_password: md,
        send_recovery_email: fd,
        sending_recovery_email: hd,
        never_mind: vd,
        update_password: yd,
        updating_password: Nd,
        complete_your_signup: wd,
        site_url_title: bd,
        site_url_link_text: jd,
        site_url_message: Dd,
        site_url_label: zd,
        site_url_placeholder: Td,
        site_url_submit: kd,
        message_confirm: xd,
        message_password_mail: Id,
        message_email_changed: Ld,
        message_verfication_error: Od,
        message_signup_disabled: Ed,
        form_name_placeholder: Sd,
        form_email_label: Ad,
        form_name_label: Ud,
        form_email_placeholder: Cd,
        form_password_label: Qd,
        form_password_placeholder: Pd,
        coded_by: Yd,
        continue_with: Rd,
        "No user found with this email": "Nessun utente trovato per questa email",
        "Invalid Password": "Password non valida",
        "Email not confirmed": "Email non confermata",
        "User not found": "Utente non trovato",
        or: "o",
        show_password: Bd,
        hide_password: Gd
    }, Hd = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Yd,
        complete_your_signup: wd,
        continue_with: Rd,
        default: Vd,
        forgot_password: Md,
        form_email_label: Ad,
        form_email_placeholder: Cd,
        form_name_label: Ud,
        form_name_placeholder: Sd,
        form_password_label: Qd,
        form_password_placeholder: Pd,
        hide_password: Gd,
        log_in: sd,
        log_out: ld,
        logged_in: _d,
        logged_in_as: ud,
        logging_in: cd,
        logging_out: dd,
        message_confirm: xd,
        message_email_changed: Ld,
        message_password_mail: Id,
        message_signup_disabled: Ed,
        message_verfication_error: Od,
        never_mind: vd,
        or: "o",
        recover_password: md,
        send_recovery_email: fd,
        sending_recovery_email: hd,
        show_password: Bd,
        sign_up: gd,
        signing_up: pd,
        site_url_label: zd,
        site_url_link_text: jd,
        site_url_message: Dd,
        site_url_placeholder: Td,
        site_url_submit: kd,
        site_url_title: bd,
        update_password: yd,
        updating_password: Nd
    }, Symbol.toStringTag, {
        value: "Module"
    })), Zd = "\u0633\u062C\u0644 \u062F\u062E\u0648\u0644", Wd = "\u0633\u062C\u0644 \u062E\u0631\u0648\u062C", Fd = "\u0645\u0633\u062C\u0644 \u0643\u0640", Jd = "\u0645\u0633\u062C\u0644", qd = "\u0641\u064A \u0637\u0648\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644", Kd = "\u0641\u064A \u0637\u0648\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C", Xd = "\u0627\u0634\u062A\u0631\u0643", $d = "\u0641\u064A \u0637\u0648\u0631 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643", eg = "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u061F", tg = "\u0627\u0633\u062A\u0639\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", ng = "\u0625\u0631\u0633\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F", ig = "\u0641\u064A \u0637\u0648\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F", rg = "\u0627\u0644\u0639\u0648\u062F\u0629", og = "\u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", ag = "\u0641\u064A \u0637\u0648\u0631 \u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", sg = "\u0623\u0643\u0645\u0644 \u0627\u0634\u062A\u0631\u0627\u0643\u0643", lg = "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0637\u0648\u064A\u0631", ug = "\u0627\u0645\u0633\u062D \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0644\u0645\u0636\u064A\u0641 \u0627\u0644\u0645\u062D\u0644\u064A", _g = "\u064A\u0628\u062F\u0648 \u0623\u0646\u0643 \u062A\u0642\u0648\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u062E\u0627\u062F\u0645 \u0645\u062D\u0644\u064A. \u064A\u0631\u062C\u0649 \u0625\u0639\u0644\u0627\u0645\u0646\u0627 \u0628\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0645\u0648\u0642\u0639 \u0646\u062A\u0644\u064A\u0641\u0627\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.", cg = "\u0623\u062F\u062E\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0645\u0648\u0642\u0639 \u0646\u062A\u0644\u064A\u0641\u0627\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643", dg = "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0645\u0648\u0642\u0639 \u0646\u062A\u0644\u064A\u0641\u0627\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643", gg = "\u0639\u064A\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0644\u0645\u0648\u0642\u0639", pg = "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u062A\u0623\u0643\u064A\u062F \u0625\u0644\u0649 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u0631\u0627\u0628\u0637 \u0647\u0646\u0627\u0643 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629.", Mg = "\u0644\u0642\u062F \u0623\u0631\u0633\u0644\u0646\u0627 \u0628\u0631\u064A\u062F\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627 \u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643\u060C \u0627\u062A\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0648\u062C\u0648\u062F \u0647\u0646\u0627\u0643 \u0644\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643.", mg = "\u0644\u0642\u062F \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A!", fg = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643. \u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644.", hg = "\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0645\u0639\u0637\u0644\u0629. \u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0648\u0627\u0637\u0644\u0628 \u062F\u0639\u0648\u0629.", vg = "\u0627\u0644\u0625\u0633\u0645", yg = "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", Ng = "\u0623\u062F\u062E\u0644 \u0623\u0633\u0645\u0643", wg = "\u0627\u0644\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", bg = "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643", jg = "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", Dg = "\u0645\u0628\u0631\u0645\u062C \u0628\u0648\u0627\u0633\u0637\u0629 \u0646\u062A\u0644\u064A\u0641\u0627\u064A", zg = "\u0625\u0633\u062A\u0645\u0631 \u0645\u0639", Tg = "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", kg = "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", xg = {
        log_in: Zd,
        log_out: Wd,
        logged_in_as: Fd,
        logged_in: Jd,
        logging_in: qd,
        logging_out: Kd,
        sign_up: Xd,
        signing_up: $d,
        forgot_password: eg,
        recover_password: tg,
        send_recovery_email: ng,
        sending_recovery_email: ig,
        never_mind: rg,
        update_password: og,
        updating_password: ag,
        complete_your_signup: sg,
        site_url_title: lg,
        site_url_link_text: ug,
        site_url_message: _g,
        site_url_label: cg,
        site_url_placeholder: dg,
        site_url_submit: gg,
        message_confirm: pg,
        message_password_mail: Mg,
        message_email_changed: mg,
        message_verfication_error: fg,
        message_signup_disabled: hg,
        form_name_placeholder: vg,
        form_email_label: yg,
        form_name_label: Ng,
        form_email_placeholder: wg,
        form_password_label: bg,
        form_password_placeholder: jg,
        coded_by: Dg,
        continue_with: zg,
        "No user found with this email": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0633\u062A\u062E\u062F\u0645 \u0644\u062F\u064A\u0647 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "Invalid Password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        "Email not confirmed": "\u0644\u0645 \u064A\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "User not found": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
        or: "\u0623\u0648",
        show_password: Tg,
        hide_password: kg
    }, Ig = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Dg,
        complete_your_signup: sg,
        continue_with: zg,
        default: xg,
        forgot_password: eg,
        form_email_label: yg,
        form_email_placeholder: wg,
        form_name_label: Ng,
        form_name_placeholder: vg,
        form_password_label: bg,
        form_password_placeholder: jg,
        hide_password: kg,
        log_in: Zd,
        log_out: Wd,
        logged_in: Jd,
        logged_in_as: Fd,
        logging_in: qd,
        logging_out: Kd,
        message_confirm: pg,
        message_email_changed: mg,
        message_password_mail: Mg,
        message_signup_disabled: hg,
        message_verfication_error: fg,
        never_mind: rg,
        or: "\u0623\u0648",
        recover_password: tg,
        send_recovery_email: ng,
        sending_recovery_email: ig,
        show_password: Tg,
        sign_up: Xd,
        signing_up: $d,
        site_url_label: cg,
        site_url_link_text: ug,
        site_url_message: _g,
        site_url_placeholder: dg,
        site_url_submit: gg,
        site_url_title: lg,
        update_password: og,
        updating_password: ag
    }, Symbol.toStringTag, {
        value: "Module"
    })), Lg = "\u5DF2\u767B\u5F55\u8D26\u53F7: ", Og = "\u6B63\u5728\u767B\u5F55", Eg = "\u6B63\u5728\u6CE8\u518C", Sg = "\u5FD8\u8BB0\u5BC6\u7801?", Ag = "\u6062\u590D\u5BC6\u7801", Ug = "\u53D1\u9001\u6062\u590D\u90AE\u4EF6", Cg = "\u6B63\u5728\u53D1\u9001\u6062\u590D\u90AE\u4EF6", Qg = "\u66F4\u65B0\u5BC6\u7801", Pg = "\u6B63\u5728\u66F4\u65B0\u5BC6\u7801", Yg = "\u5B8C\u6210\u6CE8\u518C", Rg = "\u5F00\u53D1\u6A21\u5F0F\u8BBE\u7F6E", Bg = "\u6E05\u7406 localhost URL", Gg = "\u4F60\u4F3C\u4E4E\u6B63\u5728\u8FD0\u884C\u672C\u5730\u670D\u52A1. \u8BF7\u544A\u8BC9\u6211\u4EEC\u4F60\u7684 Netlify \u7F51\u7AD9\u7684 URL.", Vg = "\u8F93\u5165 Netlify \u7F51\u7AD9\u7684 URL", Hg = "Netlify \u7F51\u7AD9\u7684 URL", Zg = "\u8BBE\u7F6E\u7F51\u7AD9 URL", Wg = "\u5DF2\u5411\u60A8\u7684\u90AE\u7BB1\u53D1\u9001\u786E\u8BA4\u90AE\u4EF6\uFF0C\u8BF7\u524D\u5F80\u90AE\u7BB1\u67E5\u770B.", Fg = "\u6211\u4EEC\u5DF2\u5411\u60A8\u7684\u5E10\u6237\u53D1\u9001\u4E86\u6062\u590D\u90AE\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u6B64\u5904\u7684\u94FE\u63A5\u91CD\u7F6E\u60A8\u7684\u5BC6\u7801.", Jg = "\u60A8\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u5DF2\u66F4\u65B0!", qg = "\u9A8C\u8BC1\u60A8\u7684\u5E10\u6237\u65F6\u51FA\u9519\u3002\u8BF7\u91CD\u8BD5\u6216\u8054\u7CFB\u7BA1\u7406\u5458", Kg = "\u516C\u5F00\u6CE8\u518C\u5DF2\u5173\u95ED. \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u83B7\u53D6\u9080\u8BF7\u94FE\u63A5.", Xg = "\u8F93\u5165\u90AE\u7BB1", $g = "\u8F93\u5165\u7528\u6237\u540D", ep = "\u8F93\u5165\u5BC6\u7801", tp = "\u7531 Netlify \u5F3A\u529B\u9A71\u52A8", np = "\u7EE7\u7EED\u767B\u5F55", ip = "\u663E\u793A\u5BC6\u7801", rp = "\u9690\u85CF\u5BC6\u7801", op = {
        log_in: "\u767B\u5F55",
        log_out: "\u6CE8\u9500",
        logged_in_as: Lg,
        logged_in: "\u5DF2\u767B\u5F55",
        logging_in: Og,
        logging_out: "\u5DF2\u9000\u51FA",
        sign_up: "\u6CE8\u518C",
        signing_up: Eg,
        forgot_password: Sg,
        recover_password: Ag,
        send_recovery_email: Ug,
        sending_recovery_email: Cg,
        never_mind: "\u5FFD\u7565",
        update_password: Qg,
        updating_password: Pg,
        complete_your_signup: Yg,
        site_url_title: Rg,
        site_url_link_text: Bg,
        site_url_message: Gg,
        site_url_label: Vg,
        site_url_placeholder: Hg,
        site_url_submit: Zg,
        message_confirm: Wg,
        message_password_mail: Fg,
        message_email_changed: Jg,
        message_verfication_error: qg,
        message_signup_disabled: Kg,
        form_name_placeholder: "\u7528\u6237\u540D",
        form_email_label: Xg,
        form_name_label: $g,
        form_email_placeholder: "\u90AE\u7BB1",
        form_password_label: ep,
        form_password_placeholder: "\u5BC6\u7801",
        coded_by: tp,
        continue_with: np,
        "No user found with this email": "\u672A\u627E\u5230\u8BE5\u90AE\u7BB1\u7684\u7528\u6237",
        "Invalid Password": "\u65E0\u6548\u5BC6\u7801",
        "Email not confirmed": "\u90AE\u7BB1\u672A\u786E\u8BA4",
        "User not found": "\u7528\u6237\u672A\u627E\u5230",
        or: "\u6216",
        show_password: ip,
        hide_password: rp
    }, ap = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: tp,
        complete_your_signup: Yg,
        continue_with: np,
        default: op,
        forgot_password: Sg,
        form_email_label: Xg,
        form_email_placeholder: "\u90AE\u7BB1",
        form_name_label: $g,
        form_name_placeholder: "\u7528\u6237\u540D",
        form_password_label: ep,
        form_password_placeholder: "\u5BC6\u7801",
        hide_password: rp,
        log_in: "\u767B\u5F55",
        log_out: "\u6CE8\u9500",
        logged_in: "\u5DF2\u767B\u5F55",
        logged_in_as: Lg,
        logging_in: Og,
        logging_out: "\u5DF2\u9000\u51FA",
        message_confirm: Wg,
        message_email_changed: Jg,
        message_password_mail: Fg,
        message_signup_disabled: Kg,
        message_verfication_error: qg,
        never_mind: "\u5FFD\u7565",
        or: "\u6216",
        recover_password: Ag,
        send_recovery_email: Ug,
        sending_recovery_email: Cg,
        show_password: ip,
        sign_up: "\u6CE8\u518C",
        signing_up: Eg,
        site_url_label: Vg,
        site_url_link_text: Bg,
        site_url_message: Gg,
        site_url_placeholder: Hg,
        site_url_submit: Zg,
        site_url_title: Rg,
        update_password: Qg,
        updating_password: Pg
    }, Symbol.toStringTag, {
        value: "Module"
    })), sp = "Inloggen", lp = "Uitloggen", up = "Ingelogd als", _p = "Ingelogd", cp = "Inloggen...", dp = "Uitloggen...", gp = "Registreren", pp = "Registreren...", Mp = "Wachtwoord vergeten?", mp = "Wachtwoord herstellen", fp = "Herstelmail verzenden", hp = "Herstelmail wordt verzonden", vp = "Laat maar", yp = "Wachtwoord wijzigen", Np = "Wachtwoord wordt gewijzigd", wp = "Inschrijving voltooien", bp = "Developer Instellingen", jp = "Wis localhost URL", Dp = "Het lijkt erop dat je een lokale server draait. Vul de URL van je Netlify Website in.", zp = "Vul je Netlify Website URL in", Tp = "URL van je Netlify Website", kp = "Stel de URL in", xp = "Er is een bevestigingsmail verzonden. Klik op de link in je mail om verder te gaan.", Ip = "We hebben een herstelmail verzonden, klik op de link in je mail om je wachtwoord te herstellen.", Lp = "Je e-mailadres is veranderd!", Op = "Er ging iets mis bij het verifi\xebren van je account. Probeer opnieuw, of neem contact op met een beheerder.", Ep = "Publieke inschrijvingen zijn uitgeschakeld. Neem contact op met een beheerder en vraag om een uitnodiging.", Sp = "Naam", Ap = "Vul je e-mailadres in", Up = "Vul je naam in", Cp = "E-mail", Qp = "Vul je wachtwoord in", Pp = "Wachtwoord", Yp = "Gemaakt door Netlify", Rp = "Verdergaan met", Bp = "Wachtwoord tonen", Gp = "Wachtwoord verbergen", Vp = {
        log_in: sp,
        log_out: lp,
        logged_in_as: up,
        logged_in: _p,
        logging_in: cp,
        logging_out: dp,
        sign_up: gp,
        signing_up: pp,
        forgot_password: Mp,
        recover_password: mp,
        send_recovery_email: fp,
        sending_recovery_email: hp,
        never_mind: vp,
        update_password: yp,
        updating_password: Np,
        complete_your_signup: wp,
        site_url_title: bp,
        site_url_link_text: jp,
        site_url_message: Dp,
        site_url_label: zp,
        site_url_placeholder: Tp,
        site_url_submit: kp,
        message_confirm: xp,
        message_password_mail: Ip,
        message_email_changed: Lp,
        message_verfication_error: Op,
        message_signup_disabled: Ep,
        form_name_placeholder: Sp,
        form_email_label: Ap,
        form_name_label: Up,
        form_email_placeholder: Cp,
        form_password_label: Qp,
        form_password_placeholder: Pp,
        coded_by: Yp,
        continue_with: Rp,
        "No user found with this email": "Er is geen gebruiker gevonden met dit e-mailadres",
        "Invalid Password": "Ongeldig Wachtwoord",
        "Email not confirmed": "E-mailadres niet bevestigd",
        "User not found": "Gebruiker niet gevonden",
        or: "of",
        show_password: Bp,
        hide_password: Gp
    }, Hp = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: Yp,
        complete_your_signup: wp,
        continue_with: Rp,
        default: Vp,
        forgot_password: Mp,
        form_email_label: Ap,
        form_email_placeholder: Cp,
        form_name_label: Up,
        form_name_placeholder: Sp,
        form_password_label: Qp,
        form_password_placeholder: Pp,
        hide_password: Gp,
        log_in: sp,
        log_out: lp,
        logged_in: _p,
        logged_in_as: up,
        logging_in: cp,
        logging_out: dp,
        message_confirm: xp,
        message_email_changed: Lp,
        message_password_mail: Ip,
        message_signup_disabled: Ep,
        message_verfication_error: Op,
        never_mind: vp,
        or: "of",
        recover_password: mp,
        send_recovery_email: fp,
        sending_recovery_email: hp,
        show_password: Bp,
        sign_up: gp,
        signing_up: pp,
        site_url_label: zp,
        site_url_link_text: jp,
        site_url_message: Dp,
        site_url_placeholder: Tp,
        site_url_submit: kp,
        site_url_title: bp,
        update_password: yp,
        updating_password: Np
    }, Symbol.toStringTag, {
        value: "Module"
    })), Zp = "Logga in", Wp = "Logga ut", Fp = "Inloggad som", Jp = "Inloggad", qp = "Loggar in", Kp = "Loggar ut", Xp = "Registrera", $p = "Registrerar", eM = "Gl\xf6mt l\xf6senord?", tM = "\xc5terst\xe4ll l\xf6senord", nM = "Skicka \xe5terst\xe4llningsmejl", iM = "Skickar \xe5terst\xe4llningsmejl", rM = "Gl\xf6m det", oM = "Uppdatera l\xf6senord", aM = "Uppdaterar l\xf6senord", sM = "Slutf\xf6r registrering", lM = "Inst\xe4llningar f\xf6r utvecklare", uM = "Rensa localhost URL", _M = "Det ser ut som att du k\xf6r en lokal server. V\xe4nligen ange din Netlify sajt URL.", cM = "Ange din Netlify sajt URL", dM = "URL f\xf6r din Netlify sajt", gM = "S\xe4tt sajt-URL", pM = "Ett bekr\xe4ftelsemejl har skickats till din epost, klicka p\xe5 l\xe4nken i mejlet f\xf6r att forts\xe4tta.", MM = "Vi har skickat ett \xe5terst\xe4llningsmejl till ditt konto, klicka p\xe5 l\xe4nken i mejlet f\xf6r att \xe5terst\xe4lla l\xf6senordet.", mM = "Din epostadress har uppdaterats!", fM = "Ett fel intr\xe4ffade vid verifieringen av ditt konto. V\xe4nligen f\xf6rs\xf6k igen eller kontakta en administrat\xf6r.", hM = "Registreringen \xe4r l\xe5st. Kontakta en administrat\xf6r f\xf6r att be om en inbjudan.", vM = "Namn", yM = "Ange din epost", NM = "Ange ditt namn", wM = "Epost", bM = "Ange l\xf6senord", jM = "L\xf6senord", DM = "Utvecklad av Netlify", zM = "Forts\xe4tt med", TM = "eller", kM = "Visa l\xf6senord", xM = "D\xf6lj l\xf6senord", IM = {
        log_in: Zp,
        log_out: Wp,
        logged_in_as: Fp,
        logged_in: Jp,
        logging_in: qp,
        logging_out: Kp,
        sign_up: Xp,
        signing_up: $p,
        forgot_password: eM,
        recover_password: tM,
        send_recovery_email: nM,
        sending_recovery_email: iM,
        never_mind: rM,
        update_password: oM,
        updating_password: aM,
        complete_your_signup: sM,
        site_url_title: lM,
        site_url_link_text: uM,
        site_url_message: _M,
        site_url_label: cM,
        site_url_placeholder: dM,
        site_url_submit: gM,
        message_confirm: pM,
        message_password_mail: MM,
        message_email_changed: mM,
        message_verfication_error: fM,
        message_signup_disabled: hM,
        form_name_placeholder: vM,
        form_email_label: yM,
        form_name_label: NM,
        form_email_placeholder: wM,
        form_password_label: bM,
        form_password_placeholder: jM,
        coded_by: DM,
        continue_with: zM,
        "No user found with this email": "Ingen anv\xe4ndare hittades med denna epost",
        "Invalid Password": "Felaktigt l\xf6senord",
        "Email not confirmed": "Din epost \xe4r inte verifierad",
        "User not found": "Anv\xe4ndaren hittades inte",
        or: TM,
        show_password: kM,
        hide_password: xM
    }, LM = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: DM,
        complete_your_signup: sM,
        continue_with: zM,
        default: IM,
        forgot_password: eM,
        form_email_label: yM,
        form_email_placeholder: wM,
        form_name_label: NM,
        form_name_placeholder: vM,
        form_password_label: bM,
        form_password_placeholder: jM,
        hide_password: xM,
        log_in: Zp,
        log_out: Wp,
        logged_in: Jp,
        logged_in_as: Fp,
        logging_in: qp,
        logging_out: Kp,
        message_confirm: pM,
        message_email_changed: mM,
        message_password_mail: MM,
        message_signup_disabled: hM,
        message_verfication_error: fM,
        never_mind: rM,
        or: TM,
        recover_password: tM,
        send_recovery_email: nM,
        sending_recovery_email: iM,
        show_password: kM,
        sign_up: Xp,
        signing_up: $p,
        site_url_label: cM,
        site_url_link_text: uM,
        site_url_message: _M,
        site_url_placeholder: dM,
        site_url_submit: gM,
        site_url_title: lM,
        update_password: oM,
        updating_password: aM
    }, Symbol.toStringTag, {
        value: "Module"
    })), OM = "Ingia", EM = "Toka", SM = "Umeingia kama", AM = "Umeingia", UM = "Unaingia", CM = "Unatoka", QM = "Jisajili", PM = "Unajisajili", YM = "Umesahau nenosiri?", RM = "Pata nenosiri", BM = "Tuma barua pepe ya kurejesha akaunti", GM = "Barua pepe ya kurejesha akaunti inatumwa", VM = "Usijali", HM = "Sasisha nenosiri", ZM = "Nenosiri inasasishwa", WM = "Kamilisha usajili wako", FM = "Mpangilio wa Usanidi", JM = "Safisha kiungo cha tovuti", qM = "Inaonekana kwamba unatumia seva ya ndani. Tafadhali tujulishe anwani ya tovuti yako ya Netlify.", KM = "Andika anwani ya tovuti yako ya Netlify", XM = "Anwani ya tovuti yako ya Netlify", $M = "Weka anwani ya tovuti", em = "Ujumbe wa uthibitisho ulitumwa kwa barua pepe yako, bonyeza kiungo hapo ili kuendelea.", tm = "Tumetuma barua pepe ya kurejesha akaunti yako, fuata kiunga hapo ili kuweka upya nenosiri yako.", nm = "Anwani yako ya barua pepe imesasishwa!", im = "Kulikuwa na hitilafu katika kuthibitisha akaunti yako. Tafadhali jaribu tena au wasiliana na msimamizi.", rm = "Usajili wa umma umezimwa. Wasiliana na msimamizi na uombe mwaliko.", om = "Jina", am = "Andika barua pepe yako", sm = "Andika jina lako", lm = "Barua pepe", um = "Andika nenosiri yako", _m = "Nenosiri", cm = "Imeandikwa na Netlify", dm = "Endelea na", gm = "Onyesha nenosiri", pm = "Ficha nenosiri", Mm = {
        log_in: OM,
        log_out: EM,
        logged_in_as: SM,
        logged_in: AM,
        logging_in: UM,
        logging_out: CM,
        sign_up: QM,
        signing_up: PM,
        forgot_password: YM,
        recover_password: RM,
        send_recovery_email: BM,
        sending_recovery_email: GM,
        never_mind: VM,
        update_password: HM,
        updating_password: ZM,
        complete_your_signup: WM,
        site_url_title: FM,
        site_url_link_text: JM,
        site_url_message: qM,
        site_url_label: KM,
        site_url_placeholder: XM,
        site_url_submit: $M,
        message_confirm: em,
        message_password_mail: tm,
        message_email_changed: nm,
        message_verfication_error: im,
        message_signup_disabled: rm,
        form_name_placeholder: om,
        form_email_label: am,
        form_name_label: sm,
        form_email_placeholder: lm,
        form_password_label: um,
        form_password_placeholder: _m,
        coded_by: cm,
        continue_with: dm,
        "No user found with this email": "Hakuna mtumiaji aliyepatikana na barua pepe hii",
        "Invalid Password": "Nenosiri batili",
        "Email not confirmed": "Barua pepe haijathibitishwa",
        "User not found": "Mtumiaji wa akaunti hapatikani",
        or: "au",
        show_password: gm,
        hide_password: pm
    }, mm = Object.freeze(Object.defineProperty({
        __proto__: null,
        coded_by: cm,
        complete_your_signup: WM,
        continue_with: dm,
        default: Mm,
        forgot_password: YM,
        form_email_label: am,
        form_email_placeholder: lm,
        form_name_label: sm,
        form_name_placeholder: om,
        form_password_label: um,
        form_password_placeholder: _m,
        hide_password: pm,
        log_in: OM,
        log_out: EM,
        logged_in: AM,
        logged_in_as: SM,
        logging_in: UM,
        logging_out: CM,
        message_confirm: em,
        message_email_changed: nm,
        message_password_mail: tm,
        message_signup_disabled: rm,
        message_verfication_error: im,
        never_mind: VM,
        or: "au",
        recover_password: RM,
        send_recovery_email: BM,
        sending_recovery_email: GM,
        show_password: gm,
        sign_up: QM,
        signing_up: PM,
        site_url_label: KM,
        site_url_link_text: JM,
        site_url_message: qM,
        site_url_placeholder: XM,
        site_url_submit: $M,
        site_url_title: FM,
        update_password: HM,
        updating_password: ZM
    }, Symbol.toStringTag, {
        value: "Module"
    })), fm = "en", hm = {
        en: Oo,
        fr: ma,
        es: ts,
        hu: Ys,
        pt: Dl,
        pl: _u,
        cs: qu,
        sk: U_,
        ru: yc,
        de: ad,
        it: Hd,
        ar: Ig,
        zhCN: ap,
        nl: Hp,
        sv: LM,
        sw: mm
    };
    !function(e) {
        !0 === e.isolateGlobalState && function() {
            if ((Xt.pendingReactions.length || Xt.inBatch || Xt.isRunningReactions) && B(36), Kt = !0, qt) {
                var e = V();
                0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), Xt = new Jt;
            }
        }();
        var t = e.useProxies, n = e.enforceActions;
        void 0 !== t && (Xt.useProxies = t === In || "never" !== t && "undefined" != typeof Proxy), "ifavailable" === t && (Xt.verifyProxies = !0);
        var i, r, o = "observed" === n;
        Xt.enforceActions = o, Xt.allowStateChanges = !0 !== o && o !== In, [
            "computedRequiresReaction",
            "reactionRequiresObservable",
            "observableRequiresReaction",
            "disableErrorBoundaries",
            "safeDescriptors"
        ].forEach(function(t) {
            t in e && (Xt[t] = !!e[t]);
        }), Xt.allowStateReads = !Xt.observableRequiresReaction, e.reactionScheduler && (i = e.reactionScheduler, r = un, un = function(e) {
            return i(function() {
                return r(e);
            });
        });
    }({
        enforceActions: "never"
    });
    const vm = vt({
        user: null,
        recovered_user: null,
        message: null,
        settings: null,
        gotrue: null,
        error: null,
        siteURL: null,
        remember: !0,
        saving: !1,
        invite_token: null,
        email_change_token: null,
        namePlaceholder: null,
        signupMetadata: null,
        cookieDomain: null,
        isLocal: !1,
        modal: {
            page: "login",
            isOpen: !1,
            logo: !0
        },
        locale: fm
    });
    function ym(e) {
        const t = vm.cookieDomain ? `; domain=${vm.cookieDomain}` : "", n = "https:" === window.location.protocol ? "; secure" : "";
        document.cookie = e ? `nf_jwt=${e}; path=/${t}${n}; SameSite=Lax` : `nf_jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${t}${n}; SameSite=Lax`;
    }
    vm.setNamePlaceholder = yn(function(e) {
        vm.namePlaceholder = e;
    }), vm.startAction = yn(function() {
        vm.saving = !0, vm.error = null, vm.message = null;
    }), vm.setError = yn(function(e) {
        vm.saving = !1, vm.error = e ?? null;
    }), vm.init = yn(function(e, t) {
        e && (vm.gotrue = e, vm.user = e.currentUser(), vm.user && (vm.modal.page = "user", vm.user.getUserData().catch(yn(()=>{
            vm.user = null, vm.modal.page = "login", ym(null);
        })))), t && vm.loadSettings();
    }), vm.loadSettings = yn(function() {
        vm.settings || vm.gotrue && vm.gotrue.settings().then(yn((e)=>vm.settings = e)).catch(yn(()=>{
            vm.error = new Error(`Failed to load settings from ${vm.gotrue.api.apiURL}`);
        }));
    }), vm.setIsLocal = yn(function(e) {
        vm.isLocal = e;
    }), vm.setSiteURL = yn(function(e) {
        vm.siteURL = e;
    }), vm.clearSiteURL = yn(function() {
        vm.gotrue = null, vm.siteURL = null, vm.settings = null;
    }), vm.login = yn(function(e, t) {
        return vm.startAction(), vm.gotrue.login(e, t, vm.remember).then(yn((e)=>{
            vm.user = e, vm.modal.page = "user", vm.invite_token = null, ym(e.tokenDetails()?.access_token ?? null), vm.email_change_token && vm.doEmailChange(), vm.saving = !1;
        })).catch(vm.setError);
    }), vm.externalLogin = yn(function(e) {
        vm.error = null, vm.message = null;
        const t = vm.invite_token ? vm.gotrue.acceptInviteExternalUrl(e, vm.invite_token) : vm.gotrue.loginExternalUrl(e);
        window.location.href = t;
    }), vm.completeExternalLogin = yn(function(e) {
        vm.startAction(), vm.gotrue.createUser(e, vm.remember).then((e)=>{
            vm.user = e, vm.modal.page = "user", ym(e.tokenDetails()?.access_token ?? null), vm.saving = !1;
        }).catch(vm.setError);
    }), vm.signup = yn(function(e, t, n) {
        return vm.startAction(), vm.gotrue.signup(t, n, {
            ...vm.signupMetadata,
            full_name: e
        }).then(yn(()=>{
            vm.signupMetadata = null, vm.settings?.autoconfirm ? vm.login(t, n) : vm.message = "confirm", vm.saving = !1;
        })).catch(vm.setError);
    }), vm.logout = yn(function() {
        if (vm.user) return vm.startAction(), vm.user.logout().then(yn(()=>{
            vm.user = null, vm.modal.page = "login", vm.saving = !1, ym(null);
        })).catch(vm.setError);
        vm.modal.page = "login", vm.saving = !1, ym(null);
    }), vm.updatePassword = yn(function(e) {
        vm.startAction();
        (vm.recovered_user || vm.user).update({
            password: e
        }).then((e)=>{
            vm.user = e, vm.recovered_user = null, vm.modal.page = "user", ym(e.tokenDetails()?.access_token ?? null), vm.saving = !1;
        }).catch(vm.setError);
    }), vm.acceptInvite = yn(function(e) {
        vm.startAction(), vm.gotrue.acceptInvite(vm.invite_token, e, vm.remember).then((e)=>{
            vm.saving = !1, vm.invite_token = null, vm.user = e, vm.modal.page = "user", ym(e.tokenDetails()?.access_token ?? null);
        }).catch(vm.setError);
    }), vm.doEmailChange = yn(function() {
        return vm.startAction(), vm.user.update({
            email_change_token: vm.email_change_token
        }).then(yn((e)=>{
            vm.user = e, vm.email_change_token = null, vm.message = "email_changed", vm.saving = !1;
        })).catch(vm.setError);
    }), vm.verifyToken = yn(function(e, t) {
        const n = vm.gotrue;
        switch(vm.modal.isOpen = !0, e){
            case "confirmation":
                vm.startAction(), vm.modal.page = "signup", n.confirm(t, vm.remember).then(yn((e)=>{
                    vm.user = e, ym(e.tokenDetails()?.access_token ?? null), vm.saving = !1;
                })).catch(yn((e)=>{
                    console.error(e), vm.message = "verfication_error", vm.modal.page = "signup", vm.saving = !1;
                }));
                break;
            case "email_change":
                vm.email_change_token = t, vm.modal.page = "message", vm.user ? vm.doEmailChange() : vm.modal.page = "login";
                break;
            case "invite":
                vm.modal.page = e, vm.invite_token = t;
                break;
            case "recovery":
                vm.startAction(), vm.user = null, vm.modal.page = e, vm.gotrue.recover(t, vm.remember).then((e)=>{
                    vm.saving = !1, vm.recovered_user = e;
                }).catch((e)=>{
                    vm.saving = !1, vm.error = e, vm.modal.page = "login";
                });
                break;
            default:
                vm.error = "Unknown token type";
        }
    }), vm.requestPasswordRecovery = yn(function(e) {
        vm.startAction(), vm.gotrue.requestPasswordRecovery(e).then(yn(()=>{
            vm.message = "password_mail", vm.saving = !1;
        })).catch(vm.setError);
    }), vm.openModal = yn(function(e) {
        vm.modal.page = e, vm.modal.isOpen = !0;
    }), vm.closeModal = yn(function() {
        vm.modal.isOpen = !1, vm.error = null, vm.message = null, vm.saving = !1;
    }), vm.translate = yn(function(e) {
        return ((e, t = fm)=>{
            const n = hm[t]?.[e];
            return n || hm[fm][e] || e;
        })(e, vm.locale);
    });
    const Nm = Er(function({ mode: e, text: t }) {
        const n = Dr(Sr);
        if (!n) return null;
        const { user: i, translate: r } = n, o = ()=>{
            n.openModal("user");
        };
        return "button" === e ? R("button", {
            type: "button",
            className: "netlify-identity-button",
            onClick: ()=>{
                n.openModal(i ? "user" : "login");
            },
            children: t || r(i ? "log_out" : "log_in")
        }) : R("ul", i ? {
            className: "netlify-identity-menu",
            children: [
                R("li", {
                    className: "netlify-identity-item netlify-identity-user-details",
                    children: [
                        r("logged_in_as"),
                        " ",
                        R("span", {
                            className: "netlify-identity-user",
                            children: i.user_metadata?.name || i.email
                        })
                    ]
                }),
                R("li", {
                    className: "netlify-identity-item",
                    children: R("button", {
                        type: "button",
                        className: "netlify-identity-logout",
                        onClick: o,
                        children: r("log_out")
                    })
                })
            ]
        } : {
            className: "netlify-identity-menu",
            children: [
                R("li", {
                    className: "netlify-identity-item",
                    children: R("button", {
                        type: "button",
                        className: "netlify-identity-signup",
                        onClick: ()=>{
                            n.openModal("signup");
                        },
                        children: r("sign_up")
                    })
                }),
                R("li", {
                    className: "netlify-identity-item",
                    children: R("button", {
                        type: "button",
                        className: "netlify-identity-login",
                        onClick: ()=>{
                            n.openModal("login");
                        },
                        children: r("log_in")
                    })
                })
            ]
        });
    }), wm = ":root{--baseColor: rgb(14, 30, 37);--subduedColor: #a3a9ac;--errorColor: #fa3946;--providerColorGoogle: #4285f4;--providerAltColorGoogle: #366dc7;--providerColorGitHub: #333;--providerAltColorGitHub: #000;--providerColorGitLab: #e24329;--providerAltColorGitLab: #b03320;--providerColorBitbucket: #205081;--providerAltColorBitbucket: #14314f;--providerColorFacebook: #1877F2;--providerAltColorFacebook: #166FE5;--fontFamily: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--basePadding: 32px}::-webkit-input-placeholder{color:#a3a9ac;color:var(--subduedColor);font-weight:500}::-moz-placeholder{color:#a3a9ac;color:var(--subduedColor);font-weight:500}:-ms-input-placeholder{color:#a3a9ac;color:var(--subduedColor);font-weight:500}:-moz-placeholder{color:#a3a9ac;color:var(--subduedColor);font-weight:500}.modalContainer{position:absolute;top:0;left:0;width:100%;min-height:100%;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol;font-family:var(--fontFamily);font-size:14px;line-height:1.5;display:flex;flex-direction:column;align-items:center;z-index:99999}.modalContainer:before{content:\"\";display:block;position:fixed;inset:0;background-color:#fff;z-index:-1}.modalDialog{flex-grow:1;display:flex;flex-direction:column;width:100%}.modalContent{position:relative;padding:32px;padding:var(--basePadding);opacity:0;transform:translateY(10px) scale(1);background:#fff}[aria-hidden=false] .modalContent{animation:bouncyEntrance .2s cubic-bezier(.18,.89,.32,1.28);animation-fill-mode:forwards}@keyframes bouncyEntrance{0%{opacity:0;transform:translateY(10px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}@media(min-width:480px){.modalContainer:before{background-color:#0e1e25;background-color:var(--baseColor);animation:fadeIn .1s ease-in;animation-fill-mode:forwards}.modalDialog{max-width:364px;justify-content:center}.modalContent{background:#fff;box-shadow:0 4px 12px #00000012,0 12px 32px #0e1e251a;border-radius:8px;margin-top:32px;margin-top:var(--basePadding)}}@keyframes fadeIn{0%{opacity:0}to{opacity:.67}}.flashMessage{text-align:center;color:#0e1e25;color:var(--baseColor);font-weight:500;font-size:14px;background-color:#f2f3f3;padding:6px;border-radius:4px;opacity:.7;transition:opacity .2s linear}.flashMessage:hover,.flashMessage:focus{opacity:1}.error{color:#fa3946;color:var(--errorColor);background-color:#fceef0;opacity:1}.error span:before{content:\"\";display:inline-block;position:relative;top:3px;margin-right:4px;width:16px;height:16px;background:no-repeat center center;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjRkEzOTQ2IiBkPSJNOCwxLjMzMzMzMzMzIEMxMS42NzYsMS4zMzMzMzMzMyAxNC42NjY2NjY3LDQuMzI0IDE0LjY2NjY2NjcsOCBDMTQuNjY2NjY2NywxMS42NzYgMTEuNjc2LDE0LjY2NjY2NjcgOCwxNC42NjY2NjY3IEM0LjMyNCwxNC42NjY2NjY3IDEuMzMzMzMzMzMsMTEuNjc2IDEuMzMzMzMzMzMsOCBDMS4zMzMzMzMzMyw0LjMyNCA0LjMyNCwxLjMzMzMzMzMzIDgsMS4zMzMzMzMzMyBaIE04LDAgQzMuNTgyLDAgMCwzLjU4MiAwLDggQzAsMTIuNDE4IDMuNTgyLDE2IDgsMTYgQzEyLjQxOCwxNiAxNiwxMi40MTggMTYsOCBDMTYsMy41ODIgMTIuNDE4LDAgOCwwIFogTTcuMTI2NjY2NjcsNS4wMTczMzMzMyBDNy4wNjA2NjY2Nyw0LjQ3OTMzMzMzIDcuNDc4NjY2NjcsNCA4LjAyNTMzMzMzLDQgQzguNTM5MzMzMzMsNCA4Ljk0MzMzMzMzLDQuNDUwNjY2NjcgOC44Nzg2NjY2Nyw0Ljk2NzMzMzMzIEw4LjM3NCw5LjAwMjY2NjY3IEM4LjM1MDY2NjY3LDkuMTkxMzMzMzMgOC4xOSw5LjMzMzMzMzMzIDgsOS4zMzMzMzMzMyBDNy44MSw5LjMzMzMzMzMzIDcuNjQ5MzMzMzMsOS4xOTEzMzMzMyA3LjYyNTMzMzMzLDkuMDAyNjY2NjcgTDcuMTI2NjY2NjcsNS4wMTczMzMzMyBMNy4xMjY2NjY2Nyw1LjAxNzMzMzMzIFogTTgsMTIuMTY2NjY2NyBDNy41NCwxMi4xNjY2NjY3IDcuMTY2NjY2NjcsMTEuNzkzMzMzMyA3LjE2NjY2NjY3LDExLjMzMzMzMzMgQzcuMTY2NjY2NjcsMTAuODczMzMzMyA3LjU0LDEwLjUgOCwxMC41IEM4LjQ2LDEwLjUgOC44MzMzMzMzMywxMC44NzMzMzMzIDguODMzMzMzMzMsMTEuMzMzMzMzMyBDOC44MzMzMzMzMywxMS43OTMzMzMzIDguNDYsMTIuMTY2NjY2NyA4LDEyLjE2NjY2NjcgWiIvPgo8L3N2Zz4K)}.disabled{opacity:.38;pointer-events:none}.infoText{text-align:center;margin:32px 0}.infoTextEmail{font-size:16px;font-weight:500}.saving{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAMAAACeYYN3AAAAxlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DTx3aAAAAQnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEGgjKRfAAACk0lEQVR4AYXQDXP5WhAG8CUhiSQqSv4RRRMVL1Fa1VZf3PL9v9Tde9wc9M8+P8/M7s6czJiHgNIvVCJO6YiAMlAiWckASiQrm4bJMZTDrmbBIEC9qpgVjp6n4B+oyEwCzKrMQBVaQIlkpmXZln1dhQB+49gOh5dLexlV6MhsAqyazEQVugCqsOK5nsQmwPWZ53ucvyczSGb4l9T9OsdnLgFOXVZFFd4AqEKrIasR4AdBI2hw1GR6VzMwSWY2A60ZNDl6KnUC3KbMRhXeAqhCpyXzCAjarNVucdqXVEhWaRfCdsj5vQcE1EOZQ7Jy+EcUlklWi2Q3BLQ6nagTcTra2Y0qrHZirRN3OOezTUAjvq4bd7suqpDfSGJUoXcnCwiIerIqqlC96vf6HD1ZsUcE3PYH/QGnrx3uYnqoQn4l6aMK/XtZi4BuIrNIZqVJkiapkhx37Y6AcDgcpsNU44Nz3OuoQn4jSVGFNw+ykID+SGaTzM5G2YiTFVM73AMConE2zjhj7XAXs4EqHE/4d12GKgwmsoiAZCpzSObMptPZdHZVSkCc5/ksnym8cPRUmiQzpvNcmedzTl4o7qlBsuZc1iVg9ChDFdYWshEBveV/FssFZ/l7Z7eowsfl0/JJ4UXj43A/ogpbT7IeAZNnWQ1VuJJNCBi8HKxeVhw9tRaq8JkfrV/WHDULxb1CFbbX7HX9yllfck9A/ipzSea+yeYEJO+yEFX4tim8b94VXjj/zzdU4Z/NmY/NB+fkTglYfMg8knmfsiUBD1+yCFX4+X309f3FOds/UYVR8fH2e6vwovExIuB5K/NJ5v8jWxGQ/chiVOF2d+pn98M5zt3WJFm83+/2O4UXjprabkzAWn+o56k9qvBfX4hMaM+SxOMAAAAASUVORK5CYII=);background-repeat:repeat-x;background-size:contain;background-origin:border-box;background-position:0% 0%;animation:loading 20s linear infinite;pointer-events:none}.saving:after{content:\"\u2026\"}@keyframes loading{0%{background-position:0% 0%}to{background-position:700% 0%}}.btn{display:block;position:relative;width:100%;height:auto;margin:14px 0 0;padding:6px;outline:0;cursor:pointer;border:2px solid rgb(14,30,37);border:2px solid var(--baseColor);border-radius:4px;background-color:#2d3b41;color:#fff;transition:background-color .2s ease;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol;font-family:var(--fontFamily);font-size:14px;font-weight:500;line-height:24px;text-align:center;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.btn:hover,.btn:focus{background-color:#0e1e25;background-color:var(--baseColor);-webkit-text-decoration:none;text-decoration:none}.btnClose{position:absolute;top:-6px;right:-6px;margin:0;padding:0;border:0;width:44px;height:44px;border-radius:50%;background:#fff;color:#a3a9ac;color:var(--subduedColor);cursor:pointer}.btnClose:before{content:\"\xd7\";font-size:25px;line-height:9px}.btnClose:hover,.btnClose:focus{background:#e9ebeb;color:#0e1e25;color:var(--baseColor)}.header{display:flex;margin-top:-8px;margin-bottom:32px;margin-bottom:var(--basePadding)}.btnHeader{font-size:16px;line-height:24px;background:#fff;color:#a3a9ac;color:var(--subduedColor);border:0;border-bottom:2px solid #e9ebeb;border-radius:4px 4px 0 0;margin:0}.btnHeader:focus,.btnHeader.active{background:#fff;color:#0e1e25;color:var(--baseColor);border-color:#0e1e25;border-color:var(--baseColor);font-weight:700}.btnHeader:not(:only-child):hover{background-color:#e9ebeb;color:#0e1e25;color:var(--baseColor)}.btnHeader:only-child{cursor:auto}.btnLink{display:block;position:relative;width:auto;height:auto;margin:14px auto 0;padding:6px 6px 0;outline:0;cursor:pointer;color:#0e1e25;color:var(--baseColor);border:none;border-bottom:2px solid #e9ebeb;border-radius:0;background-color:inherit;transition:border-color .2s ease;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol;font-family:var(--fontFamily);font-size:14px;font-weight:500;line-height:24px;text-align:center;white-space:nowrap}.btnLink:hover,.btnLink:focus{background-color:inherit;border-color:#a3a9ac;border-color:var(--subduedColor)}.formGroup{position:relative;margin-top:14px}.formControl{box-sizing:border-box;display:block;width:100%;height:40px;margin:0;padding:6px 12px 6px 36px;border:2px solid #e9ebeb;border-radius:4px;background:#fff;color:#0e1e25;color:var(--baseColor);box-shadow:none;font-size:16px;font-weight:500;line-height:24px;transition:box-shadow ease-in-out .15s;-webkit-appearance:none;-moz-appearance:none}.inputFieldIcon{position:absolute;top:12px;left:12px;display:inline-block;width:16px;height:16px;background-repeat:no-repeat;background-position:center;pointer-events:none}.inputFieldName{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsNyBDNi4zNDMxNDU3NSw3IDUsNS42NTY4NTQyNSA1LDQgQzUsMi4zNDMxNDU3NSA2LjM0MzE0NTc1LDEgOCwxIEM5LjY1Njg1NDI1LDEgMTEsMi4zNDMxNDU3NSAxMSw0IEMxMSw1LjY1Njg1NDI1IDkuNjU2ODU0MjUsNyA4LDcgWiBNOCwxNSBMMS41LDE1IEMxLjUsMTEuMTM0MDA2OCA0LjQxMDE0OTEzLDggOCw4IEMxMS41ODk4NTA5LDggMTQuNSwxMS4xMzQwMDY4IDE0LjUsMTUgTDgsMTUgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTEpIi8+PC9zdmc+)}.inputFieldEmail{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE2IDExIj4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xLjE3MDczMTcxLDMgQzAuNTIyMTQ2MzQxLDMgMy45MDI0NTk4N2UtMDgsMy41NDUxMTA4MSAzLjkwMjQ1OTg3ZS0wOCw0LjIyMjIyMTU0IEwzLjkwMjQ1OTg3ZS0wOCwxMi43Nzc3Nzg1IEMzLjkwMjQ1OTg3ZS0wOCwxMy40NTQ4ODkyIDAuNTIyMTQ2MzQxLDE0IDEuMTcwNzMxNzEsMTQgTDE0LjgyOTI2ODMsMTQgQzE1LjQ3Nzg1MzcsMTQgMTYsMTMuNDU0ODg5MiAxNiwxMi43Nzc3Nzg1IEwxNiw0LjIyMjIyMTU0IEMxNiwzLjU0NTExMDgxIDE1LjQ3Nzg1MzcsMyAxNC44MjkyNjgzLDMgTDEuMTcwNzMxNzEsMyBaIE0yLjMzNzQyMTE5LDUuMDAxODY1NjYgQzIuNDU3NTExNzUsNC45ODk1NTIxNCAyLjU2MDcxNDU3LDUuMDM5MzM5OCAyLjYzNjM1OTg1LDUuMTE3Mjg0MzcgTDcuNDgyNjA2MTcsMTAuMTEzMjU0NSBDNy43ODQ0ODgyMiwxMC40MjQ3NDU1IDguMjAzMjc4MjksMTAuNDI0NzY2IDguNTA1ODk2MTksMTAuMTEzMjU0NSBMMTMuMzYzNjQwMiw1LjExNzI4NDM3IEMxMy41MDUxMjU1LDQuOTcxMjA0OTkgMTMuNzUyOTc3OSw0Ljk4MTg5NzIzIDEzLjg4MzkyMjIsNS4xMzk3MzYwMiBDMTQuMDE0ODY2NSw1LjI5NzU3NDgxIDE0LjAwNTI4MjEsNS41NzQwNzQ4OCAxMy44NjM3OTY3LDUuNzIwMTU0MjYgTDExLjExNTg2MDYsOC41NDg0MTE1MiBMMTMuODU4MDU3MSwxMS4yNjc2NDY5IEMxNC4wMjE3ODM1LDExLjQwMzE5ODIgMTQuMDQ4OTM2MywxMS43MDE0OTMyIDEzLjkxMjk4ODIsMTEuODcwOTg4OCBDMTMuNzc3MDQwMSwxMi4wNDA1MDQ5IDEzLjUwODI4OTcsMTIuMDQzNDE5MSAxMy4zNjkzOTgyLDExLjg3Njk0MDQgTDEwLjU3NTQ3MTUsOS4xMDYzOTg2MiBMOS4wMDYwNTI3NSwxMC43MTYxMjQ0IEM4LjQzNDk0MTk1LDExLjMwNDAzMzQgNy41NTMzMDI4NiwxMS4zMDUxNjIxIDYuOTgyNDY4LDEwLjcxNjEyNDQgTDUuNDI0NTI4NSw5LjEwNjM5ODYyIEwyLjYzMDYwMTgzLDExLjg3Njk0MDQgQzIuNDkxNzEwMzMsMTIuMDQzNDM5NyAyLjIyMjk1OTg4LDEyLjA0MDUyNTUgMi4wODcwMTE3OCwxMS44NzA5ODg4IEMxLjk1MTA2MzY3LDExLjcwMTQ5MzIgMS45NzgyMTY1LDExLjQwMzE5ODIgMi4xNDE5NDI5LDExLjI2NzY0NjkgTDQuODg0MTM5MzksOC41NDg0MTE1MiBMMi4xMzYyMDMyOCw1LjcyMDE1NDI2IEMyLjAyODcxNDE0LDUuNjE2MjI4MTYgMS45ODM1NTE0MSw1LjQzODk1NDUzIDIuMDI1OTkxNSw1LjI4NzQ5ODI1IEMyLjA2ODQxMzE5LDUuMTM2MDYyNDkgMi4xOTYwMjc4MSw1LjAxOTAyMjQ5IDIuMzM3NDIxMTksNS4wMDE4NjU2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zKSIvPjwvc3ZnPg==)}.inputFieldPassword{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDEyIDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0yLjQ0NTkxMDQ1LDMuNjQzMDg0MjcgQzIuNDQ1OTEwMzgsMi42NzY2MjEzNyAyLjgxODk3NTQ2LDEuNzQ5NzYzOTMgMy40ODI5OTUxOCwxLjA2NjUxMDUyIEM0LjE0NzAxNDksMC4zODMyNTcxMTEgNS4wNDc1NjY0MywtMC4wMDAzOTMwNDg2MTggNS45ODY0NDEwNSwzLjAyMTc0MDY5ZS0wNyBMNi4xMTc1MTg0NywzLjAyMTc0MDY5ZS0wNyBDOC4wNjkyOTIwNSwwLjAwMjQ1Mjc4Mzg0IDkuNjUwNzAwMTMsMS42MzA5OTI4MyA5LjY1MjI4NzQyLDMuNjQwMTE4NzkgTDkuNjUyMjg3NDIsNC42NzgwMzQ0NSBDOS4xMzk1MDEwNSw0LjcwMzI0MDk4IDguNjM2Nzk3NTYsNC43NDYyNDAzNCA4LjEzMTIxMzI1LDQuODAxMTAxNiBMOC4xMzEyMTMyNSwzLjY0MzA4NDI3IEM4LjEzMTIxMzI1LDIuNDk2NjM0MjkgNy4yMjgzNjE2LDEuNTY3MjUyOTUgNi4xMTQ2Mzc2NCwxLjU2NzI1Mjk1IEw1Ljk4MzU2MDIzLDEuNTY3MjUyOTUgQzQuODY5ODM2MjgsMS41NjcyNTI5NSAzLjk2Njk4NDYyLDIuNDk2NjM0MjkgMy45NjY5ODQ2MiwzLjY0MzA4NDI3IEwzLjk2Njk4NDYyLDMuOTYwMzg5OTEgQzMuOTY3NTc5ODgsNC4zNTY0OTE4MiAzLjY3NzAzNTY1LDQuNjg4ODc1OTUgMy4yOTQzMTI2Miw0LjcyOTkzMDI0IEwzLjI3ODQ2ODEsNC43Mjk5MzAyNCBDMy4wNjYyNDA5Miw0Ljc1MzUwMjk2IDIuODU0MjgyODcsNC42ODMxMDg3IDIuNjk1NDU2MTMsNC41MzYzMDM3NiBDMi41MzY2Mjk0LDQuMzg5NDk4ODIgMi40NDU5MDUzMyw0LjE4MDEyMTMzIDIuNDQ1OTEwNDUsMy45NjAzODk5MSBMMi40NDU5MTA0NSwzLjY0MzA4NDI3IFogTTExLjQxNjY2Niw3LjExNTY1MzUyIEwxMS40MTY2NjYsMTIuNjkwNzQzMyBDMTEuNDE3MDQwOCwxMy4wODMxMTQzIDExLjE0NTkyMDMsMTMuNDIwMTM3MSAxMC43NzEzNjE4LDEzLjQ5MjkwMzkgTDEwLjI5MDI2NDQsMTMuNTg2MzE2MyBDOC44NzYwNzU2NCwxMy44NjE1OTU5IDcuNDM5OTcxMzMsMTQuMDAwMDkzNyA2LjAwMDcyMDA1LDEzLjk5OTk5OTggQzQuNTYwOTg3NTgsMTQuMDAwMTg2MiAzLjEyNDM5Njg0LDEzLjg2MTY4OCAxLjcwOTczNTI0LDEzLjU4NjMxNjMgTDEuMjI4NjM3OTIsMTMuNDkyOTAzOSBDMC44NTQwNzk0MDcsMTMuNDIwMTM3MSAwLjU4Mjk1ODg2NywxMy4wODMxMTQzIDAuNTgzMzMzNzIyLDEyLjY5MDc0MzMgTDAuNTgzMzMzNzIyLDcuMTE1NjUzNTIgQzAuNTgyOTU4ODY3LDYuNzIzMjgyNTYgMC44NTQwNzk0MDcsNi4zODYyNTk4MSAxLjIyODYzNzkyLDYuMzEzNDkyOTkgTDEuMjk5MjE4MDYsNi4zMDAxNDgzNiBDNC40MDU5OTg0Nyw1LjY5NTEyMTY3IDcuNTk1NDQxNjIsNS42OTUxMjE2NyAxMC43MDIyMjIsNi4zMDAxNDgzNiBMMTAuNzcyODAyMiw2LjMxMzQ5Mjk5IEMxMS4xNDY3ODgsNi4zODY4ODY0NSAxMS40MTcxNzE2LDYuNzIzNzQ1MTYgMTEuNDE2NjY2LDcuMTE1NjUzNTIgWiIvPjwvc3ZnPg==)}.btnPasswordToggle{position:absolute;top:8px;right:8px;width:24px;height:24px;padding:0;border:0;background:transparent;cursor:pointer;background-repeat:no-repeat;background-position:center;background-size:16px 16px;opacity:.5;transition:opacity .15s ease;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230e1e25' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E\")}.btnPasswordToggle:hover,.btnPasswordToggle:focus{opacity:1}.btnPasswordToggle.passwordVisible{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230e1e25' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'/%3E%3Cline x1='1' y1='1' x2='23' y2='23'/%3E%3C/svg%3E\")}.inputFieldUrl{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4gIDxwYXRoIGZpbGw9IiNBM0E5QUMiIGQ9Ik0xMCw1IEMxMCwzLjg5NTQzMDUgOS4xMDQ1Njk1LDMgOCwzIEM2Ljg5NTQzMDUsMyA2LDMuODk1NDMwNSA2LDUgTTQsMTAgTDQsMTEgTDYsMTEgTDYsMTAgQzYsOS40NDc3MTUyNSA1LjU1MjI4NDc1LDkgNSw5IEM0LjQ0NzcxNTI1LDkgNCw5LjQ0NzcxNTI1IDQsMTAgWiBNMTIsMTAgQzEyLDkuNDQ3NzE1MjUgMTEuNTUyMjg0Nyw5IDExLDkgQzEwLjQ0NzcxNTMsOSAxMCw5LjQ0NzcxNTI1IDEwLDEwIEwxMCwxMSBMMTIsMTEgTDEyLDEwIFogTTYsNiBMNiw1IEw0LDUgTDQsNiBDNCw2LjU1MjI4NDc1IDQuNDQ3NzE1MjUsNyA1LDcgQzUuNTUyMjg0NzUsNyA2LDYuNTUyMjg0NzUgNiw2IFogTTEwLDYgQzEwLDYuNTUyMjg0NzUgMTAuNDQ3NzE1Myw3IDExLDcgQzExLjU1MjI4NDcsNyAxMiw2LjU1MjI4NDc1IDEyLDYgTDEyLDUgTDEwLDUgTDEwLDYgWiBNNCw1IEM0LDIuNzkwODYxIDUuNzkwODYxLDEgOCwxIEMxMC4yMDkxMzksMSAxMiwyLjc5MDg2MSAxMiw1IEw0LDUgWiBNNCwxMSBMMTIsMTEgQzEyLDEzLjIwOTEzOSAxMC4yMDkxMzksMTUgOCwxNSBDNS43OTA4NjEsMTUgNCwxMy4yMDkxMzkgNCwxMSBaIE0xMCwxMSBMNiwxMSBDNiwxMi4xMDQ1Njk1IDYuODk1NDMwNSwxMyA4LDEzIEM5LjEwNDU2OTUsMTMgMTAsMTIuMTA0NTY5NSAxMCwxMSBaIE04LDExIEM3LjQ0NzcxNTI1LDExIDcsMTAuNTUyMjg0NyA3LDEwIEw3LDYgQzcsNS40NDc3MTUyNSA3LjQ0NzcxNTI1LDUgOCw1IEM4LjU1MjI4NDc1LDUgOSw1LjQ0NzcxNTI1IDksNiBMOSwxMCBDOSwxMC41NTIyODQ3IDguNTUyMjg0NzUsMTEgOCwxMSBaIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA4LjcwNyA2LjI5MykiLz48L3N2Zz4=)}.hr{border:0;border-top:2px solid #e9ebeb;margin:32px 0 -1px;margin:var(--basePadding) 0 -1px;text-align:center;overflow:visible}.hr:before{content:attr(data-text);position:relative;display:inline-block;font-size:12px;font-weight:800;line-height:1;text-transform:uppercase;background-color:#fff;color:#0e1e25;color:var(--baseColor);padding:4px;top:-11px}.btnProvider{padding-left:40px;padding-right:40px}.btnProvider:before{content:\"\";position:absolute;display:inline-block;vertical-align:middle;width:32px;height:40px;background-repeat:no-repeat;background-position:left center;top:-2px;left:14px}.providerGoogle{background-color:#4285f4;background-color:var(--providerColorGoogle);border-color:#366dc7;border-color:var(--providerAltColorGoogle)}.providerGoogle:hover,.providerGoogle:focus{background-color:#366dc7;background-color:var(--providerAltColorGoogle)}.providerGitHub{background-color:#333;background-color:var(--providerColorGitHub);border-color:#000;border-color:var(--providerAltColorGitHub)}.providerGitHub:hover,.providerGitHub:focus{background-color:#000;background-color:var(--providerAltColorGitHub)}.providerGitLab{background-color:#e24329;background-color:var(--providerColorGitLab);border-color:#b03320;border-color:var(--providerAltColorGitLab)}.providerGitLab:hover,.providerGitLab:focus{background-color:#b03320;background-color:var(--providerAltColorGitLab)}.providerBitbucket{background-color:#205081;background-color:var(--providerColorBitbucket);border-color:#14314f;border-color:var(--providerAltColorBitbucket)}.providerBitbucket:hover,.providerBitbucket:focus{background-color:#14314f;background-color:var(--providerAltColorBitbucket)}.providerFacebook{background-color:#1877f2;background-color:var(--providerColorFacebook);border-color:#166fe5;border-color:var(--providerAltColorFacebook)}.providerFacebook:hover,.providerFacebook:focus{background-color:#166fe5;background-color:var(--providerAltColorFacebook)}.providerGoogle:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNDg4IC0yKSI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wLjY1MjczNDM3NSwzLjI5NTI4MjQ0IEMwLjIzNzk4NDM3NSw0LjEwNTgzMjA2IDIuODQyMTcwOTRlLTE0LDUuMDE2MDQ1OCAyLjg0MjE3MDk0ZS0xNCw1Ljk3OTM4OTMxIEMyLjg0MjE3MDk0ZS0xNCw2Ljk0MjczMjgyIDAuMjM3OTg0Mzc1LDcuODUyOTAwNzYgMC42NTI3MzQzNzUsOC42NjM0NTAzOCBDMS42NTkwNDY4NywxMC42MTY3MDIzIDMuNzI2MDkzNzUsMTEuOTU4Nzc4NiA2LjExOTUzMTI1LDExLjk1ODc3ODYgQzcuNzcxNzgxMjUsMTEuOTU4Nzc4NiA5LjE1ODg1OTM3LDExLjQyNzI1MTkgMTAuMTcyMDE1NiwxMC41MTA0NDI3IEMxMS4zMjc5MDYyLDkuNDY3MzU4NzggMTEuOTk0MjgxMiw3LjkzMjY0MTIyIDExLjk5NDI4MTIsNi4xMTIyNTk1NCBDMTEuOTk0MjgxMiw1LjYyMDYyNTk1IDExLjk1MzQ1MzEsNS4yNjE4NjI2IDExLjg2NTA5MzcsNC44ODk4MTY3OSBMNi4xMTk1MzEyNSw0Ljg4OTgxNjc5IEw2LjExOTUzMTI1LDcuMTA4ODA5MTYgTDkuNDkyMDQ2ODcsNy4xMDg4MDkxNiBDOS40MjQwNzgxMiw3LjY2MDI1OTU0IDkuMDU2OTA2MjUsOC40OTA3MzI4MiA4LjI0MDk1MzEyLDkuMDQ4Nzc4NjMgQzcuNzI0MjAzMTIsOS40MDA5MDA3NiA3LjAzMDY0MDYyLDkuNjQ2NzE3NTYgNi4xMTk1MzEyNSw5LjY0NjcxNzU2IEM0LjUwMTI2NTYyLDkuNjQ2NzE3NTYgMy4xMjc3ODEyNSw4LjYwMzY3OTM5IDIuNjM4MTcxODcsNy4xNjE5ODQ3MyBMMi42Mjg3MTIwNSw3LjE2Mjc2OTU5IEMyLjUwNTM0MTU4LDYuNzk3Mjk0NjggMi40MzQyMTg3NSw2LjM4MTEyMjg1IDIuNDM0MjE4NzUsNS45NzkzODkzMSBDMi40MzQyMTg3NSw1LjU2NzQ1MDM4IDIuNTA4OTg0MzgsNS4xNjg4Mzk2OSAyLjYzMTM3NSw0Ljc5Njc5Mzg5IEMzLjEyNzc4MTI1LDMuMzU1MDk5MjQgNC41MDEyNjU2MiwyLjMxMjAxNTI3IDYuMTE5NTMxMjUsMi4zMTIwMTUyNyBDNy4yNjg2MjUsMi4zMTIwMTUyNyA4LjA0Mzc1LDIuNzk3MDA3NjMgOC40ODU3MzQzNywzLjIwMjMwNTM0IEwxMC4yMTI3OTY5LDEuNTU0NjQxMjIgQzkuMTUyMTA5MzcsMC41OTEyOTc3MSA3Ljc3MTc4MTI1LDguODgxNzg0MmUtMTYgNi4xMTk1MzEyNSw4Ljg4MTc4NDJlLTE2IEMzLjcyNjA5Mzc1LDguODgxNzg0MmUtMTYgMS42NTkwNDY4NywxLjM0MjAzMDUzIDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgTDAuNjUyNzM0Mzc1LDMuMjk1MjgyNDQgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIvPiAgPC9nPjwvc3ZnPg==)}.providerGitHub:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik04LjAwMDA2NjI1LDAgQzMuNTgyMzMwNzksMCAwLDMuNjcyMzE1ODUgMCw4LjIwMjUzNzczIEMwLDExLjgyNjYzMzggMi4yOTIyNjI0OCwxNC45MDEyOTUgNS40NzA5MzM1NiwxNS45ODU5MDIzIEM1Ljg3MDc1MTM5LDE2LjA2MTgzMTUgNi4wMTc1MzY3NSwxNS44MDc5NjQyIDYuMDE3NTM2NzUsMTUuNTkxMzE0NCBDNi4wMTc1MzY3NSwxNS4zOTU3MTgzIDYuMDEwMTE3OTksMTQuNzQ5NTcyMiA2LjAwNjY3MzU2LDE0LjA2NDE3MTEgQzMuNzgxMDQ3NDEsMTQuNTYwMzYwMiAzLjMxMTQxMzc5LDEzLjA5NjM3ODEgMy4zMTE0MTM3OSwxMy4wOTYzNzgxIEMyLjk0NzQ5NzQsMTIuMTQ4MjgwNiAyLjQyMzE1MDUsMTEuODk2MTc5IDIuNDIzMTUwNSwxMS44OTYxNzkgQzEuNjk3MzA0OTEsMTEuMzg3MDg2IDIuNDc3ODYzNzksMTEuMzk3NTQ0OSAyLjQ3Nzg2Mzc5LDExLjM5NzU0NDkgQzMuMjgxMjA4ODcsMTEuNDU1NDA4NyAzLjcwNDIxMDMxLDEyLjI0MjgxODcgMy43MDQyMTAzMSwxMi4yNDI4MTg3IEM0LjQxNzczNTQ3LDEzLjQ5NjgwNjcgNS41NzU3MjM0NiwxMy4xMzQyNzQ4IDYuMDMyMjQxNzgsMTIuOTI0Njg4MiBDNi4xMDQwNDQ3MiwxMi4zOTQ1NDE0IDYuMzExMzcyNDQsMTIuMDMyNjg4NyA2LjU0MDE2MTQ0LDExLjgyNzg1NjIgQzQuNzYzMjM3NDQsMTEuNjIwNDQyOCAyLjg5NTMwMTE5LDEwLjkxNzExMjEgMi44OTUzMDExOSw3Ljc3NDEyNzk5IEMyLjg5NTMwMTE5LDYuODc4NTk2ODggMy4yMDc4MTYxOCw2LjE0Njg3NzU3IDMuNzE5NTc3NzMsNS41NzI0NDk5OSBDMy42MzY1MTQxNyw1LjM2NTg1MTY2IDMuMzYyNjgyNjgsNC41MzE1ODAxNyAzLjc5NzA3NzIxLDMuNDAxNzQxMzMgQzMuNzk3MDc3MjEsMy40MDE3NDEzMyA0LjQ2ODg3MTg4LDMuMTgxMjg4MjcgNS45OTc2NjUwNyw0LjI0MjUzMjY3IEM2LjYzNTgxMDQ0LDQuMDYwNzkxMzQgNy4zMjAxOTA0NCwzLjk2OTY0OTAyIDguMDAwMDY2MjUsMy45NjY1MjQ5MiBDOC42Nzk5NDIwNiwzLjk2OTY0OTAyIDkuMzY0ODUyLDQuMDYwNzkxMzQgMTAuMDA0MTg5Niw0LjI0MjUzMjY3IEMxMS41MzExMjgxLDMuMTgxMjg4MjcgMTIuMjAxOTk1NCwzLjQwMTc0MTMzIDEyLjIwMTk5NTQsMy40MDE3NDEzMyBDMTIuNjM3NDQ5OCw0LjUzMTU4MDE3IDEyLjM2MzQ4NTgsNS4zNjU4NTE2NiAxMi4yODA0MjIzLDUuNTcyNDQ5OTkgQzEyLjc5MzM3NjEsNi4xNDY4Nzc1NyAxMy4xMDM3NzE0LDYuODc4NTk2ODggMTMuMTAzNzcxNCw3Ljc3NDEyNzk5IEMxMy4xMDM3NzE0LDEwLjkyNDU4MjggMTEuMjMyMjU4MywxMS42MTgyNjk2IDkuNDUwODMwMDYsMTEuODIxMzM2MyBDOS43Mzc3NzY4NywxMi4wNzU4ODI5IDkuOTkzNDU4ODcsMTIuNTc1MDYwMiA5Ljk5MzQ1ODg3LDEzLjM0MDMyOTggQzkuOTkzNDU4ODcsMTQuNDM3ODQxMSA5Ljk4NDE4NTUsMTUuMzIxMTQ3MyA5Ljk4NDE4NTUsMTUuNTkxMzE0NCBDOS45ODQxODU1LDE1LjgwOTU5NDIgMTAuMTI4MTg4NywxNi4wNjUzNjMxIDEwLjUzMzcwMzEsMTUuOTg0ODE1NiBDMTMuNzEwNjUyLDE0Ljg5ODk4NTggMTYsMTEuODI1NDExMyAxNiw4LjIwMjUzNzczIEMxNiwzLjY3MjMxNTg1IDEyLjQxODE5OTIsMCA4LjAwMDA2NjI1LDAgWiBNMi45OTYyODQ5NiwxMS42ODQ2ODgyIEMyLjk3ODY2NTQxLDExLjcyNTQzNzMgMi45MTYxMzU5MSwxMS43Mzc2NjIxIDIuODU5MTcwNDgsMTEuNzA5NjgxIEMyLjgwMTE0NTIyLDExLjY4MjkyMjMgMi43Njg1NTU3MSwxMS42MjczNjc2IDIuNzg3MzY3NTUsMTEuNTg2NDgyNyBDMi44MDQ1ODk2NSwxMS41NDQ1MTEgMi44NjcyNTE2MiwxMS41MzI4Mjk1IDIuOTI1MTQ0MzksMTEuNTYwOTQ2NSBDMi45ODMzMDIxNCwxMS41ODc3MDUxIDMuMDE2NDIxNTcsMTEuNjQzODAzMSAyLjk5NjI4NDk2LDExLjY4NDY4ODIgWiBNMy4zODk3OTkzMiwxMi4wNDQ3MDI0IEMzLjM1MTY0NTc0LDEyLjA4MDk2OTEgMy4yNzcwNjA3NywxMi4wNjQxMjYxIDMuMjI2NDU0MjYsMTIuMDA2ODA1NyBDMy4xNzQxMjU1NSwxMS45NDk2MjEgMy4xNjQzMjIyMSwxMS44NzMxNDg0IDMuMjAzMDA1NywxMS44MzYzMzgyIEMzLjI0MjM1MTU5LDExLjgwMDA3MTUgMy4zMTQ2ODQ0NSwxMS44MTcwNTAzIDMuMzY3MTQ1NjQsMTEuODc0MjM1IEMzLjQxOTQ3NDMyLDExLjkzMjA5ODggMy40Mjk2NzUxMiwxMi4wMDgwMjgxIDMuMzg5Nzk5MzIsMTIuMDQ0NzAyNCBaIE0zLjY1OTc2NTA4LDEyLjUwNTMyODMgQzMuNjEwNzQ4MzMsMTIuNTQwMjM2OCAzLjUzMDU5OTI5LDEyLjUwNzUwMTUgMy40ODEwNTI2MSwxMi40MzQ1NjA2IEMzLjQzMjAzNTgzLDEyLjM2MTYxOTUgMy40MzIwMzU4MywxMi4yNzQxNDQ2IDMuNDgyMTEyNDQsMTIuMjM5MTAwMyBDMy41MzE3OTE1NywxMi4yMDQwNTYgMy42MTA3NDgzMywxMi4yMzU1Njg4IDMuNjYwOTU3MzgsMTIuMzA3OTY2NSBDMy43MDk4NDE2OCwxMi4zODIxMjk5IDMuNzA5ODQxNjgsMTIuNDY5NjA0OCAzLjY1OTc2NTA4LDEyLjUwNTMyODMgWiBNNC4xMTYzMzQ5NSwxMy4wMzg3OTgxIEM0LjA3MjQ4NDgyLDEzLjA4ODM3NjQgMy45NzkwODgwMiwxMy4wNzUwNjUgMy45MTA3Mjk0OCwxMy4wMDc0MjE0IEMzLjg0MDc4MTI0LDEyLjk0MTI3MTggMy44MjEzMDcwMSwxMi44NDc0MTI5IDMuODY1Mjg5NjMsMTIuNzk3ODM0NyBDMy45MDk2Njk2NiwxMi43NDgxMjA3IDQuMDAzNTk2MzksMTIuNzYyMTExMyA0LjA3MjQ4NDgyLDEyLjgyOTIxMTYgQzQuMTQxOTAzMTYsMTIuODk1MjI1MyA0LjE2MzA5OTYsMTIuOTg5NzYzNCA0LjExNjMzNDk1LDEzLjAzODc5ODEgWiBNNC43MDY0MDcxOSwxMy4yMTg4OTE2IEM0LjY4NzA2NTQ2LDEzLjI4MzEzOTUgNC41OTcxMTMwNiwxMy4zMTIzNDMgNC41MDY0OTgyNywxMy4yODUwNDExIEM0LjQxNjAxNTk3LDEzLjI1NjkyNDIgNC4zNTY3OTg0MiwxMy4xODE2NzQxIDQuMzc1MDgwMzYsMTMuMTE2NzQ3IEM0LjM5Mzg5MjE5LDEzLjA1MjA5MTcgNC40ODQyNDIwMSwxMy4wMjE2NjU2IDQuNTc1NTE5MTgsMTMuMDUwODY5MiBDNC42NjU4NjkwMSwxMy4wNzg4NTAzIDQuNzI1MjE5MDUsMTMuMTUzNTU3MSA0LjcwNjQwNzE5LDEzLjIxODg5MTYgWiBNNS4zNzc5MzQxOSwxMy4yOTUyODI1IEM1LjM4MDE4NjI5LDEzLjM2MjkyNjEgNS4zMDMzNDkxOSwxMy40MTkwMjQxIDUuMjA4MjMwMTgsMTMuNDIwMjQ2NyBDNS4xMTI1ODEyNSwxMy40MjI0MiA1LjAzNTIxNDI1LDEzLjM2NzY4MDMgNS4wMzQxNTQ0MiwxMy4zMDExMjMyIEM1LjAzNDE1NDQyLDEzLjIzMjgwMDUgNS4xMDkyNjkzLDEzLjE3NzI0NTggNS4yMDQ5MTgyMywxMy4xNzU2MTU4IEM1LjMwMDAzNzI2LDEzLjE3MzcxNDIgNS4zNzc5MzQxOSwxMy4yMjgwNDY0IDUuMzc3OTM0MTksMTMuMjk1MjgyNSBaIE02LjAzNzYzNDE5LDEzLjI2OTM1NDggQzYuMDQ5MDI3MjksMTMuMzM1MzY4NSA1Ljk4MjkyMDg4LDEzLjQwMzE0NzkgNS44ODg0NjQyNSwxMy40MjEyMTM0IEM1Ljc5NTU5NzM2LDEzLjQzODU5OTcgNS43MDk2MTkyOSwxMy4zOTc4NTA1IDUuNjk3ODI4NzcsMTMuMzMyMzgwMiBDNS42ODYzMDMyMiwxMy4yNjQ3MzY1IDUuNzUzNjAxOTEsMTMuMTk2OTU3MSA1Ljg0NjMzNjMzLDEzLjE3OTQzNSBDNS45NDA5MjU0NCwxMy4xNjI1OTIgNi4wMjU1Nzg3MiwxMy4yMDIyNTQ1IDYuMDM3NjM0MTksMTMuMjY5MzU0OCBaIi8+ICA8L2c+PC9zdmc+)}.providerGitLab:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBMNC40MjgwOTMzMyw0Ljk5NzI4MjU0IEw5LjU4MDA5MzM2LDQuOTk3MjgyNTQgTDcuMDA0MDkzMzYsMTIuOTQ5MjQzMyBaIE03LjAwNDA5MzM2LDEyLjk0OTIzIEwwLjgxNzg5MzMzMyw0Ljk5NzI2OTE3IEw0LjQyODA5MzMzLDQuOTk3MjY5MTcgTDcuMDA0MDkzMzYsMTIuOTQ5MjMgWiBNMC44MTc4OTk5OTksNC45OTcyODkyMyBMNy4wMDQwOTk5OCwxMi45NDkyNSBMMC4yMjg4MzMzMzMsOC4wMTE4ODA4IEMwLjA0MTksNy44NzU2NzE1MiAtMC4wMzYzLDcuNjM0MjEyNyAwLjAzNTEsNy40MTM4MTcxMiBMMC44MTc4OTk5OTksNC45OTcyODkyMyBaIE0wLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIEwyLjM2OTM2NjY3LDAuMjA3OTA0NzE0IEMyLjQ0OTE2NjY3LC0wLjAzODUwMjM1ODggMi43OTY3NjY2NywtMC4wMzg1NjkyMjY1IDIuODc2NTY2NjcsMC4yMDc5MDQ3MTQgTDQuNDI4MSw0Ljk5NzI5NTkxIEwwLjgxNzg5OTk5OSw0Ljk5NzI5NTkxIFogTTcuMDA0MDkzMzYsMTIuOTQ5MjMgTDkuNTgwMDkzMzYsNC45OTcyNjkxNyBMMTMuMTkwMjkzMyw0Ljk5NzI2OTE3IEw3LjAwNDA5MzM2LDEyLjk0OTIzIFogTTEzLjE5MDI5MzMsNC45OTcyODkyMyBMMTMuOTczMDkzMyw3LjQxMzgxNzEyIEMxNC4wNDQ0OTMzLDcuNjM0MjEyNyAxMy45NjYyOTM0LDcuODc1NjcxNTIgMTMuNzc5MzYsOC4wMTE4ODA4IEw3LjAwNDA5MzM2LDEyLjk0OTI1IEwxMy4xOTAyOTMzLDQuOTk3Mjg5MjMgWiBNMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIEw5LjU4MDA5MzM2LDQuOTk3Mjk1OTEgTDExLjEzMTYyNjcsMC4yMDc5MDQ3MTQgQzExLjIxMTQyNjcsLTAuMDM4NTY5MjI2NSAxMS41NTkwMjY3LC0wLjAzODUwMjM1ODggMTEuNjM4ODI2NywwLjIwNzkwNDcxNCBMMTMuMTkwMjkzMyw0Ljk5NzI5NTkxIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMikiLz4gIDwvZz48L3N2Zz4=)}.providerBitbucket:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICAgIDxwYXRoIGQ9Ik03LDIuNDk4OTQxODdlLTA3IEw3LDIuNDk4OTQxODdlLTA3IEMzLjE1NzIxMjI5LDIuNDk4OTQxODdlLTA3IDAuMDAwNjM2NTM1NDM1LDEuMDIwODQ0MjQgMC4wMDA2MzY1MzU0MzUsMi4zMTM5MTM1OSBDMC4wMDA2MzY1MzU0MzUsMi42NTQxOTUxMyAwLjgyNDA5MTAyMyw3LjQ4NjE5MiAxLjE2NzE5NzE3LDkuMzkxNzY3NTkgQzEuMzA0NDM5MzcsMTAuMjc2NDk5OSAzLjU2ODkzOTUzLDExLjUwMTUxMyA3LDExLjUwMTUxMyBMNywxMS41MDE1MTMgQzEwLjQzMTA2MDIsMTEuNTAxNTEzIDEyLjYyNjkzODYsMTAuMjc2NDk5OSAxMi44MzI4MDMyLDkuMzkxNzY3NTkgQzEzLjE3NTkwODYsNy40ODYxOTIgMTMuOTk5MzYzMiwyLjY1NDE5NTEzIDEzLjk5OTM2MzIsMi4zMTM5MTM1OSBDMTMuOTMwNzQyMSwxLjAyMDg0NDI0IDEwLjg0Mjc4NzQsMi40OTg5NDE4N2UtMDcgNywyLjQ5ODk0MTg3ZS0wNyBMNywyLjQ5ODk0MTg3ZS0wNyBaIE03LDkuOTM2MjE4MzEgQzUuNzY0ODE4MjgsOS45MzYyMTgzMSA0LjgwNDEyMTI2LDguOTgzNDI5ODYgNC44MDQxMjEyNiw3Ljc1ODQxNjcxIEM0LjgwNDEyMTI2LDYuNTMzNDAzNTUgNS43NjQ4MTgyOCw1LjU4MDYxNTk3IDcsNS41ODA2MTU5NyBDOC4yMzUxODExMiw1LjU4MDYxNTk3IDkuMTk1ODc4NCw2LjUzMzQwMzU1IDkuMTk1ODc4NCw3Ljc1ODQxNjcxIEM5LjE5NTg3ODQsOC45MTUzNzM3MiA4LjIzNTE4MTEyLDkuOTM2MjE4MzEgNyw5LjkzNjIxODMxIEw3LDkuOTM2MjE4MzEgWiBNNywyLjk5NDQ3NjY3IEM0LjUyOTYzNjIyLDIuOTk0NDc2NjcgMi41Mzk2MjExLDIuNTg2MTM4OTUgMi41Mzk2MjExLDIuMDQxNjg4ODYgQzIuNTM5NjIxMSwxLjQ5NzIzODE1IDQuNTI5NjM2MjIsMS4wODg5MDA0MyA3LDEuMDg4OTAwNDMgQzkuNDcwMzYyODQsMS4wODg5MDA0MyAxMS40NjAzNzg2LDEuNDk3MjM4MTUgMTEuNDYwMzc4NiwyLjA0MTY4ODg2IEMxMS40NjAzNzg2LDIuNTg2MTM4OTUgOS40NzAzNjI4NCwyLjk5NDQ3NjY3IDcsMi45OTQ0NzY2NyBMNywyLjk5NDQ3NjY3IFoiLz4gICAgICA8cGF0aCBkPSJNMTIuMDY0NTA5NiwxMS4yMjkyODc2IEMxMS45MjcyNjY3LDExLjIyOTI4NzYgMTEuODU4NjQ1NywxMS4yOTczNDM4IDExLjg1ODY0NTcsMTEuMjk3MzQzOCBDMTEuODU4NjQ1NywxMS4yOTczNDM4IDEwLjE0MzExNTYsMTIuNjU4NDcgNy4wNTUxNjA5MywxMi42NTg0NyBDMy45NjcyMDY4NywxMi42NTg0NyAyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4yNTE2NzYxNiwxMS4yOTczNDM4IEMyLjI1MTY3NjE2LDExLjI5NzM0MzggMi4xMTQ0MzM5NSwxMS4yMjkyODc2IDIuMDQ1ODEyODUsMTEuMjI5Mjg3NiBDMS45MDg1NzAwMiwxMS4yMjkyODc2IDEuNzcxMzI3ODEsMTEuMjk3MzQzOCAxLjc3MTMyNzgxLDExLjUwMTUxMyBMMS43NzEzMjc4MSwxMS41Njk1NjkyIEMyLjA0NTgxMjg1LDEyLjk5ODc1MTYgMi4yNTE2NzYxNiwxNC4wMTk1OTU2IDIuMjUxNjc2MTYsMTQuMTU1NzA3OSBDMi40NTc1NDAwOSwxNS4xNzY1NTI1IDQuNTE2MTc2MzIsMTUuOTkzMjI4IDYuOTg2NTM5ODIsMTUuOTkzMjI4IEw2Ljk4NjUzOTgyLDE1Ljk5MzIyOCBDOS40NTY5MDMzMSwxNS45OTMyMjggMTEuNTE1NTM5NSwxNS4xNzY1NTI1IDExLjcyMTQwMzUsMTQuMTU1NzA3OSBDMTEuNzIxNDAzNSwxNC4wMTk1OTU2IDExLjkyNzI2NjcsMTIuOTk4NzUxNiAxMi4yMDE3NTE4LDExLjU2OTU2OTIgTDEyLjIwMTc1MTgsMTEuNTAxNTEzIEMxMi4yNzAzNzI5LDExLjM2NTQgMTIuMjAxNzUxOCwxMS4yMjkyODc2IDEyLjA2NDUwOTYsMTEuMjI5Mjg3NiBMMTIuMDY0NTA5NiwxMS4yMjkyODc2IFoiLz4gICAgICA8ZWxsaXBzZSBjeD0iNyIgY3k9IjcuNjkiIHJ4PSIxLjA5OCIgcnk9IjEuMDg5Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=)}.providerFacebook:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE2IDE2Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSkiPiAgICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiLz4gICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTguNjk1IDE2SDUuNjA5VjkuMDM0SDMuODg5VjYuNDA5aDEuNzJWNC45MDNDNS42MDkgMi45NDMgNi4zODUgMSA4Ljg1MSAxaDIuMTg2djIuNjEzaC0xLjI1MWMtMS4wMjMgMC0xLjA5LjM4Mi0xLjA5IDEuMDk0TDguNjkyIDYuNDA5aDIuMzYybC0uMjc5IDIuNjI1SDguNTI3VjE2aC4xNjh6Ii8+ICA8L2c+PC9zdmc+)}.callOut{display:block;padding:32px;padding:var(--basePadding);font-size:14px;font-weight:500;-webkit-text-decoration:none;text-decoration:none;color:#a3a9ac;color:var(--subduedColor);text-align:center}.callOut:after{content:\" \u2665\";transition:color 4s ease}.callOut:hover:after{color:red}.callOut .netlifyLogo{display:block;margin:auto auto 8px;width:32px;height:32px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTguMzEsLjdsMTIuOTksMTIuOTksLjQ4LC40OCwuMjIsLjUzdjIuNThsLS4yMiwuNTMtLjQ4LC40OC0xMi45OSwxMi45OS0uNDgsLjQ4LS41MywuMjJoLTIuNThsLS41My0uMjItLjQ4LS40OEwuNywxOC4zMWwtLjQ4LS40OC0uMjItLjUzdi0yLjU4bC4yMi0uNTMsLjQ4LS40OEwxMy42OSwuN2wuNDgtLjQ4TDE0LjcxLDBoMi41OGwuNTMsLjIyLC40OCwuNDhabS0zLjQ2LDIyLjA2djYuMjRsLjE3LC4xN2gxLjk5bC4xNy0uMTd2LTYuMjRsLS4xNy0uMTdoLTEuOTlsLS4xNywuMTdabTAtMTMuNTNWM2wuMTctLjE3aDEuOTlsLjE3LC4xN3Y2LjI0bC0uMTcsLjE3aC0xLjk5bC0uMTctLjE3Wm0tNS41MiwxNS4xNGguMjdsMS44Mi0xLjgydi0xLjQ0bC0uMTktLjE5aC0xLjQ0cy0xLjgyLDEuODItMS44MiwxLjgydi4yN2wxLjM2LDEuMzZabS0xLjM2LTE1LjA1di0uMjdsMS4zNi0xLjM3aC4yN2wxLjgyLDEuODJ2MS40NGwtLjE5LC4xOWgtMS40NGwtMS44Mi0xLjgyWm0xLjUyLDUuNTFIMi40NmwtLjE3LC4xN3YxLjk5bC4xNywuMTdoNy4wMmwuMTctLjE3di0xLjk5bC0uMTctLjE3Wm0xMC4yMyw1LjNoLTEuOThsLS4xNy0uMTd2LTQuNjVjMC0uODMtLjMyLTEuNDctMS4zMi0xLjQ5LS41MS0uMDEtMS4xLDAtMS43MywuMDNsLS4wOSwuMXY2LjAxcy0uMTYsLjE3LS4xNiwuMTdoLTEuOThsLS4xNy0uMTd2LTcuOTRsLjE3LS4xN2g0LjQ3YzEuNzQsMCwzLjE0LDEuNDEsMy4xNCwzLjE0djQuOTZsLS4xNywuMTdabTIuOC0yLjk3aDcuMDJsLjE3LS4xN3YtMS45OWwtLjE3LS4xN2gtNy4wMmwtLjE3LC4xN3YxLjk5bC4xNywuMTdaIiBmaWxsPSIjYTNhOWFjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.visuallyHidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.subheader{margin-top:2em;border-top:1px solid rgb(14,30,37)}.subheader h3{padding-top:1em;text-align:center}", bm = {};
    function jm(e, ...t) {
        const n = bm[e] || new Set;
        Array.from(n.values()).forEach((e)=>{
            e(...t);
        });
    }
    const Dm = {
        login: !0,
        signup: !0,
        error: !0
    }, zm = {
        on: (e, t)=>{
            bm[e] = bm[e] || new Set, bm[e].add(t);
        },
        off: (e, t)=>{
            bm[e] && (t ? bm[e].delete(t) : bm[e].clear());
        },
        open: (e, t)=>{
            if (!Dm[e = e || "login"]) throw new Error(`Invalid action for open: ${e}`);
            vm.signupMetadata = t && Object.keys(t).length > 0 ? t : null, vm.openModal(vm.user ? "user" : e);
        },
        close: ()=>{
            vm.closeModal();
        },
        currentUser: ()=>vm.gotrue && vm.gotrue.currentUser(),
        logout: ()=>vm.logout(),
        get gotrue () {
            return vm.gotrue || vm.openModal("login"), vm.gotrue;
        },
        refresh: (e)=>(vm.gotrue || vm.openModal("login"), vm.gotrue.currentUser().jwt(e)),
        init: (e)=>{
            !function(e = {}) {
                if (document.getElementById("netlify-identity-widget")) return;
                const { APIUrl: t, logo: n = !0, namePlaceholder: i, locale: r } = e;
                if (e.cookieDomain) {
                    if (/[;\r\n]/.test(e.cookieDomain)) throw new Error("Invalid cookieDomain: must not contain semicolons or newlines");
                    vm.cookieDomain = e.cookieDomain;
                }
                r && (vm.locale = r);
                const o = document.querySelectorAll("[data-netlify-identity-menu],[data-netlify-identity-button]");
                Array.prototype.slice.call(o).forEach((e)=>{
                    const t = null === e.getAttribute("data-netlify-identity-menu") ? "button" : "menu";
                    P(R(Sr.Provider, {
                        value: vm,
                        children: R(Nm, {
                            mode: t,
                            text: e.innerText.trim()
                        })
                    }), e);
                }), vm.init(Im(t)), vm.modal.logo = n, vm.setNamePlaceholder(i || null), Lm = document.createElement("iframe"), Lm.id = "netlify-identity-widget", Lm.title = "Netlify identity widget", Lm.onload = ()=>{
                    const e = Lm.contentDocument.createElement("style");
                    e.innerHTML = wm.toString(), Lm.contentDocument.head.appendChild(e), P(R(Sr.Provider, {
                        value: vm,
                        children: R(Zr, {})
                    }), Lm.contentDocument.body), function() {
                        const e = (document.location.hash || "").replace(/^#\/?/, "");
                        if (!e) return;
                        const t = e.match(Em);
                        t && (vm.verifyToken(t[1], t[2]), document.location.hash = "");
                        e.match(Sm) && (vm.openModal("signup"), document.location.hash = "");
                        if (e.match(Am)) {
                            const t = {};
                            if (e.split("&").forEach((e)=>{
                                const [n, i] = e.split("=");
                                t[n] = i;
                            }), document && t.access_token && ym(t.access_token), t.state) try {
                                const e = decodeURIComponent(t.state), { auth_type: n } = JSON.parse(e);
                                if ("implicit" === n) return;
                            } catch  {}
                            document.location.hash = "", vm.openModal("login"), vm.completeExternalLogin(t);
                        }
                    }();
                }, km(Lm, Om), Lm.src = "about:blank";
                const a = e.container ? document.querySelector(e.container) : document.body;
                a.appendChild(Lm), Tm && (Lm.setAttribute("style", Tm), Tm = null);
            }(e);
        },
        setLocale: (e)=>{
            e && (vm.locale = e);
        },
        store: vm
    };
    let Tm = null;
    function km(e, t) {
        let n = "";
        for(const i in t)n += `${i}: ${t[i]}; `;
        e ? e.setAttribute("style", n) : Tm = n;
    }
    const xm = {
        localhost: !0,
        "127.0.0.1": !0,
        "0.0.0.0": !0
    };
    function Im(e) {
        const t = xm[window.location.hostname], n = !t && !vm.cookieDomain;
        if (e) return new sr({
            APIUrl: e,
            setCookie: n,
            clientName: "netlify-identity-widget"
        });
        if (t) {
            vm.setIsLocal(t);
            const e = localStorage.getItem("netlifySiteURL");
            return e && vm.setSiteURL(e), null;
        }
        return new sr({
            setCookie: n,
            clientName: "netlify-identity-widget"
        });
    }
    let Lm = null;
    const Om = {
        position: "fixed",
        top: 0,
        left: 0,
        border: "none",
        width: "100%",
        height: "100%",
        overflow: "visible",
        background: "transparent",
        display: "none",
        "z-index": 99
    };
    Dn(()=>vm.modal.isOpen, ()=>{
        vm.settings || vm.loadSettings(), km(Lm, {
            ...Om,
            display: vm.modal.isOpen ? "block !important" : "none"
        }), vm.modal.isOpen ? jm("open", vm.modal.page) : jm("close");
    }), Dn(()=>vm.siteURL, ()=>{
        let e;
        if (null === vm.siteURL || void 0 === vm.siteURL ? localStorage.removeItem("netlifySiteURL") : localStorage.setItem("netlifySiteURL", vm.siteURL), vm.siteURL) e = `${vm.siteURL.replace(/\/$/, "")}/.netlify/identity`;
        vm.init(Im(e), !0);
    }), Dn(()=>vm.user, ()=>{
        vm.user ? jm("login", vm.user) : jm("logout");
    }), Dn(()=>vm.gotrue, ()=>{
        vm.gotrue && jm("init", vm.gotrue.currentUser());
    }), Dn(()=>vm.error, ()=>{
        jm("error", vm.error);
    });
    const Em = /(confirmation|invite|recovery|email_change)_token=([^&]+)/, Sm = /error=access_denied&error_description=403/, Am = /access_token=/;
    return "undefined" != typeof window && (window.netlifyIdentity = zm), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", ()=>{
        zm.init();
    }) : zm.init(), zm;
});

},{"d6f41bb48b76cc2b":"bCaf4"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["i4syP","9f5IL"], "9f5IL", "parcelRequirefc40", {})

//# sourceMappingURL=test.3052eed7.js.map
