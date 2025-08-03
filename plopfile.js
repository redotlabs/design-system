export default function (plop) {
  plop.setGenerator('ui', {
    description: 'Create a new UI component structure',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name: (PascalCase or camelCase)',
        validate: (input) => {
          if (!input) return 'Component name is required';
          if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'Component name must contain only letters and numbers (e.g., button, textField, Button)';
          }
          return true;
        },
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase componentName}}/{{kebabCase componentName}}.tsx', 
        templateFile: 'plop-templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase componentName}}/{{kebabCase componentName}}.test.tsx', 
        templateFile: 'plop-templates/component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase componentName}}/{{kebabCase componentName}}.stories.tsx', 
        templateFile: 'plop-templates/component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase componentName}}/{{kebabCase componentName}}.schema.ts', 
        templateFile: 'plop-templates/component.schema.ts.hbs'
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{kebabCase componentName}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs'
      }
    ]
  });
}