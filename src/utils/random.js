const aphorisms = [
  '这是生命，吃，什么也吃；人确是为面包而生。面包的不平等是根本的不平等。',
  '生活也许就是这样，多一分经验便少一分幻想，以实际的愉快平衡实际的痛苦……',
  '经验是生活的肥料，有什么样的经验便变成什么样的人，在沙漠里养不出牡丹来。',
  '为个人努力的也知道怎样毁灭个人，这是个人主义的两端。',
  '爱与不爱，穷人得在金钱上决定，“情种”只生在大富之家。',
  '穷人仗着狠心维持个人的自由，那很小很小的一点自由。',
  '以前他所看不上眼的事，现在他都觉得有些意思——自己的路既走不通，便没法不承认别人作得对。',
  '大家都苦恼，他也不是例外；认识了自己，也想同情大家。',
  '个人的希望与努力蒙住了个人的眼，每个人都觉得赤手空拳可以成家立业。',
  '他只有两条路可走，去空洞的作梦，或切实的活着'
];

const getRandomAphorism = () => {
  let randomIndex = -1;
  while (randomIndex < 0 || randomIndex >= aphorisms.length) {
    randomIndex = ~~(Math.random() * 10);
  }
  return aphorisms[randomIndex];
}

export {
  getRandomAphorism,
};
