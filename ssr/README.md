# Notes

You need the following versions.

- Angular CLI: 14.2.10
- Node: 14.21.2
- Package Manager: npm 6.14.17 
- Angular Universal: 14.2.0

Install `nvm`. Then install the node version.

```bash
nvm install 14.21.2
```

Then install ng-cli.

```bash
npm install -g @angular/cli@14.2.10
```

Then create application.

```bash
ng new web
```

Then add Angular Univeral. 

```bash
cd web
ng add @nguniversal/express-engine
```

Try to see if it works.

```bash
curl http://localhost:4200
```

## Folders

- [apps](apps): rest and web (angular) applications
- [t00](t00): simple NG-SSR application without any transfer state; also shows how to containerize application using docker
- [t01](t01): copy over distribution build of [t00](t00) and run using `node` or `pm2`
- [t02](t02): NG-SSR application with transfer state and route resolver

## Links

- [NG-CLI, NG, Node Compatibility List](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js)
