// 导入必要的插件
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  // 指定入口文件
  input: 'src/index.ts',
  // 定义输出配置
  output: [
    {
      file: 'dist/bg2utils.esm.js',
      format: 'es', // ES模块格式
      sourcemap: true, // 生成source map
    },
    {
      file: 'dist/bg2utils.cjs.js',
      format: 'cjs', // CommonJS格式
      sourcemap: true,
    },
    {
      file: 'dist/bg2utils.umd.js',
      name: 'Bg2Utils', // UMD构建需要指定一个全局变量名
      format: 'umd',
      sourcemap: true,
    }
  ],
  // 配置插件
  plugins: [
    typescript(), // 使用TypeScript插件处理.ts文件
    resolve(), // 解析node_modules中的模块
    commonjs(), // 转换CommonJS模块为ES6
    terser(), // 压缩输出代码
  ]
};
