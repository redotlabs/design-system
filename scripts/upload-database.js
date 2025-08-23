import * as UIs from '@redotlabs/ui';
import * as Components from '@redotlabs/ui/only-components';
import * as Tokens from '@redotlabs/tokens';
import * as Themes from '@redotlabs/themes';
import { readFileSync } from 'fs';
import { join } from 'path';

function getVersion() {
  try {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  } catch (error) {
    console.warn('⚠️  Could not read version from package.json, using default');
    return '1.0.0';
  }
}

function extractVariantOptions(variantsOptions) {
  if (!variantsOptions?.variants) return {};

  const entries = Object.entries(variantsOptions.variants).map(
    ([name, opts]) => {
      return [name, Object.keys(opts)];
    }
  );
  return Object.fromEntries(entries);
}

function convertToJson(data) {
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      const result = { name: key };

      const entries = Object.entries(value);
      const processedValues = entries.map(([subKey, subValue]) => {
        if (typeof subValue === 'object' && subValue !== null) {
          return {
            [subKey]: Object.keys(subValue),
          };
        } else {
          return {
            [subKey]: 'Single value',
          };
        }
      });

      result.value = processedValues;
      return result;
    }

    return {
      name: key,
      value: value,
    };
  });
}

async function uploadToAPI(data) {
  const API_URL =
    'https://server.ryxxn.com/redot/ai/api/v1/design-system/upload';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Upload successful:', result);
    return result;
  } catch (error) {
    console.error('❌ Upload failed:', error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting design system upload...');

  const version = getVersion();
  console.log(`📦 Using version: ${version}`);

  const components = Object.keys(Components)
    .map((name) => {
      const variantsKey = `${name.toLowerCase()}VariantsOptions`;
      const variantsOptions = UIs[variantsKey];

      if (!variantsOptions) {
        console.warn(`⚠️  No variants found for ${name}`);
        return null;
      }

      return {
        name,
        props: extractVariantOptions(variantsOptions),
      };
    })
    .filter(Boolean);

  const designSystemData = {
    version,
    design_system: {
      components,
      tokens: convertToJson(Tokens),
      themes: convertToJson(Themes),
    },
  };

  console.log('📊 Design System Data:');
  console.log(JSON.stringify(designSystemData, null, 2));

  try {
    await uploadToAPI(designSystemData);
    console.log('🎉 Design system uploaded successfully!');
    console.log(
      `📍 Check result at: https://d1uglncwbgsd7b.cloudfront.net/ui/${designSystemData.version}.json`
    );
  } catch (error) {
    console.error('💥 Upload process failed');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('💥 Script execution failed:', error);
  process.exit(1);
});
