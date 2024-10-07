import appendMany from "../common/appendMany";
const buttons = import.meta.glob("@/assets/images/buttons/*");

const container = document.querySelector("#buttons-div");

appendMany(container, buttons);
