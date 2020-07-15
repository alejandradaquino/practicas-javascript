<template>
  <div>
    <h2>{{subtitle}}</h2>
    <input v-model="message" placeholder="edíteme" />
    <p>El mensaje es: {{ message }}</p>
    <span>El mensaje multilínea es:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br />
    <textarea v-model="textareaMsg" placeholder="agregar múltiples líneas"></textarea>
    {{textareaMsg}}
    <div id="example-3">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <input type="radio" id="uno" value="Uno" v-model="picked" />
    <label for="uno">Uno</label>
    <br />
    <input type="radio" id="Dos" value="Dos" v-model="picked" />
    <label for="Dos">Dos</label>
    <br />
    <span>Eligió: {{ picked }}</span>
    <div>
      <select v-model="selected">
        <option disabled value>Seleccione un elemento</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Eligió: {{ selected }}</span>
    </div>

    <div>
      <select v-model="selecteds" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Seleccionados: {{ selecteds }}</span>
    </div>

    <div>
      <select v-model="selectedoption">
        <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <span>Seleccionado: {{ selectedoption }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-component",
  data: () => ({
    subtitle: "A subtitle",
    message: "A Input Messge",
    textareaMsg: "a text area",
    checkedNames: [],
    picked: "",
    selected: "",
    selecteds: [],
    selectedoption: "A",
    options: [
      { text: "Uno", value: "A" },
      { text: "Dos", value: "B" },
      { text: "Tres", value: "C" }
    ]
  })
};
</script>
<style lang="stylus" scoped></style>