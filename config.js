/**
 * ================================================================
 *  新手只需要修改这个文件。其他文件不要动，也能完成一份生日邀请函。
 *  修改引号里的文字即可；每一行末尾的英文逗号请保留。
 * ================================================================
 */

window.BIRTHDAY_INVITATION = {
  // 1. 寿星信息
  heroName: '丁丁',
  englishName: 'BIRTHDAY EXPLORER',

  // 2. 时间：dateTime 用于倒计时，必须保持 2027-10-01T18:30:00+08:00 这种格式
  dateTime: '2026-09-27T00:00:00+08:00',
  dateLabel: '2026年09月27日 · 星期日',
  dateShort: '2026.09.27',
  timeLabel: '00:00',

  // 3. 地点与导航
  venue: '任意补给点',
  venueShort: '任意补给点',
  coordinateLabel: 'BIRTHDAY MEETING POINT',
  transport: '打开地图自由探索，发现食物后即可进入，建议绿色出行。',
  mapUrl: 'https://ditu.amap.com/',

  // 4. 主文案
  questTitle: '解锁快乐新一岁',
  invitationText: '新一岁的入口已经出现。诚邀你来到蓝洞，与我一起碰杯、分享蛋糕，把这一晚变成值得收藏的冒险记录。',
  giftNotice: '参与是最好的礼物，请轻装赴约。',
  endingTitle: '一起潜入快乐新一岁',

  // 5. 当天流程：可以增加或删除整组 { ... }
  schedule: [
    { time: '18:30', title: '能量补给', detail: '各自觅食 · 恢复体力 · 饱食度 +100', stars: '★' },
    { time: '19:00', title: '远程碰杯', detail: '选一杯喜欢的饮料 · 拍照留档 · 隔空 Cheers', stars: '★★' },
    { time: '20:30', title: '隐藏关卡', detail: '翻出一张旧照片 · 触发回忆彩蛋', stars: '★★★' },
  ],

  // 6. 角色来电文案。image 建议不要修改；message 可自由替换
  crewMessages: [
    { name: 'DAVE', image: './assets/dave-character.webp', message: '听说今天的任务不是抓鱼，而是把快乐值拉满！' },
    { name: 'BANCHO', image: './assets/bancho.webp', message: '值得纪念的新一岁，需要认真准备的料理。今日菜单：快乐，无限供应。' },
    { name: 'COBRA', image: './assets/cobra.webp', message: '船已备好，坐标已确认。' },
    { name: 'DR. BACON', image: './assets/bacon.webp', message: '根据我的研究，这将是蓝洞快乐指数最高的一天，请务必亲自参与。' },
  ],

  // 7. 打捞补给时随机弹出的祝福，以及通关后解锁的彩蛋
  gameBlessings: ['今天也要闪闪发光', '快乐补给已到账', '好运正在靠近', '愿望能量 +100', '新一岁继续勇敢', '生日快乐，天天开心'],
  gameRewards: ['新一岁万事顺意', '快乐值永久 MAX', '暴富装备已掉落', '好运连击 +100', '健康能量已补满', '愿望正在加速实现'],

  // 8. 背景音乐：默认使用与婚礼版一致的《潜水员戴夫》官方音乐试听链接
  // musicEnabled 改为 false 可关闭音乐；也可把 musicUrl 换成 ./assets/birthday-bgm.mp3
  musicEnabled: true,
  musicUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/7c/fc/817cfcb4-e07a-c9ee-21cc-2fe61ff00906/mzaf_12705664676681936623.plus.aac.p.m4a',
  musicHint: '点击播放 / 关闭官方音乐',

  // 9. 真实宾客后台：粘贴第三方表单的公开填写链接；留空则保持本地演示模式
  rsvpUrl: 'https://v.wjx.cn/vm/thxVyNG.aspx',
}
