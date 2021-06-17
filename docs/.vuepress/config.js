module.exports = {
	"title": "笔记",
	"description": "笔记",
	"dest": "dist",
	"serviceWorker": false,
	"head": [
		['link', { rel: 'icon', href: '/logo.png' }] //额外的需要被注入到当前页面的 HTML <head> 中的标签
	],
	"configureWebpack": {
		"resolve": {
			"alias": {}
		}
	},
	"markdown": {},
	"themeConfig": {
		"repo": "aique127/notes",
		"repoLabel": "点亮⭐不迷路",
		"editLinks": true,
		"docsDir": "docs",
		"editLinkText": "为该章节纠错",
		"lastUpdated": "上次更新",
		"nav": [
			{
				"text": "首页",
				"link": "/"
			},
			{
				"text": "🙋‍♂️ 一起成长",
				"link": "/guide/"
			},
			{
				"text": "🔥 博客",
				"link": "https://aiq127.cn"
			}
		],
		"sidebar": [
			[
				"/guide/",
				"前言"
			],
			{
				"title": "工具篇",
				"collapsable": true,
				"children": [
					[
                        "/guide/nginx",
                        "Nginx安装"
                    ]
				]
			}
			// {
			// 	"title": "理念篇",
			// 	"collapsable": true,
			// 	"children": [
			// 		{
			// 			"title": "第一章 React理念",
			// 			"children": [
			// 				[
			// 					"/guide/1",
			// 					"React理念"
			// 				]
			// 			]
			// 		},
			// 		{
			// 			"title": "第二章 前置知识",
			// 			"children": [
			// 				[
			// 					"/guide/1",
			// 					"源码的文件结构"
			// 				],
			// 				[
			// 					"/guide/1",
			// 					"调试源码"
			// 				],
			// 				[
			// 					"/guide/1",
			// 					"深入理解JSX"
			// 				]
			// 			]
			// 		}
			// 	]
			// }
		]
	},
	"base": ""
}