export const nextTick = Script.nextTick;

export const title = 'Frida';
export const browser = false;
export const env = {};
export const argv = [];
export const version = Frida.version;
export const versions = {};

function noop() {}

export const on = noop;
export const addListener = noop;
export const once = noop;
export const off = noop;
export const removeListener = noop;
export const removeAllListeners = noop;
export const emit = noop;
export const prependListener = noop;
export const prependOnceListener = noop;

export const listeners = function (name) { return []; }

export function binding(name) {
    throw new Error('process.binding is not supported');
}

export function cwd() { return '/' }
export function chdir(dir) {
    throw new Error('process.chdir is not supported');
}
export function umask() { return 0; }

export default {
    nextTick,
    title,
    browser,
    env,
    argv,
    version,
    versions,
    on,
    addListener,
    once,
    off,
    removeListener,
    removeAllListeners,
    emit,
    prependListener,
    prependOnceListener,
    listeners,
    binding,
    cwd,
    chdir,
    umask,
};
