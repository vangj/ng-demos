# Purpose

Shows how to communicate from a child back to a parent.

- `child-bind` shows how to implement communication between the parent and child through two-way binding. The child component must have `Input()` and `Output()` and the name of the field is important (see this [article](https://angular.io/guide/two-way-binding)). For example, if the `Input()` name is `size` then the `Output()` name must be `sizeChange`. The output is actually an [EventEmitter](https://angular.io/api/core/EventEmitter).
- `child-output` shows how a parent component can listen in on outputs from a child component using an `Output()` event emitter. The binding is out and one way back to the parent. The parent will then supply a handler. Take a look at [observables](https://angular.io/guide/observables-in-angular).

# ComponentChildToParent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
