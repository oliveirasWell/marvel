module.exports = function (plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        message: 'component name',
        name: 'name',
        type: 'input',
      },
    ],
    actions: [
      {
        path:
          '../packages/react-ui/src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
        type: 'add',
      },
      {
        path:
          '../packages/react-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
        type: 'add',
      },
    ],
    description: 'component',
  });
};
