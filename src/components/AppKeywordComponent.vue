<template>
  <section>
    <div class="top-action">
      <div>
        <h4>Keywords to include in the text</h4>
        <p>
          if you do not provide the keywards, we will automatically generate relevant keywords from
          the main keyword for each section and use them to generate the article.
        </p>
      </div>
      <div>
        <button>NLP Keyword Generator</button>
      </div>
    </div>
    <div class="card">
      <div class="suggestions">
        <div class="size-text">
          <span> what do dermatologist prescribe for skin whitening?</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span> dermatologist prescribe </span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span>skin whitening treatment</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span> dermatologist recommend skin whiten product</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span> skkin lightening creams prescribed by dermatologists</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span>prescriprion medications for skin whitening</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span>professional skin whitening treatments</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span>dermatologist approved skin lightening treatments</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
        <div class="size-text">
          <span> topical skin whitening prescription</span>
          <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
      </div>
      <div>
        <span
          >Write some key word or phrase releveant to your blog, the press Enter of + to add
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../assets/base.less';

section {
  .top-action {
    margin: 1.3rem 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-size:12px;
    color: gray;

    h4 {
      font-size:14px;
      color:black;
    }

    button {
      border: none;
      background-color: @primary;
      width: 16rem;
      padding: 1rem;
      border-radius: @bradius;
      color: white;
    }
  }
  .card {
    padding: 1rem;
    display: grid;
    font-size: 12px;
    color: gray;

    .suggestions {
      display: block;

      div:nth-child(1) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(2) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(3) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(4) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(5) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(6) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(7) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(8) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }
      div:nth-child(9) {
        float: left;
        margin: 1rem 1rem 1rem 0;
      }

      .size-text {
        font-size: 10px;
        align-items: center;
        background: @lightprimary;
        padding: 0.6rem;
        display: flex;
        color: black;
        gap: 0.7rem;
        justify-content: space-between;
      }
    }
  }
}
</style>