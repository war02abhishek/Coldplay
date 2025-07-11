/*
 * For using development environment, make changes to environment.ts
 * For using uat environment, make changes to environment.uat.ts
 * For using production environment, make changes to environment.production.ts
 */
export const environment = {
  production: false,

  // SECRETS
  localSecret: 'b7d1f1c3-f8a2-4a1e-9c3f-91e2c75f84dd',
  salt: '4b64210f88ea7c9b12dc1e3e30cfbcf5',

  // API URLs
  apiUrl: 'http://localhost:8080',
};
