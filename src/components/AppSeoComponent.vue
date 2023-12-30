<template>
  <section class="card">
    <h4>SEO</h4>
    <div >

      <div class="card-body">
        <div>
          <span class="title">SEO Score</span>
          <div class="select-group">
            <select name="" id="">
              <option value="">0-20%</option>
            </select>
            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
          </div>
        </div>
        <div>
          <span class="title">Keyword Density</span>
          <div class="select-group">
            <select name="" id="">
              <option value=""> 10 times</option>
            </select>
            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
          </div>
        </div>
        <div>
          <span class="title">Tags</span>
          <div class="select-group">
            <select name="" id="">
              <option value="">
                 None
              </option>
            </select>
            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
          </div>
        </div>
      </div>

      <div class="intense">
        <input type="checkbox" checked name="" id="" /> All media elements will be striclty under
        the headings. If disabled, the AI will decide and find the placement.
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import "../assets/base.less";

section {
  padding: 1rem;
  margin-top: 2rem ;
  .card-body {
    display: grid;
    margin-top:1.5rem;
    grid-template-columns: 11rem 11rem 11rem;
    gap:1.5rem;
    .select-group{
            .select-group(20rem,2.3rem);
            border: solid 0.1px rgb(210, 209, 209);
        }
        .title {
                .title();
                color:black;
                padding: 0rem 0 0.3rem 0;
        }

    }
    .intense {
        font-size:13px;
        display: flex;
        align-items: center;
        margin-top:1rem;
        gap:0.3rem;
    
    }
}
</style>