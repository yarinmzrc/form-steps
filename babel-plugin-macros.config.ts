//./babel-plugin-macros.config.js

module.exports = {
    tailwind: {
      plugins: ["macros"],
      config: "./tailwind.config.ts",
      format: "auto"
    }
  };