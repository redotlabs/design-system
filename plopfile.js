export default function (plop) {
  plop.setGenerator('ui-component', {
    description: 'Create a new UI component structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
        validate: (input) => {
          if (!input) return 'Component name is required';
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'Component name must be in PascalCase (e.g., Button, TextField)';
          }
          return true;
        },
        transformer: (input) => input.charAt(0).toUpperCase() + input.slice(1)
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'plop-templates/component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'plop-templates/component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase name}}/{{kebabCase name}}.schema.ts',
        templateFile: 'plop-templates/component.schema.ts.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs'
      }
    ]
  });
}