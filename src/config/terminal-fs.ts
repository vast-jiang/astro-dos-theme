// 定义文件系统结构
export const FILE_SYSTEM = {
  root: {
    type: 'dir',
    children: {
      home: {
        type: 'dir',
        children: {
          guest: {
            type: 'dir',
            children: {
              'readme.txt': { type: 'file', content: '欢迎来到 VAST_OS v3.0。\n这里是我的数字后花园。\n你可以使用 ls, cd, cat 等命令探索这里。' },
              'contact.txt': { type: 'file', content: 'Email: 16909925690@qq.com\nGithub: github.com/vast-jiang' },
              'projects': { type: 'link', target: '/#projects' }, // 链接类型
              'blog': { type: 'link', target: '/logs' },
              'secret.txt': { type: 'file', content: '你发现了彩蛋！输入 "matrix" 试试看？' }
            }
          }
        }
      },
      bin: {
        type: 'dir',
        children: {
          'help': { type: 'exe', action: 'help' },
          'game': { type: 'exe', action: 'game' },
          'music': { type: 'exe', action: 'music' },
          'theme': { type: 'exe', action: 'theme' }
        }
      },
      etc: {
        type: 'dir',
        children: {
          'os-release': { type: 'file', content: 'NAME="Astro DOS"\nVERSION="3.0.0"\nID=vast-os' }
        }
      }
    }
  }
};

// 初始路径
export const INITIAL_PATH = ['home', 'guest'];