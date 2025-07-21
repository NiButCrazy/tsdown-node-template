import { defineConfig } from 'tsdown'


export default defineConfig([
  {
    entry: [ './src/index.ts' ],
    platform: 'node',
    dts: false, // 控制是否生成生成 .d.ts 声明文件，建议在 build 阶段添加 --dts 生成，这里 dev 阶段设置为 false
  },
])
