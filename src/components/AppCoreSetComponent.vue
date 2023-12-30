<template>
    <section>
        <h4>Core Settings</h4>
        <div class="body">
            <div class="l-body">
                <div>
                    <span class="title">Language</span>
                    <div class="select-group">
                        <select name="" id="">
                        <option value="">English(us)</option>
                        </select>
                        <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                    </div>
                </div>
                <div>
                    <span class="title">Tone of Voice</span>
                    <div class="select-group">
                        <select name="" id="">
                            <option value="">Friendly</option>
                        </select>
                        <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                    </div>
                </div>
                <div>
                    <span class="title">Point of View</span>
                    <div class="select-group">
                        <select name="" id="">
                            <option value="">None</option>
                        </select>
                        <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                    </div>
                </div>
                <div>
                    <span class="title">Target Country</span>
                    <div class="select-group">
                        <select name="" id="">
                            <option value="">None</option>
                        </select>
                        <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                    </div>
                </div>
            </div>
            <div class="r-body">
                <div class="a-size">
                    <div>
                        <span class="title">Article Size</span>
                        <div class="select-group">
                            <select name="" id="">
                                <option value=""><img src="../assets/icons8-usa-48.png" alt="Icon" /> X-Small</option>
                            </select>
                            <span><font-awesome-icon :icon="['fas', 'chevron-down']" /></span>
                        </div>
                    </div>
                    <div class="size-text">
                        <span> 2400-3600 words, 9 - 12 H2 headings</span>
                    </div>
                </div>
                    <p>
                        <span>the X-small offers short articles or news, idea for quick and capturing immediate &nbsp;</span> 
                        <span>interest, ensuring your content remains fresh and timely in the eyes of your</span> 
                        audiences. <br>
                        <span class="details">
                            <span>
                                Details to include <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
                            </span>
                            <span>
                                Sample 1 | Sample 2 | Sample 3
                            </span>
                        </span>
                    
                    </p>
                    <div class="intense">
                        <input type="checkbox" name="" id=""> Intense mode; each section, beyond 
                        just the entire articule.
                    </div>
                    <div>
                        <textarea name="" id="" ></textarea>
                    </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import "../assets/base.less";

section {
    margin: 2.5rem 0;
    
    .body {
        display:flex;
        width:60vw;
        gap:5rem;

        .l-body {
            
            width: 27rem;
            .title {
                .title();
                color:black;
                padding: 1rem 0 0.3rem 0;
            }
            
        }

        .r-body {
            width: 27rem;
            .title {
                .title();
                color:black;
                padding: 1rem 0 0.3rem 0;
            }

            .a-size {
                display:grid;
                grid-template-columns: 13rem 13rem;
                gap:0.4rem;
                .size-text {
                    margin-top:2.5rem;
                    font-size:11px;
                    align-items: center;
                    background: @lightprimary;
                    
                    padding: 0.6rem;
                }
            }

            textarea {
                height: 5.5rem;
                width: 100%;
            }
             
            p {
                margin-top:1rem;
                margin-bottom :1rem;
                font-size: 11px;
                color:gray;

                .details{
                    color:black;
                    font-size: 15px;
                    padding-top:1rem;
                    display: flex;
                     
                    gap:3rem;

                    span:last-of-type {
                        color:rgb(52, 139, 253);
                    }
                }

            }
            .intense {
                font-size:14px;
                display: flex;
                align-items: center;
                margin-bottom:1rem;
                gap:0.3rem;                
            }
            
        }

        .select-group{
            .select-group(100%,2.3rem);
        }
    }

}
</style>