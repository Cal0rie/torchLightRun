// vite.config.js  
import {defineConfig} from 'vite'

import uni from '@dcloudio/vite-plugin-uni'
import requireTransform from 'vite-plugin-require-transform';

//引入vant及相关插件
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/  
export default defineConfig({
	// base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）  
	plugins: [
		uni(),
		requireTransform({
		      fileRegex: /.js$|.vue$/
		    }),
		Components({
		      resolvers: [VantResolver()],
		    }),
	],
})
