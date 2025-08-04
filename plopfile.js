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
    type: "addMany",
    templateFiles: `plop-templates/ui/**`,
    destination: `packages/ui/src/{{kebabCase componentName}}`,
    base: `plop-templates/ui`,
    abortOnFail: true,
  }
]
  });
}