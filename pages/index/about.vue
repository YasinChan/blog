<template>
  <div class="rightAbout box-shadow-class">
    <div class="rightAbout-first">
      <span class="rightAbout-first-span rightAbout-first-span1">天气：阴</span>
      <span class="rightAbout-first-span rightAbout-first-span2">日期：2018-10-10</span>
    </div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">我：</span>上海、前端写代码。</p>
    </div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">爱：</span>乒乓、吉他和画画。</p>
    </div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">做：</span>BUG、增删或改查。</p>
    </div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">想：</span>养狗、养猫有个她。</p>
    </div>
    <div class="rightAbout-p"></div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">关于博客</span></p>
    </div>
    <div class="rightAbout-p">
      <p>这是我的第三版博客了，第一版的是Hexo+GithubPage做成的，<i><a href="https://git.yasinchan.com" target="_blank">https://git.yasinchan.com</a></i>。</p>
    </div>
    <div class="rightAbout-p">
      <p>第二版历经艰辛，但中途夭折，不过给我这第三版博客积累了丰富的经验。</p>
    </div>
    <div class="rightAbout-p">
      <p>这是第三版博客，当然不是最后一版，我也将持续的完善这个博客。</p>
    </div>
    <div class="rightAbout-p">
      <p>这款博客代码也已经开源，分别是以下三个地址：</p>
    </div>
    <div class="rightAbout-p">
      <p><i><a href="https://yasinchan.com" target="_blank">主页</a></i> 的开源地址为 <i><a href="https://github.com/yasinchan/blog" target="_blank">https://github.com/yasinchan/blog</a></i>。</p>
    </div>
    <div class="rightAbout-p">
      <p><i><a href="https://yasinchan.com/admin/login" target="_blank">后台管理页</a></i> 的开源地址为 <i><a href="https://github.com/yasinchan/admin" target="_blank">https://github.com/yasinchan/admin</a></i>。</p>
    </div>
    <div class="rightAbout-p">
      <p><i><a href="https://yasinchan.com/api" target="_blank">Api</a></i> 的开源地址为 <i><a href="https://github.com/yasinchan/blog-be" target="_blank">https://github.com/yasinchan/blog-be</a></i>。</p>
    </div>
    <div class="rightAbout-p">
      <p>希望这篇博客可以记录我的学习和生活，</p>
    </div>
    <div class="rightAbout-p">
      <p>同时也希望如果有幸你能看到我的博客，也可以多多给我提建议哦~（将来会添加评论功能）</p>
    </div>
    <div class="rightAbout-p"></div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">朋友（友链）</span>想交换友链的朋友可以先联系我的邮箱哦~</p>
    </div>
    <div class="rightAbout-p">
      <p><i><a href="https://solarhell.com/" target="_blank">https://solarhell.com/</a></i></p>
    </div>
    <div class="rightAbout-p"></div>
    <div class="rightAbout-title">
      <p><span class="rightAbout-span">联系我哦</span></p>
    </div>
    <div class="rightAbout-p">
      <p>这是我的Github：<i><a href="https://github.com/yasinchan" target="_blank">https://github.com/yasinchan</a></i></p>
    </div>
    <div class="rightAbout-p">
      <p>这是我的邮箱：<i><a href="Mailto:yasinchan2016@gmail.com">yasinchan2016@gmail.com</a></i></p>
    </div>
    <div class="rightAbout-p"></div>
    <div class="rightAbout-p"></div>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped>
  .rightAbout {
    padding: 20px;
  }
  .rightAbout-first {
    border-bottom: 2px dashed #DCDFE6;
    height: 20px;
  }
  .rightAbout-first-span {
    font-size: 14px;
    font-weight: bold;
  }
  .rightAbout-first-span2 {
    float: right;
  }
  .rightAbout-title {
    padding: 14px 14px 0 14px;
    border-bottom: 2px dashed #DCDFE6;
    height: 40px;
  }
  .rightAbout-p {
    padding: 18px 14px 0 14px;
    border-bottom: 2px dashed #DCDFE6;
    height: 40px;
  }
  .rightAbout-span {
    font-size: 20px;
  }
  i:hover a {
    color: #0366d6;
    text-decoration: underline;
  }
  i a{
    transition: color .4s;
  }

</style>
