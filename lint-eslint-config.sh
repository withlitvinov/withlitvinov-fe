cp eslint.config.js eslint.config.js.bak
cp eslint.config.js __to_copy__eslint.config.js
pnpm eslint __to_copy__eslint.config.js
rm eslint.config.js
mv __to_copy__eslint.config.js eslint.config.js