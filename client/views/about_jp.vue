<template>
<div>
    <h2>このサイトは？</h2>
    クレアさんが配信で歌った曲を聞きたくなった時、<br>
    「どの配信でその曲歌いましたっけ…？」になったことがきっかけになって作ったものです。<br>
    全配信を直接確認して追加したのではないので、抜けた歌があったら、<br>
    ツイッター(<a :href="twitterURL" target="_blank">@Cella315</a>)
    とかメールフォーム(<a :href="googleMailFormURL" target="_blank">フォームリンク</a>)
    で教えてくだされば助かります！<br>
    <br>
    間違っているデータも教えてくだされば助かります！<br>
    優先的に機能だけを考えたので、デサインとかは後で少しずつ直していく予定です。<br>
    サイトのコードは <a :href="githubURL" target="_blank">{{githubURL}}</a>に公開されています。<br>
    もし他の方のサイトを作る時使うなら、ツイッターとかで一言お願いします。<br>
    他ではなくて、どのようによく改善できるのかを参考にしたいです…
</div>
</template>

<script>
export default {
  name: 'AboutJP',
  data() {
    return {
      twitterURL: "https://twitter.com/Cella315",
      googleMailFormURL: "https://docs.google.com/forms/d/e/1FAIpQLSdRXwt6_MB2lUkA6TJAAZRN5wLeR6vl9ccVXho7eFoGrfvwEQ/viewform?usp=sf_link",
      githubURL: "https://github.com/SisterClaire-Songs/SisterClaire-Songs.github.io"
    };
  },
  components: {}
}
</script>
