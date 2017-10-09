module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "cssSprite": {
      "type": "confirm",
      "message": "Install webapck-spritesmith?"
    },
  },
  "filters": {
    "src/assets/less/_sprite.css": "cssSprite",
    "src/assets/images/sprites/*": "cssSprite"
  },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll（公共静态资源）\n  npm run dev（开发专用）\n  npm run build（线上专用）"
};
