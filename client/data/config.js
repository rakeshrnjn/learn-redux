import Raven from 'raven-js';

const sentry_key = '1940bc354cf24466a09d724e7568037d';
const sentry_app = '2362306';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
