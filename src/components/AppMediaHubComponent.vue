<template>
    <section class="card">
        <h4>Media Hub</h4>
        <div class="card-body">
            <div>
            <span class="title">AI Image</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> None</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div>
            <span class="title">Number of Images</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 3</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div>
            <span class="title">Image Style</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> None</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div>
            <span class="title">Images Size</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" />1332x1768 (16:9)</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div class="intense">
            <input type="checkbox" checked name="" id=""> include the main keyword in the first images as Alt-text. Relevant keywords will be picked up and added to the rest to the rest of the images.
        </div>
        <div>
            <span class="title">Youtube Videos</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> Yes</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div>
            <span class="title">Number of Videos</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> 1</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        <div>
            <span class="title">Layout Option</span>
            <div class="select-group">
                <select name="" id="">
                    <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> Distribute evenly</option>
                </select>
                <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
            </div>
        </div>
        
        <div class="intense">
            <input type="checkbox" checked name="" id=""> All media elements will be striclty under the headings. 
            If disabled, the AI will decide and find the placement.
        </div>
        </div>
         

    </section>
</template>

<style lang="less" scoped>
@import "../assets/base.less";

section {
    padding: 1rem;

    .card-body{
        display:grid;
        margin-top:1.5rem;
        grid-template-columns: 15rem 12rem 18rem 15rem 15rem;
        gap:1.5rem;
        .select-group{
            .select-group(100%,2.3rem);
            border: solid 0.1px rgb(210, 209, 209);
        }
        .title {
                .title();
                color:black;
                padding: 0rem 0 0.3rem 0;
        }

        .intense {
            grid-column: 1/span 5;
            font-size:13px;
            display: flex;
            align-items: center;
            gap:0.3rem;

        }

    }

    
    
}


</style>