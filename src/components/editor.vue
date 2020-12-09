<template>
<div class="editor-container"> <!-- Two-way Data-Binding -->

    <quill-editor
      ref="myTextEditor"
      :value="content"
      :options="editorOption"
      @change="onEditorChange"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>

 
  <div class="editor-btn">
    <el-button type="primary" @click="handleSave">保存</el-button>
    <el-button type="success" @submit="handleSubmit">提交</el-button> 
  </div> 
</div>
 

</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
  
  export default {
    components:{quillEditor},
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
          }
        }
      }
    },
    methods: {
      handleSave(){},
      handleSubmit(){},
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>
<style >
.quill-editor{
  height: 90%;
}
.editor-container{
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ql-container{
  height: 80%;
}

.editor-btn{
  display: flex;
  justify-items: center;
  justify-content: center;
}

</style>