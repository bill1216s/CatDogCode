<template>
  <form @submit.prevent="submit" novalidate>
    <h1>報名表單</h1>

    <label>姓名 <span class="required">＊必填</span></label>
    <input v-model="form.name" required /><br><br>

    <label>生理性別 <span class="required">＊必填</span></label>
    <select v-model="form.gender" required>
      <option value="" disabled>請選擇</option>
      <option value="男">男</option>
      <option value="女">女</option>
    </select><br><br>

    <label>手機 <span class="required">＊必填</span></label>
    <input v-model="form.phone" required /><br><br>

    <label>Email <span class="required">＊必填</span></label>
    <input type="email" v-model="form.email" required /><br><br>

    <label>LINE ID <span class="required">＊必填</span></label>
    <input v-model="form.line" required /><br><br>

    <label>任務類型 <span class="required">＊必填</span></label>
    <select v-model="form.type" required>
      <option value="" disabled>請選擇</option>
      <option value="開箱特派員">開箱特派員</option>
      <option value="圖文小天才">圖文小天才</option>
    </select><br><br>

    <label>任務名稱</label>
    <input v-model="form.missionName" disabled /><br><br>

    <label>個人社群連結 <span class="required">＊需設定為公開</span></label><br><br>
    <input v-model="form.social[0]"  placeholder="社群連結 1" /><br><br>
    <input v-model="form.social[1]"  placeholder="社群連結 2" /><br><br>
    <input v-model="form.social[2]" placeholder="社群連結 3" /><br><br>
    <input v-model="form.social[3]" placeholder="社群連結 4" /><br><br>

    <label>曾發佈過的開箱內容 <span class="required">＊需設定為公開</span></label><br>
    <textarea v-model="form.pastContent"></textarea><br><br>

    <label>報名動機說明<span class="required">＊（50字內）</span></label><br>
    <textarea v-model="form.reason" maxlength="50" placeholder="最多 50 字"></textarea>
    <br><br>

    <label>驗證碼 <span class="required">＊必填</span></label><br>
    <img :src="captchaImg" @click="refreshCaptcha" />
    
    <button type="button" @click="refreshCaptcha">換一個</button>
    <br>
    <input v-model="form.captchaInput" placeholder="輸入圖片文字" />
    <br><br>

    <button type="button" @click="$router.back()">返回</button>
    <button type="submit">送出</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      captchaText: "",
      captchaImg: "",
      form: {
        name: "",
        gender: "",
        phone: "",
        email: "",
        line: "",
        type: "",
        missionName: this.$route.query.name || "",
        social: ["", "", "", ""],
        pastContent: "",
        reason: "",
        captchaInput: ""
      }
    }
  },

  mounted() {
    this.refreshCaptcha()
  },

  methods: {
    submit() {
      if (
        !this.form.name ||
        !this.form.gender ||
        !this.form.phone ||
        !this.form.email ||
        !this.form.line ||
        !this.form.type
      ) {
        alert("請填寫所有必填欄位")
        return
      }

      if (!this.form.social[0]) {
       alert("請填寫第一個社群連結")
       return
      }

      if (this.form.captchaInput !== this.captchaText) {
        alert("驗證碼錯誤")
        this.refreshCaptcha()
        this.form.captchaInput = ""
        return
      }

      alert("送出成功")
    },

    refreshCaptcha() {
      const text = Math.random().toString(36).substring(2, 6)
      this.captchaText = text
      this.captchaImg =
        `https://dummyimage.com/120x40/000/fff&text=${text}`
    }
  }
}
</script>


<style>
.required {
  color: red;
  font-size: 12px;
}
</style>
