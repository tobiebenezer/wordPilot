<template>
  <section>
    <h4>Structure</h4>
    <div class="structure">
      <div>
        <span class="title">Conclusion</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Tables</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">H3</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Lists</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Italics</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Quotes</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Key Takeaways</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">FAQs</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
      <div>
        <span class="title">Bold</span>
        <div class="select-group">
          <select name="" id="">
            <option value="">Yes</option>
          </select>
          <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
        </div>
      </div>
    </div>
    <h4>Connect to Web</h4>
    <div class="connect">
      <div class="lc">
        <div class="lc-1">
          <div>
            <span class="title">Network</span>
            <div class="select-group">
              <select name="" id="">
                <option value="">No</option>
              </select>
              <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
          </div>
          <div>
            <span class="title">Source links</span>
            <div class="select-group">
              <select name="" id="">
                <option value=""></option>
              </select>
              <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
          </div>
        </div>

        <div>
          <span class="title">Search Source</span>
          <div class="select-group">
            <select name="" id="">
              <option value="">Real-Time Search Results</option>
            </select>
            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
          </div>
        </div>
      </div>
      <div class="rc">
        <h4>Search Depth</h4>
        <p>
          Quickly fins from thematic source and uses them as factual bases for writing an article
          <br />
          <br />

          The technology of Reat-Time Search Results enable the immediat acquistion of search
          findings, which are the utilized for article writing.
        </p>
      </div>
    </div>
    <div class="ilink">
      <div class="url">
        <span class="title">URls</span>
        <textarea name="" id=""></textarea>
      </div>
      <div class="card">
        <h4>Internal Link</h4>
        <div class="card-body">
          <div>
            <span class="title">Insert Internal Link</span>
            <div class="select-group">
              <select name="" id="">
                <option value="">Yes</option>
              </select>
              <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
          </div>
          <div>
            <span class="title">Number of internal links</span>
            <div class="select-group">
              <select name="" id="">
                <option value="">5</option>
              </select>
              <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
          </div>
          <div>
            <span class="title">Post Links</span>

            <textarea name="" id="">Enter link url per line.</textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../assets/base.less';
section {
  margin: 2rem 0;
  .structure {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 12rem 12rem 12rem 12rem 12rem 12rem;
    gap: 1.2rem;
  }

  .connect {
    display: flex;
    gap: 4rem;
    .lc {
      flex: 1 1;
      margin-bottom: 1rem;

      width: 30rem;
      .lc-1 {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        div {
          width: 14.5rem;
        }
      }
    }

    .rc {
      flex: 3 1;
      font-size: 12px;
      p {
        width: 36rem;
      }
    }
  }
  .ilink {
    .url {
      margin-bottom: 1rem;
      textarea {
        width: 70rem;
        height: 3.6rem;
      }
    }

    .card {
      padding: 1rem;
      .card-body {
        margin-top:1rem;
        display:flex;
        gap:1.2rem;

        div:nth-child(1){
            width:14.5rem;
            
        }

        div:nth-child(2){
            width:14.5rem;
            
        }

        div:nth-child(3){
            textarea {
                width:40rem;
                border: solid 1px rgb(206, 204, 204);
                height: 5rem;
            }
            
        }
      }
    }
  }

  .select-group {
    .select-group(100%,2.3rem);
    border: solid 0.1px rgb(210, 209, 209);
  }

  .title {
    .title();
    color: black;
    padding: 0rem 0 0.3rem 0;
  }
}
</style>